import React from "react";
import { SectionTitle } from "../../../styles";
import { AnimeItem, AnimeName, AnimeDescription } from "./styles";
import Layout from "../../../components/Layout";
import { Progress } from "semantic-ui-react";
import StarRatingComponent from "react-star-rating-component";

var query = `{
    Page{
        mediaList(userId:478182,status:COMPLETED){
        progress
        score
          media {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
            coverImage {
              extraLarge
              large
              medium
              color
            }
            mediaListEntry{
                score
            }
            meanScore
            episodes
            description(asHtml: false)
          }
        }
        }
        User(id: 478182) {
          statistics {
            anime {
              episodesWatched
              count
              genres {
                genre
                count
                minutesWatched
              }
            }
          }
        }
        
}`;

var url = "https://graphql.anilist.co",
  options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  };

class AnimeComplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaList: [],
      stats: [],
    };
    this.handleData = this.handleData.bind(this);
    this.handleFetch = this.handleFetch.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch() {
    fetch(url, options)
      .then(this.handleResponse)
      .then(this.handleData)
      .catch(this.handleError);
  }

  handleResponse(response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  handleError(error) {
    alert("Error, check console");
    console.error(error);
  }

  handleData(data) {
    var AnimeList = data.data.Page.mediaList;
    var User_Stats = data.data.User.statistics.anime;
    this.setState({ mediaList: AnimeList });
    this.setState({ stats: User_Stats });
    console.log(this.state.mediaList);
    console.log(User_Stats);
  }

  render() {
    const { user } = this.props;
    const anime = this.state.mediaList;
    const AnimeList = anime.map((d) => (
      <ul key={d.media.title.english}>
        <AnimeItem>
          <div className="row">
            <div className="column">
              <AnimeName>{d.media.title.english}</AnimeName>
              <AnimeName>{d.media.title.native}</AnimeName>
              <img
                src={d.media.coverImage.large}
                alt="Anime Cover Images"
              ></img>
            </div>

            <div
              className="column"
              className="Progress_rating"
              style={{ paddingLeft: 20 }}
            >
              <h6>Rating</h6>
              <StarRatingComponent
                name={"String"} /* name of the radio input, it is required */
                value={Math.round(
                  (d.score / 10) * 5
                )} /* number of selected icon (`0` - none, `1` - first) */
                starCount={5} /* number of icons in rating, default `5` */
                starColor={
                  "#ffb400"
                } /* color of selected icons, default `#ffb400` */
                emptyStarColor={
                  "#FFFFFF"
                } /* color of non-selected icons, default `#333` */
                editing={
                  false
                } /* is component available for editing, default `true` */
              />

              <div className="ProgressBar" style={{ width: 300 }}>
                <h5>Completion/episodes Watched:</h5>
                <Progress
                  percent={(d.progress / d.media.episodes) * 100}
                  size="small"
                  color="green"
                  active
                >
                  {d.progress}/{d.media.episodes}
                </Progress>
              </div>

              <AnimeDescription>
                {d.media.description.replace(/(<([^>]+)>)/gi, "")}
              </AnimeDescription>
            </div>
          </div>
        </AnimeItem>
      </ul>
    ));

    return (
      <Layout user={user}>
        <div class="row" >
          <SectionTitle>
            Total Anime watched: {this.state.stats.count}
          </SectionTitle>
        </div>
        {AnimeList}
      </Layout>
    );
  }
}
export default AnimeComplete;
