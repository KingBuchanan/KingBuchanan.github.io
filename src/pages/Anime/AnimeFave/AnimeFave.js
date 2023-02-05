import React from "react";
import { SectionTitle } from "../../../styles";
import { AnimeItem, AnimeName, AnimeDescription } from "./styles";
import Layout from "../../../components/Layout";
import { Progress } from "semantic-ui-react";
import StarRatingComponent from "react-star-rating-component";

var query = `{
  User(id: 478182) {
    favourites {
      anime {
        edges {
          node {
            episodes
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
            description(asHtml: false)
            season
            genres
            meanScore
          }
        }
      }
    }
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
  Page{
    mediaList(userId:478182){
      media {
        id
        title {
          romaji
          english
          native
          userPreferred
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

class AnimeFave extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      favourites: {},
      statistics: {},
      total_count: 0,
      edges: [],
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
    console.log(this.state.edges);
    //console.log(typeof this.state.edges[0].node.coverImage.large)
    console.log(this.state.statistics.count);
    console.log(this.state.statistics);
    console.error(error);
  }

  handleData(data) {
    var animeData = data.data.User;
    console.log(animeData);
    this.setState({ favourites: animeData.favourites.anime });
    this.setState({ statistics: animeData.statistics.anime });
    this.setState({ total_count: animeData.statistics.anime.count });
    this.setState({ edges: animeData.favourites.anime.edges });
  }

  render() {
    const { user } = this.props;
    const animeData = this.state.edges;
    const animeFavs = animeData.map((d) => (
      <ul key={d.node.title.english}>
        <AnimeItem>
          <li key={d}>
            <div className="row">
              <div className="column">
                <AnimeName>{d.node.title.english}</AnimeName>
                <AnimeName>{d.node.title.native}</AnimeName>
                <img
                  src={d.node.coverImage.large}
                  alt="Anime Cover Images"
                ></img>
              </div>

              <div
                className="column"
                className="Progress_rating"
                style={{ paddingLeft: 20,paddingTop:50,paddingRight:20 }}
              >
                <h6>Rating</h6>
                <StarRatingComponent
                  name={"String"} /* name of the radio input, it is required */
                  value={Math.round(
                    (d.node.meanScore / 100) * 5
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
                  <Progress percent={100} size="small" color="green" active>
                    {d.node.episodes}/{d.node.episodes}
                  </Progress>
                </div>

                <AnimeDescription>{d.node.description.replace(/(<([^>]+)>)/ig,"")}</AnimeDescription>
              </div>
            </div>
          </li>
        </AnimeItem>
      </ul>
    ));

    // Define the config we'll need for our Api request
    return (
      <Layout user={user}>
        <div>
          <SectionTitle>
            My Favourites
          </SectionTitle>
          <div>{animeFavs}</div>
        </div>
      </Layout>
    );
  }
}

export default AnimeFave;
