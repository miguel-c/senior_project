
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
              <h1>Team Sign Up Page</h1>
            </div>
            <br/>
            <br/>
            <br/>

            <p>
              <div style={pStyle}>
                In order to sign up a team for a sport and season please follow the link below. Note that only one member of the team needs to fill out this form.
                After this form has been completed, please make sure each team member fills out the <b>Player Sign Up Form</b> in order to complete the sign up process
                and get your team ready for season! Failure to complete all forms by the Sign Up date will make your team ineligable for the current season.
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
            <p>
              <h4><b>Before Clicking the Link:</b></h4>
              Please have the folling information ready before filling out the form: <br/>
              <ul>
                <li>Team Captain Name and Email</li>
                <li>Team Name</li>
                <li>What sport and season you would like to sign up for</li>
                <li>All team player's names and emails</li>
              </ul>
            </p>

            <br/>
            <h4><a href='https://docs.google.com/a/villanova.edu/forms/d/e/1FAIpQLSeKA8X1aaNMt7eln3rbDQ0QroJUqB_LRu2Agl3nirh4utnPfQ/viewform'>Click here to begin the team sign up form</a></h4>

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
