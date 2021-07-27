/* eslint-disable react/prop-types */
import React from 'react'
import { SectionTitle } from '../../../styles'
import { AnimeItem, AnimeName, AnimeDescription } from './styles'
import Layout from '../../../components/Layout'
import { Progress } from 'semantic-ui-react'
import StarRatingComponent from 'react-star-rating-component'
const query = `{
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
        
}`
const url = 'https://graphql.anilist.co'
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    query: query
  })
}

class AnimeComplete extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mediaList: [],
      stats: []
    }
    this.handleData = this.handleData.bind(this)
    this.handleFetch = this.handleFetch.bind(this)
    this.handleError = this.handleError.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
  }

  componentDidMount () {
    this.handleFetch()
  }

  handleFetch () {
    fetch(url, options).then(this.handleResponse).then(this.handleData).catch(this.handleError)
  }

  handleResponse (response) {
    return response.json().then(function (json) {
      return response.ok ? json : Promise.reject(json)
    })
  }

  handleError (error) {
    alert('Error, check console')
    console.error(error)
  }

  handleData (data) {
    const AnimeList = data.data.Page.mediaList
    const userStats = data.data.User.statistics.anime
    this.setState({
      mediaList: AnimeList
    })
    this.setState({
      stats: userStats
    })
    console.log(this.state.mediaList)
    console.log(userStats)
  }

  render () {
    const {
      user
    } = this.props
    const anime = this.state.mediaList
    const AnimeList = anime.map(d => /* #__PURE__ */React.createElement('ul', {
      key: d.media.title.english
    }, /* #__PURE__ */React.createElement(AnimeItem, null, /* #__PURE__ */React.createElement('div', {
      className: 'row'
    }, /* #__PURE__ */React.createElement('div', {
      className: 'column'
    }, /* #__PURE__ */React.createElement(AnimeName, null, d.media.title.english), /* #__PURE__ */React.createElement(AnimeName, null, d.media.title.native), /* #__PURE__ */React.createElement('img', {
      src: d.media.coverImage.large,
      alt: 'Anime Cover Images'
    })), /* #__PURE__ */React.createElement('div', {
      className: 'column',
      style: {
        paddingLeft: 20
      }
    }, /* #__PURE__ */React.createElement('h6', null, 'Rating'), /* #__PURE__ */React.createElement(StarRatingComponent, {
      name: 'String', /* name of the radio input, it is required */

      value: Math.round(d.score / 10 * 5), /* number of selected icon (`0` - none, `1` - first) */

      starCount: 5, /* number of icons in rating, default `5` */

      starColor: '#ffb400', /* color of selected icons, default `#ffb400` */

      emptyStarColor: '#FFFFFF', /* color of non-selected icons, default `#333` */

      editing: false
      /* is component available for editing, default `true` */

    }), /* #__PURE__ */React.createElement('div', {
      className: 'ProgressBar',
      style: {
        width: 300
      }
    }, /* #__PURE__ */React.createElement('h5', null, 'Completion/episodes Watched:'), /* #__PURE__ */React.createElement(Progress, {
      percent: d.progress / d.media.episodes * 100,
      size: 'small',
      color: 'green',
      active: true
    }, d.progress, '/', d.media.episodes)), /* #__PURE__ */React.createElement(AnimeDescription, null, d.media.description.replace(/(<([^>]+)>)/ig, '')))))))
    return /* #__PURE__ */React.createElement(Layout, {
      user: user
    }, /* #__PURE__ */React.createElement('div', {
      class: 'row'
    }, /* #__PURE__ */React.createElement(SectionTitle, null, 'Total Anime watched: ', this.state.stats.count)), AnimeList)
  }
}

export default AnimeComplete
