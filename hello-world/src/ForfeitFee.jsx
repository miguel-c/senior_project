//paypal.me/VUIntramurals


import React from 'react'
import Header from './Header'
import FlagImage from './vuFlagImage.jpg'
import imFields from './im_fields.jpg'

var HeadStyle = {
textAlign: 'center'
}

var pStyle = {
  fontSize: 16
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

        <div className="row">
          <div className="col-sm-3">
            <h3 style={HeadStyle}>Field Locations</h3>
            <br></br>

            <p style={pstyle}>See the map below for a map of the field locations. Click on the image below for a larger view.</p>
            <br></br>
            <br></br>
            <img src={imFields} style={fieldStyle} onClick={this.imgHandleClick}/>
          </div>
          <div className="col-sm-6">
            <div style={HeadStyle}>
              <h1>Forfeit Fee</h1>
            </div>
            <br/>
            <br/>
            <br/>

            <p>
              <div style={pStyle}>
                Please make sure that your team captain has filled out the <b>Team Sign Up Form</b> and that each player has individually filled out the
                <b>Player Sign Up Form and Waiver.</b> For each team to be successfully registered, please have your team captain follow the link below
                and pay the appropriate amount of money for the forfeit fee. Failure to pay the appropriate amount by the deadline will mark your team
                ineligable for the current season. See below for forfeit fee pricing.

              </div>
              <br/>
              <br/>

              If you have any questions or concerns about your team or the sign up process please contact:
              <br></br>
              <br/>

              <div className='row'>
                <div className='col-sm-4'>
                  <p><b>Caroline Connolly</b></p>
                  <p>Intramural Sports Intern</p>
                  <p><b>Office:</b> 610-519-8936</p>
                  <p><b>E-mail:</b> intramurals@villanova.edu</p>
                </div>

                <div className='col-sm-4'>
                  <p><b>Lisa Harris</b></p>
                  <p>Assiociate Athletics Director,Recreation</p>
                  <p><b>Office:</b> (610) 519-6560</p>
                  <p><b>E-mail:</b> lisa.harris@villanova.edu</p>
                </div>
              </div>
            </p>

            <br/>
            <br/>
            <div style={pStyle}>
              <p>
                <h4><b>Forfeit Fee Pricing:</b></h4>
                See below for the pricing of the forfeit fee depending on the sport in which your team is wishing to participate: <br/><br/>
                <div className="row">

                  <div className="col-sm-6">
                    <h5><b>Fall Sports</b></h5>
                    <ul>
                      <li>Sand Volleyball Tournament: $20 per team</li>
                      <li>Flag Football: $40 per team</li>
                      <li>Outdoor Soccer: $40 per team</li>
                      <li>Volleyball: $40 per team</li>
                      <li>Dodgeball Tournament: $20 per team</li>
                    </ul>
                  </div>

                  <div className="col-sm-6">
                    <h5><b>Spring Sports</b></h5>
                    <ul>
                      <li>5v5 Basketball: $40 per team</li>
                      <li>Handball: $20 per team</li>
                      <li>Indoor Soccer: $40 per team</li>
                      <li>Softball: $40 per team</li>
                      <li>Ultimate Frisbee Tournament: $20 per team</li>
                      <li>Tennis: $10 singles, $20 doubles</li>
                      <li>Sand Volleyball Tournament: $20 per team</li>
                    </ul>
                  </div>

                </div>
                <br/>
                <br/>
                <h4><a href='https://www.paypal.me/VUIntramurals'>Click here to pay the forfeit fee for your team.</a></h4>
              </p>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
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
            <h3>Team Sign Up Checklist:</h3>

            <div style={pStyle}>
              <ol>
                <li>Complete <b>Team Sign Up Form</b></li>
                <li>Each player must individually complete <b>Player Sign Up Form and Waiver</b></li>
                <li>Submit <b>Forfeit Fee</b></li>
              </ol>
              <br/>

              Please make sure all steps are completed before the deadline for the season you wish to compete in. If you are having any issues please contact
              the Office of Intramurals at Villanova.
            </div>


          </div>
        </div>
      </div>
        )
        }
})
