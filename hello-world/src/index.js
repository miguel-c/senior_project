import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import About from './AboutPage'
import Home from './HomePage'
import FAQ from './FAQPage'
import TeamSign from './TeamSignUpPage'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/faq" component={FAQ}/>
    <Route path="/teamSignUp" component={TeamSign}/>
  </Router>
), document.getElementById('root'))
