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

var FallSportsPage = React.createClass({
  imgHandleClick: function(e){
      console.log("Redirect Feild Locations");
      location.href = "#/fieldLocations";
  },

    render: function() {
        return (
          <div>
            <Header/>

            <div style={HeadStyle}>
              <h1>Fall Sports</h1>
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
                <h4>Sand Volleyball Tournament (M, W, C)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/1LVTm_OipsM4OvrXdxFW2_2oSjnW_FgmrWkcfxzBHEgk/edit?usp=sharing'>Sand Volleyball Tournament Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> Saturday Sept 3rd <br/>
                      <b>Rain Date: </b> Saturday Sept 10th <br/>
                      <b>Times: </b> 10am-8pm <br/>
                      <b>Location: </b> South and West Campuses <br/>
                    </p>
                  </div>
                  <div className='col-sm-5'>
                    <p>
                      <b>Registration Period: </b> 8/30, 8/31, 9/1 2pm-6pm <br/>
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
                    <b>C:</b> No more than 2M
                  </div>
                </div>

                <br/>
                <br/>

                <h4>Flag Football (M, W, C)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/1ojqlRNqnUpTyAR-9UlBumVGQYfrBrYhG1ySro-2ZM7I/edit?usp=sharing'>Flag Football League Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> Sept 9th-Nov 15th <br/>
                      <b>Times: </b> Mon - Fri 3pm-6pm; Sundays 10am-6pm <br/>
                      <b>Location: </b> Pike, Austin & Mendel Fields <br/>
                    </p>
                  </div>
                  <div className='col-sm-5'>
                    <p>
                      <b>Registration Period: </b> 9/1, 9/2, 9/6 2pm-6pm <br/>
                      <b>Registration Location: </b> 3rd Floor Davis <br/>
                      <b>Forfeit Fee: </b> $40 per team <br/>
                    </p>
                  </div>
                </div>
                <hr/>
                <p>
                  <b>NOTES: </b> Playing times are non-negotiable.  Champions Advance to the City Six Tournament on 11/21, therefore graduate and staff teams can
                  not play in playoffs.
                  <br/>
                  To register a team you must have at least 7 participants (4M/4F for co-ed) on the roster and complete waivers!!
                  <br/>
                </p>
                <div className='row'>
                  <div className='col-sm-3'>
                    <b>M/W:</b> MAX playing: 7
                  </div>
                  <div className='col-sm-3'>
                    <b>MIN playing: </b> 5
                  </div>
                  <div className='col-sm-3'>
                    <b>C:</b> 4/4; 4F/3M; or 3/3
                  </div>
                </div>

                <br/>
                <br/>


                <h4>Outdoor Soccer (M, W, C)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/1K8sQxpxIR5cJjOQgrItNzOpHl7hAcoZLOxxNfRJquZo/edit?usp=sharing'>Outdoor Soccer League Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> Sept 11th-Nov 23rd <br/>
                      Time: M,Tu,W,Th: 6-9PM (Turf) <br/>
                      M, T,W,Th: 3-6PM (Pike) <br/>
                      Sundays: 12pm - 9PM (Turf) <br/>
                      <b>Location: </b> Pike Field; Villanova Stadium: Turf <br/>
                    </p>
                  </div>
                  <div className='col-sm-5'>
                    <p>
                      <b>Registration Period: </b> 9/1, 9/2, 9/6 2pm-6pm <br/>
                      <b>Registration Location: </b> 3rd Floor Davis <br/>
                      <b>Forfeit Fee: </b> $40 per team <br/>
                    </p>
                  </div>
                </div>
                <hr/>
                <p>
                  <b>NOTES: </b> Playing times are non-negotiable.
                  <br/>
                  To register a team you must have at least 8 participants (4M/4F for co-ed) on the roster and complete waivers!!
                  <br/>
                </p>
                <div className='row'>
                  <div className='col-sm-3'>
                    <b>M/W:</b> MAX playing: 8
                  </div>
                  <div className='col-sm-3'>
                    <b>MIN playing: </b> 6
                  </div>
                  <div className='col-sm-3'>
                    <b>C:</b> 4/4; 4/3; or 3/3
                  </div>
                </div>

                <br/>
                <br/>


                <h4>Volleyball (M, W, C)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/1IIDAhhkoIIqbeDVi7xJKkiOmPr5f2zaSAJ44ybE1UFg/edit?usp=sharing'>Volleyball Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> TBA <br/>
                      <b>Time: </b> Sundays - Thursdays 7pm-midnight <br/>
                      <b>Location: </b> Jake Nevin Field House<br/>
                    </p>
                  </div>
                  <div className='col-sm-5'>
                    <p>
                      <b>Registration Period: </b> 9/13, 9/14, 9/15 2pm-6pm <br/>
                      <b>Registration Location: </b> 3rd Floor Davis <br/>
                      <b>Forfeit Fee: </b> $40 per team <br/>
                    </p>
                  </div>
                </div>
                <hr/>
                <p>
                  <b>NOTES: </b> Playing times are non-negotiable.  Champions Advance to the City Six Tournament on Saturday, December 5th at Temple University, therefore,
                  graduate and staff teams can not participate in playoffs.
                  <br/>
                  To register a team you must have at least 6 participants (3M/3F for co-ed) on the roster and complete waivers!!
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
                    <b>C:</b> 3/3; or 3/2
                  </div>
                </div>

                <br/>
                <br/>

                <h4>Dodgeball Tournament (M, W, C)</h4>
                <h6><a href='https://docs.google.com/a/villanova.edu/document/d/109GvW-jGZvd-0_HBa_ByaXCOa63Pi7CvuHvL4pxwUKU/edit?usp=sharing'>Dodgeball Tournament Rules</a></h6>
                <hr/>
                <div className='row'>
                  <div className='col-sm-5'>
                    <p>
                      <b>Playing Dates: </b> Nov 28th-Dec 12th <br/>
                      <b>Time: </b> Sundays - Thursdays 7pm-midnight<br/>
                      <b>Location: </b> St. Mary's Gym<br/>
                    </p>
                  </div>
                  <div className='col-sm-5'>
                    <p>
                      <b>Registration Period: </b>  11/15, 11/16, 11/17: 2pm-6pm  <br/>
                      <b>Registration Location: </b> 3rd Floor Davis <br/>
                      <b>Forfeit Fee: </b> $20 per team <br/>
                    </p>
                  </div>
                </div>
                <hr/>
                <p>
                  <b>NOTES: </b> Playing times are non-negotiable.  Because it's a tournament, teams CANNOT choose the days/times they play.
                  Please create your roster accordingly so that you can field at least 6 participants in a given day/time.
                  <br/>
                  To register a team you must have at least 6 participants (3M/3F for co-ed) on the roster and complete waivers!!
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
                    <b>C:</b> 3/3; or 3/2
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

module.exports = FallSportsPage;
