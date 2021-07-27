import React from 'react'
import { SectionTitle } from '../../../styles'
import { AnimeItem, AnimeName, AnimeDescription } from './styles'
import Layout from '../../../components/Layout'
import { Progress } from 'semantic-ui-react'
import StarRatingComponent from 'react-star-rating-component'
import stripHtml from 'string-strip-html'

const query =
`{
    Page{
        mediaList(userId:478182,status:CURRENT){
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

class AnimeCurrent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mediaList: []

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
    fetch(url, options).then(this.handleResponse)
      .then(this.handleData)
      .catch(this.handleError)
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
    this.setState({ mediaList: AnimeList })
    console.log(this.state.mediaList)
  }

  render () {
    const { user } = this.props

    const anime = this.state.mediaList
    const AnimeList = anime.map((d) => <ul key={d.media.title.english} >

        <AnimeItem>
        <div className="row">
        <div className="column">
        <AnimeName>{d.media.title.english}</AnimeName>
        <AnimeName>{d.media.title.native}</AnimeName>
        <img src={d.media.coverImage.large} alt="Anime Cover Images"></img>
       </div>

       <div className="column" className="Progress_rating" style={{ paddingLeft: 20, paddingTop: 70 }}>

         <h6>Rating</h6>
    <StarRatingComponent
    name={'String'} /* name of the radio input, it is required */
    value={Math.round((d.score / 10) * 5)} /* number of selected icon (`0` - none, `1` - first) */
    starCount={5} /* number of icons in rating, default `5` */
    starColor={'#ffb400'} /* color of selected icons, default `#ffb400` */
    emptyStarColor={'#FFFFFF'} /* color of non-selected icons, default `#333` */
    editing={false} /* is component available for editing, default `true` */
/>

<div className="ProgressBar" style={{ width: 300 }}>
  <h5>Completion/episodes Watched:</h5>
  <Progress percent={(d.progress / d.media.episodes) * 100} size="small" color="green" active >
      {d.progress}/{d.media.episodes}
    </Progress>
</div>

      <stripHtml> <AnimeDescription><p>{d.media.description.replace(/(<([^>]+)>)/ig, '')}</p></AnimeDescription></stripHtml>
       </div>
       </div>
        </AnimeItem>
       </ul>)

    return (
           <Layout user={user}>
<div>
<SectionTitle>
            Currently Watching: {this.state.mediaList.length}
          </SectionTitle>
               {AnimeList}
               </div>
           </Layout>

    )
  }
}
export default AnimeCurrent
