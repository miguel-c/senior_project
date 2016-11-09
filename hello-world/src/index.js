import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import About from './AboutPage'
import FAQ from './FAQPage'
import TeamSign from './TeamSignUpPage'
import SuccessfulTeamSignUp from './SuccessfulTeamSignUp'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/about" component={About}/>
    <Route path="/faq" component={FAQ}/>
    <Route path="/teamSignUp" component={TeamSign}/>
    <Route path="/SuccessfulTeamSignUp" component={SuccessfulTeamSignUp}/>
  </Router>
), document.getElementById('root'))
