import React from 'react'
import Header from './Header'
import FlagImage from './vuFlagImage.jpg'
import imFields from './im_fields.jpg'

var HeadStyle = {
textAlign: 'center'
}

var pstyle = {
textAlign: 'center',
paddingLeft: '5%'
}

var imgStyle = {
textAlign: 'center',
align: 'center',
paddingLeft: '0%',
width: '100%'
}

var fieldStyle = {
textAlign: 'center',
align: 'center',
paddingLeft: '5%',
width: '95%'
}


export default React.createClass({
  imgHandleClick: function(e){
      console.log("Redirect Feild Locations");
      location.href = "#/fieldLocations";
  },

  render() {
    return(
      <div>
        <Header/>

        <div style={HeadStyle}>
          <h1>Welcome to Villanova Intramurals</h1>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <h3 style={HeadStyle}>Field Locations</h3>
            <br></br>

            <p style={pstyle}>See the map below for a map of the field locations. Click on the image below for a larger view.</p>
            <br></br>
            <br></br>
            <img src={imFields} style={fieldStyle} onClick={this.imgHandleClick} role="presentation"/>
          </div>
          <div className="col-sm-6">
            <br></br>
            <img src={FlagImage} style={imgStyle} role="presentation"/>
            <br></br>
            <br></br>
            <br></br>
            <p>
              The Intramural Sports Program is dedicated to fostering a fun, safe environment for the Villanova Community to compete in a variety of sports
              through proficiently organized leagues, tournaments and one-day events. Participate in a variety sports at varying levels of competition.
              Men's, Women's, and Co-Rec leagues available. Villanova also offers Extramural competition.
            </p>

            <p>
              Don't have a team? Need more players? Please check our Free Agents page for individuals available to play.
            </p>

            <p>
              We welcome your thoughts and input. Have a suggestion? Please email Caroline Connolly.

            </p>
            <br></br>
            <p>

              <b>NOW HIRING BASKETBALL OFFICIALS!</b> Check the employment page for more information.

            </p>
            <br></br>
            <p>

              <big><b>Game Cancellations Because of Weather</b></big>
              <br></br>
              If the weather looks bad, any game cancellations will be announced via the Intramural Wildcat Hotline: 610.581.CATS x2 for Intramurals.

            </p>
            <br></br>
            <p>
              <big><b>Field Locations</b></big>
              <br></br>
              See the map below for a map of the field locations. Click the image for a larger view.
            </p>
            <br></br>
            <p>
              <big><b>Philadelphia CITY 6 Extramural Classic</b></big>
              <br></br>
              The Philadelphia City 6 is composed of Drexel University, LaSalle University, Saint Joseph's University,Temple University, University of Pennsylvania and Villanova University.
            </p>

            <p>
              Tournaments are held at venues throughout the area, including some of the best collegiate facilities in the city such as the Palestra, Villanova Football Stadium and Saint Joseph's Alumni Hall!
            </p>

            <p>
              Sports played: Flag Football ·  Volleyball · Basketball · Softball (Men's, Women's, Co-ed)
            </p>

            <br/>
            <br/>
            <br/>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>

          </div>
          <div className="col-sm-3">
            <h3>Contact Us</h3>

            <p>
              Office of Intramurals & Recreation
              Located on the 3rd Floor of the Davis Center for Athletics and Fitness
            </p>

            <br></br>

            <p><b>Mailing Address:</b> </p>
            <p>800 Lancaster Avenue</p>
            <p>Villanova, PA 19085</p>
            <p><b>Fax:</b> (610) 519-3538</p>
            <p><b>Intramural Hotline:</b> (610) 581-CATS x2 </p>
            <p>Call the hotline for cancellation and delay updates.</p>

            <br></br>

            <p>Caroline Connolly</p>
            <p>Intramural Sports Intern</p>
            <p><b>Office:</b> 610-519-8936</p>
            <p><b>E-mail:</b> intramurals@villanova.edu</p>

            <br></br>

            <p>Lisa Harris</p>
            <p>Assiociate Athletics Director,Recreation</p>
            <p><b>Office:</b> (610) 519-6560</p>
            <p><b>E-mail:</b> lisa.harris@villanova.edu</p>

          </div>
        </div>
      </div>
        )
        }
})
