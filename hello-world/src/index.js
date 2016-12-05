import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './App'
import FAQ from './FAQPage'
import TeamSign from './TeamSignUpPage'
import SuccessfulTeamSignUp from './SuccessfulTeamSignUp'
import Field from './Field'
import FallSports from './FallSports'
import SpringSports from './SpringSports'
import Rules from './RulesAndRegulations'
import Player from './PlayerSignUpPage'
import Forfeit from './ForfeitFee'
import Champions from './Champions'
import Employment from './Employment'
import FreeAgents from './FreeAgents'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/faq" component={FAQ}/>
    <Route path="/teamSignUp" component={TeamSign}/>
    <Route path="/fieldLocations" component={Field}/>
    <Route path="/FallSports" component={FallSports}/>
    <Route path="/SpringSports" component={SpringSports}/>
    <Route path="/RulesAndRegulations" component={Rules}/>
    <Route path="/PlayerSignUp" component={Player}/>
    <Route path="/ForfeitFee" component={Forfeit}/>
    <Route path="/Champions" component={Champions}/>
    <Route path="/Employment" component={Employment}/>
    <Route path="/FreeAgents" component={FreeAgents}/>
    <Route path="/SuccessfulTeamSignUp" component={SuccessfulTeamSignUp}/>
  </Router>
), document.getElementById('root'))
