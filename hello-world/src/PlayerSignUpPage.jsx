

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
              <h1>Player Sign Up Page</h1>
            </div>
            <br/>
            <br/>
            <br/>

            <p>
              <div style={pStyle}>
                Please make sure that your team captain has filled out the <b>Team Sign Up Form.</b> Please note that there are <b>Two Steps</b> that must be completed
                in order for you to be signed up to play in the current season on your desired team. Take careful note of the deadline for your season and have all forms
                completed prior to this date.

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
                <h4><b>Player Sign Up Forms:</b></h4>
                You Must complete <b>BOTH</b> steps below to be signed up. Click on the following links to complete: <br/><br/>
                <ol>
                  <li><a href='https://docs.google.com/a/villanova.edu/forms/d/e/1FAIpQLSepAMU1PuB6plqjhNXRrIjBbjxmGcz5VRKPlBb5SMEpzDl-mw/viewform'> Information Form</a></li>
                  <li><a href='https://dochub.com/miguelcorte-real/MRLJ9o/waiver_and_assumption_of_risk?dt=amujzbj5rcaiqzns'>Player Waiver</a></li>
                </ol>
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
