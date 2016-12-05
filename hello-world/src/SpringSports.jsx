var React = require('react');
import Header from './Header'
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

var SpringSportsPage = React.createClass({
  imgHandleClick: function(e){
      console.log("Redirect Feild Locations");
      location.href = "#/fieldLocations";
  },

    render: function() {
        return (
          <div>
            <Header/>

            <div style={HeadStyle}>
              <h1>Spring Sports</h1>
            </div>

            <div className='row'>
              <div className="col-sm-3">
                <h3 style={HeadStyle}>Field Locations</h3>
                <br></br>

                <p style={pstyle}>See the map below for a map of the field locations. Click on the image below for a larger view.</p>
                <br></br>
                <br></br>
                <img src={imFields} style={fieldStyle} onClick={this.imgHandleClick}/>
              </div>

              <br/>
              <br/>

              <div className="col-sm-6">
                <h4>5v5 Basketball (M, W, C)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/1r0AZiZiG9bILKtR9kt8DTCPrIhnnAUx4xspyxeHiLV8/edit?usp=sharing'>5v5 Basketball Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> TBA <br/>
                      <b>Times: </b> Sunday - Thursday 7:00 PM - 12:00 AM <br/>
                      <b>Location: </b> Nevin & Pavilion <br/>
                    </p>
                  </div>
                  <div className='col-sm-6'>
                    <p>
                      <b>Registration Period: </b> Tuesday, 12/6- Thursday 12/8 2-6pm <br/>
                      <b>Registration Location: </b> 3rd Floor Davis <br/>
                      <b>Forfeit Fee: </b> $40 per team <br/>
                    </p>
                  </div>
                </div>
                <hr/>
                <p>
                  <b>NOTES: </b> Playing times are non-negotiable.  Champions advance to the City Six Tournament, therefore graduate and staff teams can not play in
                  playoffs. (This only applies to Men's A League, Coed A Leauge, and the Women's League). The tournament will be held on Saturday, March 19th.
                  Participants can only play on ONE City 6 Team (ex. you can't play on our men's and co-ed teams in the tournament).
                  <br/>
                  MEN'S League ~ The men's league is divided into three (3) divisions based on level of play (A (highest skill), B, and C). You will need to
                  indicate which division you would like to participate in on your team roster. Previous champions of the B and C divisions must play up a division
                  in the following season (if  4+ players are returning).
                  <br/>
                  <b>
                    COED League ~ The coed league is divided into two (2) divisions based on level of play, A league (highest skill), and B league (more recreational).
                    You will need to indicate which division you would like to participate in on your team roster.
                  </b>
                  <br/>
                  To register a team you must have at least 5 participants (2M/3F for co-ed) on the roster and complete waivers!!
                  <br/>
                </p>
                <div className='row'>
                  <div className='col-sm-3'>
                    <b>M/W:</b> MAX playing: 5
                  </div>
                  <div className='col-sm-3'>
                    <b>MIN playing: </b> 4
                  </div>
                  <div className='col-sm-3'>
                    <b>C:</b> 3F/2M; or 2F/2M
                  </div>
                </div>

                <br/>
                <br/>

                <h4>Handball (M, W, C)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/1BlZBJ7GVPCnW19YhfOg76WxySAhr8TPV0oGlWr9R2p0/edit?usp=sharing'>Team Handball Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> TBA <br/>
                      <b>Times: </b> Sunday 10:00 AM- 6:00 PM <br/>
                      <b>Location: </b> Nevin <br/>
                    </p>
                  </div>
                  <div className='col-sm-5'>
                    <p>
                      <b>Registration Period: </b>  TBA @ 2-6pm <br/>
                      <b>Registration Location: </b> 3rd Floor Davis <br/>
                      <b>Forfeit Fee: </b> $20 per team <br/>
                    </p>
                  </div>
                </div>
                <hr/>
                <p>
                  <b>NOTES: </b> Playing times are non-negotiable.
                  <br/>
                  To register a team you must have at least 6 participants (3F/3M for co-ed) on the roster and complete waivers!!
                  <br/>
                </p>
                <div className='row'>
                  <div className='col-sm-3'>
                    <b>M/W:</b> MAX playing: 6
                  </div>
                  <div className='col-sm-3'>
                    <b>MIN playing: </b> 5
                  </div>
                  <div className='col-sm-3'>
                    <b>C:</b> 3F/3M; or 3F/2M
                  </div>
                </div>

                <br/>
                <br/>


                <h4>Indoor Soccer (M, W)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/1qDWDLHlDA7gp7a1zWakIXhHZ2i1S_WzO8zCr5C2W4eg/edit?usp=sharing'>Indoor Soccer League Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> TBA <br/>
                      <b>Time:</b> Monday-Thursday 5:00 PM -12:00 AM Sunday 5:00 PM- 12AM <br/>

                      <b>Location: </b> St. Mary's Gym <br/>
                    </p>
                  </div>
                  <div className='col-sm-5'>
                    <p>
                      <b>Registration Period: </b> TBA @ 2-6pm <br/>
                      <b>Registration Location: </b> 3rd Floor Davis <br/>
                      <b>Forfeit Fee: </b> $40 per team <br/>
                    </p>
                  </div>
                </div>
                <hr/>
                <p>
                  <b>NOTES: </b> Playing times are non-negotiable.
                  <br/>
                  To register a team you must have at least 6 participants on the roster and complete waivers!!
                  <br/>
                </p>
                <div className='row'>
                  <div className='col-sm-3'>
                    <b>M/W:</b> MAX playing: 6
                  </div>
                  <div className='col-sm-3'>
                    <b>MIN playing: </b> 5
                  </div>
                </div>
                <div><b>There is no COED league for indoor soccer</b></div>

                <br/>
                <br/>


                <h4>Softball (M, W, C)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/1gAJaitJ_R1IVVUiDh4WBpb5sjW_dqwRY2R-Et0rd2Og/edit?usp=sharing'>Softball Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> TBA <br/>
                      <b>Time: </b> Monday- Friday 2:45PM - 6:00PM, Sundays 9:00AM- 6:00PM <br/>
                      <b>Location: </b> Austin, Mendel, & Pike Fields<br/>
                    </p>
                  </div>
                  <div className='col-sm-5'>
                    <p>
                      <b>Registration Period: </b> TBA @ 2-6pm <br/>
                      <b>Registration Location: </b> 3rd Floor Davis <br/>
                      <b>Forfeit Fee: </b> $40 per team <br/>
                    </p>
                  </div>
                </div>
                <hr/>
                <p>
                  <b>NOTES: </b> Playing times are non-negotiable. PLAYERS MUST PROVIDE THEIR OWN GLOVES.
                  <br/>
                  To register a team you must have at least 10 participants (5M/5F for co-ed) on the roster and complete waivers!!
                  <br/>
                </p>
                <div className='row'>
                  <div className='col-sm-3'>
                    <b>M/W:</b> MAX playing: 10
                  </div>
                  <div className='col-sm-3'>
                    <b>MIN playing: </b> 8
                  </div>
                  <div className='col-sm-3'>
                    <b>C:</b> 5/5; or 4/4
                  </div>
                </div>

                <br/>
                <br/>

                <h4>Ultimate Frisbee Tournament (M, W, C)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/1dqu4E4OMWaeZymOlYnAWTMiv-UgkOEEw7X_m22sPFhQ/edit?usp=sharing'>Ultimate Frisbee Tournament Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> TBA <br/>
                      <b>Time: </b> Sunday-Thursday, 6-9PM<br/>
                      <b>Location: </b> Villanova Stadium<br/>
                    </p>
                  </div>
                  <div className='col-sm-5'>
                    <p>
                      <b>Registration Period: </b> TBA @ 2-6pm <br/>
                      <b>Registration Location: </b> 3rd Floor Davis <br/>
                      <b>Forfeit Fee: </b> $20 per team <br/>
                    </p>
                  </div>
                </div>
                <hr/>
                <p>
                  <b>NOTES: </b> Because it's a tournament, teams CANNOT choose the days/times they play.  Please create your roster accordingly.
                  <br/>
                  To register a team, you must have at least 7 participants (3/4 or 4/3 coed) on the roster and complete waivers!!
                  <br/>
                </p>
                <div className='row'>
                  <div className='col-sm-3'>
                    <b>M/W:</b> MAX playing: 7
                  </div>
                  <div className='col-sm-3'>
                    <b>MIN playing: </b> 7
                  </div>
                  <div className='col-sm-3'>
                    <b>C:</b> 4W/3M or 4M/3W
                  </div>
                </div>

                <br/>
                <br/>

                <h4>Tennis (M & W Singles, Single and Mixed Doubles)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/1g9JLZg1yVt6UUumUdnJCHDg18Agm34lgCQvH3TLUFY8/edit?usp=sharing'>Tennis Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> Set by Individual Teams <br/>
                      <b>Time: </b> Set by Individual Teams<br/>
                      <b>Location: </b> Sullivan Courts & West Campus Courts<br/>
                    </p>
                  </div>
                  <div className='col-sm-5'>
                    <p>
                      <b>Registration Period: </b> TBA @ 2-6pm <br/>
                      <b>Registration Location: </b> 3rd Floor Davis <br/>
                      <b>Forfeit Fee: </b> $10 Singles, $20 Doubles <br/>
                    </p>
                  </div>
                </div>
                <hr/>
                <p>
                  <b>NOTES: </b> To register as an individual or a double team, you must submit
                  completed waivers during the above date range!! PLAYERS MUST PROVIDE THEIR OWN RACKETS.  CANNOT BE ON THE VARSITY OR CLUB TEAM
                  <br/>
                </p>

                <br/>
                <br/>

                <h4>Sand Volleyball Tournament (M, W, C)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/11Z52Fn_ehTjNqSZDuhXto2ccoBkqa7k1NjyIXLKbW-4/edit?usp=sharing'>Sand Volleyball Tournament Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> TBA <br/>
                      <b>Time: </b> 9:00 AM - 6:00 PM<br/>
                      <b>Location: </b> South and West Campus Sand Volleyball Courts<br/>
                    </p>
                  </div>
                  <div className='col-sm-5'>
                    <p>
                      <b>Registration Period: </b> TBA @ 2-6pm <br/>
                      <b>Registration Location: </b> 3rd Floor Davis <br/>
                      <b>Forfeit Fee: </b> $20 per team <br/>
                    </p>
                  </div>
                </div>
                <hr/>
                <p>
                  <b>NOTES: </b> Because it's a tournament, teams CANNOT choose the days/times they play.  Please create your roster accordingly.
                  <br/>
                  To register a team you must have at least 4 participants (2M/2F for co-ed) on the roster and complete waivers!!
                  <br/>
                </p>
                <div className='row'>
                  <div className='col-sm-3'>
                    <b>M/W:</b> MAX playing: 4
                  </div>
                  <div className='col-sm-3'>
                    <b>MIN playing: </b> 4
                  </div>
                  <div className='col-sm-3'>
                    <b>C:</b> no more than 2M
                  </div>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>

              </div>

              <div className='col-sm-3'>

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
            );
    }
});

module.exports = SpringSportsPage;
