import React from 'react'
import NavBar from './NavBar'
import villanova from './villanova_logo.png'

var divStyle = {
  width: '100%',
  paddingLeft: 0,
  height: '20%',
  backgroundColor: '#06285e'
}

var HeadStyle = {
  color: '#ffffff',
  textAlign: 'center',
  paddingTop: 10,
  fontSize: 60,
  opacity: 1,
  fontWeight: 'bold'
}

var imgStyle = {
  width: '50%',
  paddingLeft: 10
}

var navStyle = {
  textAlign: 'center',
  color: '#ffffff'
}


export default React.createClass({

  render() {
    return(
      <div style={divStyle}>
        <div className='row' >
          <div className='col-sm-3'>
            <img style={imgStyle} src={villanova}/>
          </div>
          <div className='col-sm-6' >
            <div style={HeadStyle}>Villanova Intramurals</div>
            <div style={navStyle}>
              <NavBar/>
            </div>
          </div>
          <div className='col-sm-3'>

          </div>
        </div>
      </div>
    )
  }
})
