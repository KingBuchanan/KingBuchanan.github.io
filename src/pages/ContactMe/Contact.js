import React from 'react'
import Layout from '../../components/Layout'

export default class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
      scriptLoaded: true,
      scriptError: false

    }
  }

  render () {
    const { status } = this.state
    const { user } = this.props

    return (
        <Layout user={user}>

          <div>

          <h4>Contact Me</h4>

            <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xgenozay"
        method="POST"
      >
        <div className="Email" style={{ paddingTop: 10, paddingBottom: 10 }}>

        <label htmlFor="email">Email: </label>
        <input id="email" type="email" name="email" required/>
        </div>
        <div>
        <label htmlFor="message">Message: </label>
        <textarea id="message" name="message" style={{ marginTop: 10, paddingTop: 5, width: 179, height: 35 }} />
        </div>
        {status === 'SUCCESS' ? <p>Thanks!</p> : <button style={{ marginTop: 10 }}>Submit</button>}
        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </form>

      </div>

      </Layout>
    )
  }

  handleScriptCreate () {
    this.setState({ scriptLoaded: false })
  }

  handleScriptError () {
    this.setState({ scriptError: true })
  }

  handleScriptLoad () {
    this.setState({ scriptLoaded: true })
  }

  submitForm (ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
