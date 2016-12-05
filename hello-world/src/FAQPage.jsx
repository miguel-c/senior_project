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

var FAQPage = React.createClass({
  imgHandleClick: function(e){
      console.log("Redirect Feild Locations");
      location.href = "#/fieldLocations";
  },
  
    render: function() {
        return (
          <div>
            <Header/>

            <div style={HeadStyle}>
              <h1>Frequently Asked Questions</h1>
            </div>

            <div className="row">
              <div className="col-sm-3">
                <h3 style={HeadStyle}>Field Locations</h3>
                <br></br>
                <br></br>

                <p style={pstyle}>See the map below for a map of the field locations. Click on the image below for a larger view.</p>
                <br></br>
                <br></br>
                <img src={imFields} style={fieldStyle} onClick={this.imgHandleClick}/>
              </div>

              <div className="col-sm-6">
                <br></br>
                <br></br>
                <div id="list">
                  <ul>
                    <li><a href="#what">What are Intramurals?</a></li>
                    <li><a href="#sports">What sports are offered at Villanova?</a></li>
                    <li><a href="#how">How can I participate?</a></li>
                    <li><a href="#register">How do I register a team?</a></li>
                    <li><a href="#forfeit">What's the deal with the forfeit fee?</a></li>
                    <li><a href="#player">Can we add a player to our team?</a></li>
                    <li><a href="#protest">How can I protest my game?</a></li>
                    <li><a href="#jobs">Are there jobs available?</a></li>
                    <li><a href="#city">What is City 6?</a></li>
                    <li><a href="#nirsa">What is NIRSA?</a></li>
                    <li><a href="#injured">What if I get injured while participating?</a></li>
                  </ul>
                </div>
                <br></br>
                <br></br>
                <p id="what">
                  <big><b>What are Intramurals?</b></big>
                  <br></br>
                  Intramurals is a level of competition offered by most colleges and universities.  It's where students, faculty, and staff can
                  form teams in various sports and compete against one another internally.  Some intramural sports offer an opportunity to play other
                  schools which is referred to as extramurals.  Villanova University belongs to CITY 6 where they compete against other schools in
                  Philadelphia.  VU also belongs to the National Intramural-Recreational Sports Association (NIRSA) which organizes several extramural
                  and intramural events.
                  <br></br>
                  <a href="#list">Back to Top</a>
                </p>


                <br></br>
                <p id="sports">
                  <big><b>What sports are offered at Villanova?</b></big>

                  <br></br>
                  Villanova University offers several team-sport seasons in the fall and spring semesters.
                  They also offer tournaments both in the fall and spring.  Please check our Fall Sports or Spring Sports to see what is currently offered.

                  <br></br>
                  <a href="#list">Back to Top</a>
                </p>

                <br></br>
                <p id="how">

                  <big><b>How can I participate?</b></big>

                  <br></br>
                  You can register as a Free Agent or a complete team.  Most seasons and tournaments offer three divisions: Men's, Women's and Coed.
                  One person can compete in both a single gender and coed division of the same sport, however, the Intramural Department is not responsible
                  for schedule conflicts.  Teams are formed in several ways: dorm floors, campus organizations, Greek organization, friends, etc.

                  <br></br>
                  <a href="#list">Back to Top</a>
                </p>
                <br></br>

                <p id="register">

                  <big><b>How do I register a team?</b></big>

                  <br></br>
                  To register a team, you can download a Team Roster form, or pick one up from the Intramural Office located in the Davis Center for
                  Athletics and Fitness or from the Intramural bulletin board in the basement of the Jake Nevin Field House.  Each participant must
                  complete a Waiver before they are permitted to participate.  PLEASE note the dates that the entry forms are being collected.
                  Captains: Allow enough time for your teammates to return waivers to you.  A team MUST submit all team members' waivers and the forfeit
                  fee upon registration.
                  <br></br>
                  <a href="#list">Back to Top</a>
                </p>
                <br></br>

                <p id="forfeit">

                  <big><b>What's the deal with the forfeit fee?</b></big>

                  <br></br>
                  The forfeit fee ensures that your team will show up to all the assigned games.  The fees vary by sport/activity and are listed on the
                  Fall Sports and Spring Sports pages next to each sport/activity.  If you attend the captain's meeting and all your games, than your
                  fee will be refunded during a refunding period after the end of the season/tournament.  An e-mail will be sent to the captain if they
                  are eligible for a refund regarding the dates and times he/she can pick it up.  If you know in advance that your team cannot field the
                  minimum amount of participants than you can contact the Intramural Office about the cancellation by 5:00PM of the business day prior to
                  the event, in order to save your forfeit fee.  If a team decides to forfeit the entire season or tournament, you will lose your fee
                  regardless of notice given.
                  <br></br>
                  <a href="#list">Back to Top</a>
                </p>
                <br></br>

                <p id="player">

                  <big><b>Can we add a player to our team?</b></big>

                  <br></br>
                  Yes.  BUT all additions must be made before the captain's meeting. Each addition must fill out a waiver in order to participate/ be added
                  to the roster. Waivers can be dropped off at the front desk on the 3rd floor of the Davis Center.
                  <br></br>
                  <a href="#list">Back to Top</a>
                </p>
                <br></br>

                <p id="protest">

                  <big><b>How can I protest my game?</b></big>

                  <br></br>
                  If either team does not agree with a call, the captain, and only the captain (or acting captain if captain is not present) can approach
                  the official(s) for an explanation.  A rule can be overturned after this time.  If this caucus takes up a generous amount of time, the
                  game clock may be stopped for further discussion.  Protests of an entire contest based on rules or calls must be made before the teams leave
                  the field of the contest.  The formal protest will be settled at that time by the supervisor on duty.  A team may protest illegal players at
                  any time [e.g. players on more than one team in the same division (division meaning gender -- men's, women's, co-ed); players not on the
                  official roster; etc.].  If you suspect a team of having illegal players you can e-mail us and we will investigate the matter; please do not
                  abuse this procedure -- you must have a legitimate reason to believe a player to be 'illegal'.
                  <br></br>
                  <a href="#list">Back to Top</a>
                </p>
                <br></br>

                <p id="jobs">

                  <big><b>Are there jobs available?</b></big>

                  <br></br>
                  Of course.  Student employees are vital to the operations of the Intramural Department.
                  Please check the employment page for any positions available, where you will have room for growth.
                  <br></br>
                  <a href="#list">Back to Top</a>
                </p>
                <br></br>

                <p id="city">

                  <big><b>What is City 6?</b></big>

                  <br></br>
                  Philadelphia City 6 was developed in 1986 as a way to encourage recreational sports and social interaction
                  among the city universities.  City 6 is composed of Drexel University, LaSalle University, Saint Joseph ’s
                  University, Temple University, University of Pennsylvania and Villanova University.  Today they offer championships
                  in Flag Football, Volleyball, Basketball and Softball.  Visit the City 6 website for more information: www.phillycity6.com.
                  <br></br>
                  <a href="#list">Back to Top</a>
                </p>
                <br></br>

                <p id="nirsa">

                  <big><b>What is NIRSA?</b></big>

                  <br></br>
                  NIRSA stands for the National Intramural-Recreational Sports Association. NIRSA is the leading resource for professional and student development,
                  education, and research in collegiate recreational sports.  NIRSA includes nearly 4,000 highly trained professional, student and associate members
                  throughout the United States, Canada and other countries. Serving an estimated 5.5 million students who regularly participate in campus recreational
                  sports programs, NIRSA members are actively engaged in many areas of campus life: student leadership, development, and personnel management; wellness
                  and fitness programs; intramural sports; sport clubs; recreation facility operations; outdoor recreation; informal recreation; and aquatic programs.

                  <br></br>
                  <br></br>
                  If you are interested in a career in Campus Recreation, it is highly recommended to get involved with NIRSA. Visit the NIRSA website for more information:
                  www.NIRSA.org.
                  <br></br>
                  <a href="#list">Back to Top</a>
                </p>
                <br></br>

                <p id="injured">

                  <big><b>What if I get injured while participating?</b></big>

                  <br></br>
                  If you are injured while participating in Intramurals, our staff is certified in First Aid and CPR in order to provide you with the care you
                  need.  If you have any further questions regarding your injury or care, please contact the Director of Recreation.
                  <br></br>
                  <a href="#list">Back to Top</a>
                </p>
                <br></br>



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
        );
    }
});

module.exports = FAQPage;
