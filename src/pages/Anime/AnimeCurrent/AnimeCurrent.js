import React, { Component } from 'react';
import { SectionTitle } from '../../../styles';
import {
  AnimeItem,
  AnimeName,
  AnimeDescriptionBox,
  AnimeCover,
  AnimeCarousel,
  AnimeDetails,
  ProgressBar,
  AnimeCarouselButton,
} from './styles';
import Layout from '../../../components/Layout';
import { Progress } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';
import stripHtml from 'string-strip-html';

const url = 'https://graphql.anilist.co';
const query = `
  {
    Page {
      mediaList(userId: 478182, status: CURRENT) {
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
          mediaListEntry {
            score
          }
          meanScore
          episodes
          description(asHtml: false)
        }
      }
    }
  }
`;

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({ query }),
};

class AnimeCurrent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaList: [],
      activeIndex: 0, // Tracks the currently active anime entry
    };
  }

  componentDidMount() {
    this.fetchAnimeData();
  }

  fetchAnimeData = () => {
    fetch(url, options)
      .then(this.handleResponse)
      .then(this.handleData)
      .catch(this.handleError);
  };

  handleResponse = (response) => {
    return response.json().then((json) =>
      response.ok ? json : Promise.reject(json)
    );
  };

  handleData = (data) => {
    const animeList = data.data.Page.mediaList;
    this.setState({ mediaList: animeList });
  };

  handleError = (error) => {
    alert('Error, check console');
    console.error(error);
  };

  // Navigate left
  goToPrevious = () => {
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: (activeIndex - 1 + this.state.mediaList.length) % this.state.mediaList.length,
    });
  };

  // Navigate right
  goToNext = () => {
    const { activeIndex } = this.state;
    this.setState({
      activeIndex: (activeIndex + 1) % this.state.mediaList.length,
    });
  };

  renderAnimeList = () => {
    return this.state.mediaList.map((anime, index) => (
      <AnimeItem key={anime.media.id} className={index === this.state.activeIndex ? 'active' : ''}>
        <AnimeCover>
          <img src={anime.media.coverImage.large} alt="Anime Cover" />
        </AnimeCover>

        <AnimeDetails>
          <AnimeName>{anime.media.title.english}</AnimeName>
          <AnimeName>{anime.media.title.native}</AnimeName>
          <StarRatingComponent
            name="Rating"
            value={Math.round((anime.score / 10) * 5)}
            starCount={5}
            starColor="#ffb400"
            emptyStarColor="#FFFFFF"
            editing={false}
          />

          <ProgressBar>
            <h5>Completion/episodes Watched:</h5>
            <Progress percent={(anime.progress / anime.media.episodes) * 100} size="small" color="green" active>
              {anime.progress}/{anime.media.episodes}
            </Progress>
          </ProgressBar>

          <AnimeDescriptionBox className={index === this.state.activeIndex ? 'active' : ''}>
            <p>{stripHtml(anime.media.description).result}</p>
          </AnimeDescriptionBox>
        </AnimeDetails>
      </AnimeItem>
    ));
  };

  render() {
    return (
      <Layout user={this.props.user}>
        <div>
          <SectionTitle>Currently Watching: {this.state.mediaList.length}</SectionTitle>
          <AnimeCarousel>
            {this.renderAnimeList()}
            <AnimeCarouselButton left onClick={this.goToPrevious}>
              &#10094;
            </AnimeCarouselButton>
            <AnimeCarouselButton right onClick={this.goToNext}>
              &#10095;
            </AnimeCarouselButton>
          </AnimeCarousel>
        </div>
      </Layout>
    );
  }
}

export default AnimeCurrent;
