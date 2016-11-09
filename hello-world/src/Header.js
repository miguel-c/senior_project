import React from 'react'
import NavBar from './NavBar'

var divStyle = {
  width: '100%',
  padding: 0,
  height: 200,
  textAlign: 'center',
  backgroundColor: '#06285e'
}

var HeadStyle = {
  textColor: '#ffffff',
  paddingTop: 50,
  fontSize: 40,
  fontWeight: 'bold'
}

export default React.createClass({

  render() {
    return(
      <div style={divStyle}>
        <div style={HeadStyle}>Villanova Intramurals</div>
        <NavBar/>
      </div>
    )
  }
})
