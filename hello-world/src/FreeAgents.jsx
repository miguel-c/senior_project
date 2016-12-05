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

var tableStyle = {
    border: 1,
    textAlign: "left"
}


export default React.createClass({
  imgHandleClick: function(e){
      console.log("Redirect Feild Locations");
      location.href = "#/fieldLocations";
  },

  render() {
    return(

      <div>
        <style>{"table{border:1px solid black;text-align: left;width:95%;padding:15;border-collapse: collapse;}"}</style>
        <style>{"th{border:1px solid black;padding:10px;font-size:16px}"}</style>
        <style>{"td{border:1px solid black;padding:10px;}"}</style>
        <style>{"tr:nth-child(even){background-color: #f2f2f2}"}</style>

        <Header/>

        <div style={HeadStyle}>
          <h1>Free Agents</h1>
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
          <div className="col-sm-6">

            <h3>Don't have a TEAM???</h3>
            <br/>
            Register as a free agent.  E-mail the following to intramurals@villanova.edu to be added to the list. <br/>
            <ul>
              <li>Name</li>
              <li>E-mail Address</li>
              <li>Sport(s) of Interest</li>
              <li>League(s) (Men's, Women's, Coed)</li>
            </ul>

            <br/>
            <b>Captains: </b>  Contact any free agents to sign them to your team.  You'll need to obtain a waiver from them.
            <br/>
            <b>Free Agents: </b> Once you get picked up by a team please e-mail lisa.harris@villanova.edu  to be removed from the listing.
            <br/>
            <b>Tournaments: </b>  FAs must be added by the captain's meeting. Waivers must accompany all roster additions and must be submitted to the IM office.
            <br/>
            <b>Seasons: </b> Teams have until the captain's meeting to add players. Waivers must accompany all roster additions and must be submitted to the IM office.
            <br/>
            <br/>
            <h5><b>*** Get ambitious and form a team from the free agent pool.  Take the initiative. ***</b></h5>
            <br/>
            <br/>

            <h3>Fall 2016</h3>
            <br/>


            <table >
              <tr>
                <th>Name</th>
                <th>E-mail Address</th>
                <th>Sport(s)</th>
                <th>League(s)</th>
              </tr>
              <tr>
                <td>Manny Aleshinloye</td>
                <td>ealeshin@villanova.edu</td>
                <td>Dodgeball, Indoor Volleyball</td>
                <td>Coed</td>
              </tr>
              <tr>
                <td>Warren Lou</td>
                <td>wluo1@villanova.edu</td>
                <td>Volleyball</td>
                <td>Coed</td>
              </tr>
              <tr>
                <td>Nicholas Calabrese</td>
                <td>ncalabr3@villanova.edu</td>
                <td>Indoor Volleyball</td>
                <td>Coed</td>
              </tr>
              <tr>
                <td>Michael Bartel</td>
                <td>mbartel2@villanova.edu</td>
                <td>Volleyball</td>
                <td>Men's and Coed</td>
              </tr>
              <tr>
                <td>Sarah Kleinschmidt</td>
                <td>skleinsc@villanova.edu</td>
                <td>Indoor or Sand Volleyball</td>
                <td>Women's or Coed</td>
              </tr>
              <tr>
                <td>Alexis Mendes</td>
                <td>amendes1@villanova.edu</td>
                <td>Volleyball</td>
                <td>Women's or Coed</td>
              </tr>
              <tr>
                <td>James Nirappel</td>
                <td>jnirappe@villanova.edu</td>
                <td>Volleyball</td>
                <td>Men's or Coed</td>
              </tr>
              <tr>
                <td>Lauren Constant</td>
                <td>Lconsta2@villanova.edu</td>
                <td>Volleyball</td>
                <td>Women's or Coed</td>
              </tr>

            </table>







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
