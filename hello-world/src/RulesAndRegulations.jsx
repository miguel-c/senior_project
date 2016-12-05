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

var listStyle = {
textAlign: 'left',
fontSize: 16
}

var leftStyle = {
  textAlign:'left'
}


var Rules = React.createClass({
  imgHandleClick: function(e){
      console.log("Redirect Feild Locations");
      location.href = "#/fieldLocations";
  },

    render: function() {
        return (
          <div>
            <Header/>
            <div style={HeadStyle}>
              <h1>Rules and Regulations</h1>
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
                  <div className='row'>
                    <div className='col-sm-6'>
                      <h4>Fall Sport Rules</h4>
                      <div style={listStyle}>
                        <ul>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/1LVTm_OipsM4OvrXdxFW2_2oSjnW_FgmrWkcfxzBHEgk/edit?usp=sharing'>Sand Volleyball Tournament</a></li>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/1ojqlRNqnUpTyAR-9UlBumVGQYfrBrYhG1ySro-2ZM7I/edit?usp=sharing'>Flag Football</a></li>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/1K8sQxpxIR5cJjOQgrItNzOpHl7hAcoZLOxxNfRJquZo/edit?usp=sharing'>Outdoor Soccer</a></li>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/1IIDAhhkoIIqbeDVi7xJKkiOmPr5f2zaSAJ44ybE1UFg/edit?usp=sharing'>Volleyball</a></li>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/109GvW-jGZvd-0_HBa_ByaXCOa63Pi7CvuHvL4pxwUKU/edit?usp=sharing'>Dodgeball Tournament</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <h4>Spring Sport Rules</h4>
                      <div style={listStyle}>
                        <ul>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/1r0AZiZiG9bILKtR9kt8DTCPrIhnnAUx4xspyxeHiLV8/edit?usp=sharing'>5v5 Basketball</a></li>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/1BlZBJ7GVPCnW19YhfOg76WxySAhr8TPV0oGlWr9R2p0/edit?usp=sharing'>Handball</a></li>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/1qDWDLHlDA7gp7a1zWakIXhHZ2i1S_WzO8zCr5C2W4eg/edit?usp=sharing'>Indoor Soccer</a></li>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/1gAJaitJ_R1IVVUiDh4WBpb5sjW_dqwRY2R-Et0rd2Og/edit?usp=sharing'>Softball</a></li>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/1dqu4E4OMWaeZymOlYnAWTMiv-UgkOEEw7X_m22sPFhQ/edit?usp=sharing'>Ultimate Frisbee Tournament</a></li>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/1g9JLZg1yVt6UUumUdnJCHDg18Agm34lgCQvH3TLUFY8/edit?usp=sharing'>Tennis</a></li>
                          <li><a href='https://docs.google.com/a/villanova.edu/document/d/11Z52Fn_ehTjNqSZDuhXto2ccoBkqa7k1NjyIXLKbW-4/edit?usp=sharing'>Sand Volleyball Tournament</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <br/>
                  <br/>

                  <div style={listStyle}>
                    <h3>Code of Conduct</h3>
                    <ul>
                      <li>
                        All participants must play by the rules.  Captains are responsible for making their team aware of the rules.
                      </li>
                      <li>
                        Participants must conduct themselves in an appropriate, sportsmanlike manner at all times during competition.
                        Officials have the right to eject any participant for un-sportsmanlike conduct.
                      </li>
                      <li>
                        No chewing tobacco or smoking. Consumption of alcohol or drugs is not tolerated.  Those suspected of intoxication will not be allowed to play for the safety of
                        themselves and others.  Fans suspected of intoxication or using tobacco will also be forced to leave the premises.
                      </li>
                      <li>
                        Teams will be awarded a sportsmanship rating after each game.  Ratings will be given on a 5-point system.  Your rating will be circled on
                        your score sheet at the end of each contest.  Be sure that you are aware of your sportsmanship rating.  An average sportsmanship rating of
                        a 3.0 or higher must be attained in order to advance to playoffs.  Once in playoffs, your team must receive a sportsmanship rating of 3 in
                        order to advance to further rounds of play.
                      </li>
                    </ul>
                  </div>

                  <div style={listStyle}>
                    <h3>General Rules</h3>
                    <ul>
                      <li>
                        Players must bring their valid Wildcard to every game in order to be able to play. NO CARD = NO PLAY
                      </li>
                      <li>
                        Player Equipment: Headwear, jewelery of any kind (rings, watches, earrings, necklaces) or a hard brace such as knee or elbow is illegal.
                        This also includes livestrongs and rubber bands worn on the wrist.
                      </li>
                      <li>
                        Coin toss/rock, paper, scissors/jump ball will determine home team/pinnies/beginning possession.
                      </li>
                      <li>
                        Full and Part-time graduate and undergraduate students as well as faculty and staff are eligible to participate in all tournaments and regular season play.
                      </li>
                      <li>
                        In order to play in the fall softball tournament and the playoffs for Flag Football, Volleyball, and Basketball, teams must able to field a
                        full team of undergrads. (10 for Softball, 7 for Flag Football, 6 for Volleyball, and 5 for Basketball) Teams that are a majority graduate
                        students or faculty/staff will not be eligible to participate in the fall softball tournament or playoffs for Flag Football, Volleyball,
                        and Basketball. These champions will move on to the City 6 Tournaments.
                      </li>
                      <li>
                        Varsity athletes are ineligible to participate in an equivalent sport in the same academic year of their NCAA varsity standing.
                        See individual Sports Rules regarding the participation of club participants.
                      </li>
                      <li>
                        No participants may play for more than one team within the same sport, unless you they are playing for a coed and a single sex team.
                        Males can only play in one men’s basketball league.  You must choose from league A, B, or C.  Coed players can only one coed basketball league.
                        You must choose from league A or B.  No scheduling accommodations will be made for individuals on more than one team in the same season.
                      </li>
                      <li>
                        All roster additions must take place either before or at the captain's meeting, any additions after that will not be accepted.  Roster
                        additions can be made by filling out a waiver of liability and turning it in to the front desk of the fitness center, on the third floor of
                        the Davis Center.  All participants must fill out a waiver form before they will be placed on the roster and allowed to participate. Additions
                        cannot be made on the fields/courts.  Players who are not on the roster will not be allowed to play.
                      </li>
                      <li>
                        You must wear athletic shoes.  NO METAL CLEATS!  NO SANDALS!  NO BARE FEET! NO DRESS SHOES! NO BOOTS!
                      </li>
                      <li>
                        Forfeiting will result in the loss of your forfeit fee and disqualify your team from playoffs.  To avoid this, you can notify the Intramural
                        office at least one business day prior to your scheduled contest to cancel.  You will still receive a loss for the contest, but will not be
                        penalized otherwise.  If your team forfeits 50% or more of your regular season games, you will lose your forfeit fee and be ineligible for
                        playoffs regardless of notice given.
                      </li>
                      <li>
                        GAME TIME IS FORFEIT TIME!  Games will start promptly at their scheduled start time.  If you don’t have enough players to field a team at game
                        time – you will be given a forfeit.  Please show up 15 minutes early to your game to check-in.
                      </li>
                      <li>
                        If either team does not agree with a call, the captain, and only the captain (or acting captain if captain is not present) can approach the
                        official(s) for an explanation.  A rule can be overturned after this time.  If this caucus takes up a generous amount of time, the game
                        clock may be stopped for further discussion.  Protests of an entire contest based on rules or calls must be made before the teams leave the
                        field of the contest. The formal protest will be settled at that time by the supervisor on duty.  A team may protest illegal players at any
                        time [e.g. players on more than one team in the same division (division meaning gender -- men's, women's, co-ed); players not on the official
                        roster; etc.].  If you suspect a team of having illegal players you can e-mail lisa.harris@villanova.edu and we will investigate the matter;
                        please do not abuse this procedure -- you must have a legitimate reason to believe a player to be 'illegal'.
                      </li>
                      <li>
                        No team is guaranteed entry into playoffs.  Teams will be eliminated from playoffs if they forfeit any game during the season or if their sportsmanship
                        average is below a 3.0.   After that, teams may be eliminated based on winning percentage. <b> TEAMS MUST EARN A 3.0+ IN ALL PLAYOFF GAMES TO STAY IN.</b>
                      </li>
                      <li>
                        Captains (or a team rep) must attend the captains meeting at the beginning of each season.  This person must sign-in to verify their attendance.
                        Failure to attend will result in the loss of your forfeit fee.
                      </li>
                      <li>
                        Forfeit fees will be returned to captains after the completion of the season for each sport.  After championships, deserving captains will receive an e-mail
                        from the Director of Intramurals specifying times and dates that they can pick up their refund.  If you feel that your forfeit fee should be refunded but
                        you do not receive an e-mail from the Intramural Director, it is your responsibility to contact the Director of Intramurals.  Forfeit fees will not be
                        refunded to teams that forfeit with notice for more than half of their shceduled games. If captains do not pick up their refund by the specified date and
                        time, their fee will be deposited and it will not be returnable. Forfeit fees are not transferable from year to year.
                      </li>
                    </ul>
                  </div>



                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </div>



                <div className="col-sm-3" style={leftStyle}>
                  <h4>Hotline</h4>

                  <p>
                    610.581.CATS (2287) <br/>
                    <br/>
                    If playing outdoors and the weather looks questionable, please consult the
                    hotline for cancellations or delays.  It is the Captain's responsibility to notify their players of this news.
                  </p>

                  <br></br>

                  <h4>Forfeit/Fees</h4>

                  <p>
                    Captain's must notify the IM office of a forfeit by 5:00PM of the business day prior to competition to be
                    eligible to receive their forfeit fees back.
                  </p>

                  <br></br>

                  <h4>Sportsmanship Ratings Guide</h4>

                  <p>
                    1 = is awarded: <br/>
                    <ul>
                      <li>If a Player gets kicked out of the game.</li>
                      <li>If a player gets into a fight.</li>
                      <li>If a player intentionally acts in a manner which could cause harm to others.</li>
                    </ul>

                    <br/>
                    2 = is awarded: <br/>
                    <ul>
                      <li>If a team forfeits.</li>
                      <li>If there is excessive arguing.</li>
                      <li>If a team is found to have an illegal player on the field/court.</li>
                      <li>If any player attempts to use a fake wildcard or a wildcard that is not their own.</li>
                    </ul>

                    <br/>
                    3 = Could have been better. (Just Average)
                    <ul>
                      <li>Forfeit with notice</li>
                    </ul>

                    <br/>
                    4 = Above Average.  Also, awarded to teams whose opponent forfeits.

                    <br/>
                    <br/>
                    5 = Excellent – Teams go out of their way to accommodate for the other teams and display extreme respect for the IM staff.

                  </p>


                </div>

              </div>
            </div>
          </div>
        );
    }
});

module.exports = Rules;
