import React from 'react'
import Button from 'react-button'
import Header from './Header'

var buttonStyle = {
paddingLeft: 775
}

var HeadStyle = {
textAlign: 'center'
}

export default React.createClass({
  handleSubmit: function(e){
      console.log("Return to home page");
      location.href = "#/";
  },

  render() {
    return(
      <div>
        <Header/>
        <div style={HeadStyle}><h1>Team Sign Up Page</h1></div>

        <div style={HeadStyle}><h3>Yay! You have successfully signed up your team to play! Good Luck :)</h3></div>

        <div style={buttonStyle}>
          <Button onClick={this.handleSubmit} activeStyle={{position:'relative', top: 1}}>Return to Home Page</Button>
        </div>
      </div>
    )
  }
})
