import React from 'react'
import Header from './Header'
import imFields from './im_fields.jpg'

var HeadStyle = {
textAlign: 'center'
}

var fieldStyle = {
textAlign: 'center',
align: 'center',
paddingLeft: '5%',
width: '95%'
}

export default React.createClass({
    render: function() {
        return (
          <div>
            <Header/>

            <div style={HeadStyle}>
              <h1>Field Locations</h1>
              <img src={imFields} style={fieldStyle}/>
            </div>

          </div>
        )
    }
})
