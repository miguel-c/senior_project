import React from 'react'
import Button from 'react-button'

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
  },


  render() {
    return(
      <div>
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
          <label>Player1: </label><input type="text"/>
          <br/>
          <label>Player2: </label><input type="text"/>
          <br/>
          <label>Player3: </label><input type="text"/>
          <br/>
          <label>Player4: </label><input type="text"/>
          <br/>
          <Button onClick={this.handleSubmit} activeStyle={{position:'relative', top: 1}}>Submit</Button>
        </div>
      </div>
    )
  }
})
