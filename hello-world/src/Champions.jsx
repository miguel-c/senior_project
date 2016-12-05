import React from 'react'
import Header from './Header'
import FlagImage from './vuFlagImage.jpg'
import imFields from './im_fields.jpg'
import OutdoorSoccer from './OutdoorSoccer.jpg'
import OutdoorSoccerMen from './OutdoorSoccerMen.jpg'
import OutdoorSoccerCoed from './OurdoorSoccerCoed.jpg'
import FootballMen from './FootballMen.jpg'
import FootballCoed from './FootballCoed.jpg'
import FootballWomen from './FootballWomen.jpg'
import VolleyballMen from './VolleyballMen.jpg'
import UltimateMen from './UltimateMen.jpg'
import UltimateCoed from './UltimateCoed.jpg'
import IndoorSoccerMen from './IndoorSoccerMen.jpg'
import IndoorSoccerWomen from './IndoorSoccerWomen.jpg'
import SoftballMen from './SoftballMen.jpg'
import SoftballCoed from './SoftballCoed.jpg'
import TennisMenSingle from './TennisMenSingle.jpg'
import TennisMenDouble from './TennisMenDouble.jpg'
import TennisMixDouble from './TennisMixDouble.jpg'
import HandballMen from './HandballMen.jpg'
import HandballCoed from './HandballCoed.jpg'
import BasketballAMen from './BasketballAMen.jpg'
import BasketballCoed from './BasketballCoed.jpg'
import BasketballWomen from './BasketballWomen.jpg'
import BasketballBMen from './BasketballBMen.jpg'
import BasketballCMen from './BasketballCMen.jpg'


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

var champStyle = {
textAlign: 'center',
align: 'center',
width: '75%'
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
              <h1>Champions</h1>
            </div>

            <br/>
            <br/>
            <div style={pStyle}>
              <p>
                <h4><b>Outdoor Soccer:</b></h4>
                <br/>
                Women's Champs - Suck My Kick
                <img src={OutdoorSoccer} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Men's Champs - Meg for Mercy
                <img src={OutdoorSoccerMen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Coed Champs - Nova Narwhals
                <img src={OutdoorSoccerCoed} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                <h4><b>Football:</b></h4>
                <br/>
                Men's Champs - No Punt Intended
                <img src={FootballMen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Coed Champs - Good Riddance, Liz
                <img src={FootballCoed} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Women's Champs - The Ballad of Boogie Christ
                <img src={FootballWomen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                <h4><b>Fall Sand Volleyball Tournament - 2016:</b></h4>
                <br/>
                Men's Champs - Spiking Our Balls Around
                <img src={VolleyballMen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                <h4><b>Ultimate:</b></h4>
                <br/>
                Men's Champs - Kyle "Benedict Arnold" Wilkinson
                <img src={UltimateMen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Coed Champs - Mostly Engineers
                <img src={UltimateCoed} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                <h4><b>Indoor Soccer:</b></h4>
                <br/>
                Men's Champs - Back to Back Tour
                <img src={IndoorSoccerMen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Women's Champs - Suck My Kick
                <img src={IndoorSoccerWomen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                <h4><b>Softball:</b></h4>
                <br/>
                Men's Champs - Smack My Pitch Up
                <img src={SoftballMen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Coed Champs - Villanova Urban Space Program
                <img src={SoftballCoed} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                <h4><b>Tennis:</b></h4>
                <br/>
                Men's Singles - Conor Dunn<br/>
                <img src={TennisMenSingle} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Men's Doubles - Conor Dunn & Luke Troha
                <img src={TennisMenDouble} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Mixed Doubles - Chris Cote & Elizabeth Adams
                <img src={TennisMixDouble} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                <h4><b>Handball:</b></h4>
                <br/>
                Men's Champs - Daniel Can't Dance
                <img src={HandballMen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Coed Champs - Lenz Lickers Inaugural Handball Team
                <img src={HandballCoed} style={champStyle} onClick={this.imgHandleClick}/>


                <br/>
                <br/>
                <br/>
                <h4><b>Basketball:</b></h4>
                <br/>
                Men's A Champs - Splash Zone
                <img src={BasketballAMen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Coed A Champs - Mort's Minions
                <img src={BasketballCoed} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Women's Champs - Lob City <br/>
                <img src={BasketballWomen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Men's B Champs - Pick n Rub
                <img src={BasketballBMen} style={champStyle} onClick={this.imgHandleClick}/>

                <br/>
                <br/>
                <br/>
                Men's C Champs - Shipley Gators
                <img src={BasketballCMen} style={champStyle} onClick={this.imgHandleClick}/>

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
