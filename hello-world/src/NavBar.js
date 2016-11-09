import React from 'react'
import Button from 'react-button'

var divstyle = {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto'
}

var buttonStyle = {
  width: 100
}

export default React.createClass({

  handleHome: function(e){
      console.log("Redirect Home");
      location.href = "#/";
  },

  handleAbout: function(e){
      console.log("Redirect About");
      location.href = "#/about";
  },

  handleFAQ: function(e){
      console.log("Redirect FAQ");
      location.href = "#/faq";
  },

  handleTeamSignUp: function(e){
      console.log("Redirect Team Sign Up");
      location.href = "#/teamSignUp";
  },

  render() {
    return(
      <div>
        <div style={divstyle}>
          <Button style={buttonStyle} onClick={this.handleHome} activeStyle={{position:'relative', top: 1}}>Home</Button>
          <Button style={buttonStyle} onClick={this.handleAbout} activeStyle={{position:'relative', top: 1}}>About</Button>
          <Button style={buttonStyle} onClick={this.handleFAQ} activeStyle={{position:'relative', top: 1}}>FAQ</Button>
          <Button style={buttonStyle} onClick={this.handleTeamSignUp} activeStyle={{position:'relative', top: 1}}>Team Sign Up</Button>
        </div>
      </div>
    )
  }
})
