import React from 'react'
import Button from 'react-button'

var divstyle = {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  color: '#ffffff'
}

var buttonStyle = {
  width: 100,
  color: '#ffffff'
}

export default React.createClass({

  handleHome: function(e){
      console.log("Redirect Home");
      location.href = "#/";
  },

  handleFall: function(e){
      console.log("Redirect Fall Sports");
      location.href = "#/FallSports";
  },

  handleSpring: function(e){
      console.log("Redirect Fall Sports");
      location.href = "#/SpringSports";
  },

  handleFAQ: function(e){
      console.log("Redirect FAQ");
      location.href = "#/faq";
  },

  handleTeamSignUp: function(e){
      console.log("Redirect Team Sign Up");
      location.href = "#/teamSignUp";
  },

  handlePlayerSignUp: function(e){
      console.log("Redirect Player Sign Up");
      location.href = "#/PlayerSignUp";
  },

  handleRule: function(e){
      console.log("Redirect Rules and Regulations");
      location.href = "#/RulesAndRegulations";
  },

  handleForfeit: function(e){
      console.log("Redirect Forfeit Fee");
      location.href = "#/ForfeitFee";
  },

  handleChampions: function(e){
      console.log("Redirect Champions");
      location.href = "#/Champions";
  },

  handleEmployment: function(e){
      console.log("Redirect Employment");
      location.href = "#/Employment";
  },

  handleAgents: function(e){
      console.log("Redirect Free Agents");
      location.href = "#/FreeAgents";
  },

  render() {
    return(
      <div>
        <div style={divstyle}>

          <Button style={buttonStyle} onClick={this.handleHome} activeStyle={{position:'relative', top: 1}}>Home</Button>
          <Button style={buttonStyle} onClick={this.handleFall} activeStyle={{position:'relative', top: 1}}>Fall Sports</Button>
          <Button style={buttonStyle} onClick={this.handleSpring} activeStyle={{position:'relative', top: 1}}>Spring Sports</Button>
          <Button style={buttonStyle} onClick={this.handleTeamSignUp} activeStyle={{position:'relative', top: 1}}>Team Sign Up</Button>
          <Button style={buttonStyle} onClick={this.handlePlayerSignUp} activeStyle={{position:'relative', top: 1}}>Player Sign Up</Button>
          <Button style={buttonStyle} onClick={this.handleForfeit} activeStyle={{position:'relative', top: 1}}>Forfeit Fee</Button>
          <Button style={buttonStyle} onClick={this.handleAgents} activeStyle={{position:'relative', top:1}}>FreeAgents</Button>
          <Button style={buttonStyle} onClick={this.handleRule} activeStyle={{position:'relative', top:1}}>Rules</Button>
          <Button style={buttonStyle} onClick={this.handleChampions} activeStyle={{position:'relative', top:1}}>Champions</Button>
          <Button style={buttonStyle} onClick={this.handleEmployment} activeStyle={{position:'relative', top:1}}>Employment</Button>
          <Button style={buttonStyle} onClick={this.handleFAQ} activeStyle={{position:'relative', top: 1}}>FAQ</Button>

        </div>
      </div>
    )
  }
})
