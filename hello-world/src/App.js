import React from 'react'
import Header from './Header'


var HeadStyle = {
textAlign: 'center'
}


export default React.createClass({

  render() {
    return(
      <div>
        <Header/>

        <div style={HeadStyle}>
          <h1>Home Page</h1>
        </div>
      </div>
    )
  }
})
