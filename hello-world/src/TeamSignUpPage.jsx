import React from 'react'
import Button from 'react-button'
import CustomDrop from './CustomDropDown'
import Header from './Header'

var divstyle = {
width: 875,
textAlign: 'right'
}

var HeadStyle = {
textAlign: 'center'
}

export default React.createClass({
  handleSubmit: function(e){
      console.log("Submit");
      location.href = "#/SuccessfulTeamSignUp";
  },

  render() {
    return(
      <div>
        <Header/>
        <div style={HeadStyle}><h1>Team Sign Up Page</h1></div>

        <div style={HeadStyle}><h3>Fill out the form below to create a new team.</h3></div>
        <div style={divstyle}>
          <label>Team Name: </label><input type="text"/>
          <br/>
          <label>Sport: </label><input type="text"/>
          <br/>
          <label>Season: </label><input type="text"/>
          <br/>
          <label>Captain Name: </label><input type="text"/>
          <br/>

          <CustomDrop></CustomDrop>
          <CustomDrop></CustomDrop>
          <CustomDrop></CustomDrop>

          <Button onClick={this.handleSubmit} activeStyle={{position:'relative', top: 1}}>Submit</Button>
        </div>
      </div>
    )
  }
})
