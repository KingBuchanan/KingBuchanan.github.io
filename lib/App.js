import React, { useState, useEffect } from 'react'
import Pages from './pages'
import './App.css'

function App () {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // NOTE: Use your username below
    fetch('https://gitconnected.com/v1/portfolio/kingbuchanan').then(res => res.json()).then(user => {
      setUser(user)
    })
  }, [])

  if (!user) {
    return /* #__PURE__ */React.createElement('div', null)
  }

  return /* #__PURE__ */React.createElement(Pages, {
    user: user
  })
}

export default App
