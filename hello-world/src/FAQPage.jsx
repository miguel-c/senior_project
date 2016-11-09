var React = require('react');
import Header from './Header'

var HeadStyle = {
textAlign: 'center'
}

var FAQPage = React.createClass({
    render: function() {
        return (
          <div>
            <Header/>

            <div style={HeadStyle}>
              <h1>FAQ Page</h1>
            </div>
          </div>
        );
    }
});

module.exports = FAQPage;
