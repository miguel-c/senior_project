var React = require('react');
import Header from './Header'

var HeadStyle = {
textAlign: 'center'
}

var AboutPage = React.createClass({
    render: function() {
        return (
          <div>
            <Header/>
            <div style={HeadStyle}>
              <h1>About</h1>
            </div>
          </div>
        );
    }
});

module.exports = AboutPage;
