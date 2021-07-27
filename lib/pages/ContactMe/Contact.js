import React from 'react'
import postscribe from 'postscribe'
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
    const {
      status
    } = this.state
    const {
      user
    } = this.props
    return /* #__PURE__ */React.createElement(Layout, {
      user: user
    }, /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('h4', null, 'Contact Me'), /* #__PURE__ */React.createElement('form', {
      onSubmit: this.submitForm,
      action: 'https://formspree.io/xgenozay',
      method: 'POST'
    }, /* #__PURE__ */React.createElement('div', {
      className: 'Email',
      style: {
        paddingTop: 10,
        paddingBottom: 10
      }
    }, /* #__PURE__ */React.createElement('label', {
      htmlFor: 'email'
    }, 'Email: '), /* #__PURE__ */React.createElement('input', {
      id: 'email',
      type: 'email',
      name: 'email',
      required: true
    })), /* #__PURE__ */React.createElement('div', null, /* #__PURE__ */React.createElement('label', {
      htmlFor: 'message'
    }, 'Message: '), /* #__PURE__ */React.createElement('textarea', {
      id: 'message',
      name: 'message',
      style: {
        marginTop: 10,
        paddingTop: 5,
        width: 179,
        height: 35
      }
    })), status === 'SUCCESS' ? /* #__PURE__ */React.createElement('p', null, 'Thanks!') : /* #__PURE__ */React.createElement('button', {
      style: {
        marginTop: 10
      }
    }, 'Submit'), status === 'ERROR' && /* #__PURE__ */React.createElement('p', null, 'Ooops! There was an error.'))))
  }

  handleScriptCreate () {
    this.setState({
      scriptLoaded: false
    })
  }

  handleScriptError () {
    this.setState({
      scriptError: true
    })
  }

  handleScriptLoad () {
    this.setState({
      scriptLoaded: true
    })
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
        this.setState({
          status: 'SUCCESS'
        })
      } else {
        this.setState({
          status: 'ERROR'
        })
      }
    }

    xhr.send(data)
  }
}
