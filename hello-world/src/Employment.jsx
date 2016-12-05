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

var mystyle = {
fontSize: 16
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
          <h1>Employment</h1>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <h3 style={HeadStyle}>Field Locations</h3>
            <br></br>

            <p style={pstyle}>See the map below for a map of the field locations. Click on the image below for a larger view.</p>
            <br></br>
            <br></br>
            <img src={imFields} style={fieldStyle} onClick={this.imgHandleClick}/>
          </div>
          <div className="col-sm-6" style={mystyle}>
            <br/>
            <br/>
            
            Are you looking for a job on campus? Did you play sports in high school or just enjoy watching sports?
            Do you want to use your knowledge of sports to make some money?

            <br/>
            <br/>

            Experience isn't necessary but, is preferred.  Training and whistles provided. Opportunities for promotion and raises annually.

            <br/>
            <h3>Now Hiring Basketball Officials!</h3>
            <br/>
            Please return this completed form no later than 12:00 PM on Monday, November 21st in person at the Intramural office on the 3rd
            floor of the Davis Center or by emailing Caroline Connolly, Intramural Sports Intern, at intramurals@villanova.edu.

            <br/>
            <br/>

            Feel free to reach out if you have any questions.

            <br/>
            <br/>

            <h5><b><a href='https://docs.google.com/a/villanova.edu/document/d/10CpR2-gEIdDvOYM2cCUkZ5-LYOBOsydXoFoNlp_Swq8/edit?usp=sharing'>New Officials Applicaition</a></b></h5>



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
