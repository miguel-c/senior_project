DROP TABLE IF EXISTS Sport;
CREATE TABLE IF NOT EXISTS Sport (
  sport_id		       integer auto_increment PRIMARY KEY,
	sport_name	      	varchar(50)		    	NOT NULL,
  yr				      	  year				        NOT NULL,
  season		      		enum('F', 'S')	  	NOT NULL,
  league		      		enum('M', 'F', 'C')	NOT NULL,
  division		      	enum('A', 'B', 'C'),
  min_players	    		integer		      		NOT NULL,
  max_players	    		integer			      	NOT NULL,
  max_roster	    		integer			      	NOT NULL,
  max_male	  		    integer,
  max_female		  	  integer,
  forfeit_fee	  		  integer			      	NOT NULL,
  registration_start	datetime	      		NOT NULL,
  registration_end	  datetime		      	NOT NULL,
  updated_by		    	integer		      		NOT NULL,
  updated_ts		     	timestamp 			    DEFAULT		CURRENT_TIMESTAMP
									                        ON UPDATE	CURRENT_TIMESTAMP,
  UNIQUE KEY unique_sport_key (sport_name, season, yr, league, division),
	FOREIGN KEY (updated_by)
	  REFERENCES User(user_id)
);

DROP TABLE IF EXISTS Team;
CREATE TABLE IF NOT EXISTS Team (
	team_id     integer auto_increment PRIMARY KEY,
  team_name	  varchar(50)	NOT NULL,
  sport_id  	integer,
	updated_by	integer			NOT NULL,
  updated_ts	timestamp 	DEFAULT		CURRENT_TIMESTAMP
			          					ON UPDATE	CURRENT_TIMESTAMP,
  FOREIGN KEY (sport_id)
	  REFERENCES Sport(sport_id),
	FOREIGN KEY (updated_by)
		REFERENCES User(user_id)
);

DROP TABLE IF EXISTS Location;
CREATE TABLE IF NOT EXISTS Location (
	location_id integer auto_increment PRIMARY KEY,
  lname			  varchar(50)	NOT NULL,
  indoor			boolean			NOT NULL,
	updated_by	integer			NOT NULL,
  updated_ts	timestamp 	DEFAULT		CURRENT_TIMESTAMP
							          	ON UPDATE	CURRENT_TIMESTAMP,
	FOREIGN KEY (updated_by)
		REFERENCES User(user_id)
);

DROP TABLE IF EXISTS Played_On;
CREATE TABLE IF NOT EXISTS Played_On (
	sport_id		integer		NOT NULL,
  location_id	integer		NOT NULL,
	updated_by	integer		NOT NULL,
  updated_ts	timestamp DEFAULT 	CURRENT_TIMESTAMP
								        ON UPDATE	CURRENT_TIMESTAMP,
  PRIMARY KEY (sport_id, location_id),
  FOREIGN KEY (sport_id)
		REFERENCES Sport(sport_id),
	FOREIGN KEY (location_id)
		REFERENCES Location(location_id),
	FOREIGN KEY (updated_by)
		REFERENCES User(user_id)
);

DROP TABLE IF EXISTS Contest;
CREATE TABLE IF NOT EXISTS Contest (
	contest_id			      integer auto_increment PRIMARY KEY,
  team_id_1			       	integer		NOT NULL,
  team_id_2			      	integer		NOT NULL,
  location_id			    	integer 	NOT NULL,
  play_datetime		    	datetime	NOT NULL,
  score_1				      	smallint,
  score_2					      smallint,
  sportsmanship_1		  	int(5),
  sportsmanship_2		  	int(5),
  no_notice_forfeit_1		boolean,
  no_notice_forfeit_2		boolean,
  adv_notice_forfeit_1	boolean,
  adv_notice_forfeit_2  boolean,
  rain_datetime		    	datetime,
	updated_by			    	integer		NOT NULL,
  updated_ts		  		  timestamp DEFAULT		CURRENT_TIMESTAMP
									      	        ON UPDATE	CURRENT_TIMESTAMP,
  CHECK (team_id_1 != team_id_2),
  UNIQUE KEY unique_contest_key (team_id_1, team_id_2, play_datetime),
  FOREIGN KEY (team_id_1)
		REFERENCES Team(team_id),
	FOREIGN KEY (team_id_2)
		REFERENCES Team(team_id),
	FOREIGN KEY (location_id)
		REFERENCES Location(location_id),
	FOREIGN KEY (updated_by)
		REFERENCES User(user_id)
);

DROP TABLE IF EXISTS User;
CREATE TABLE IF NOT EXISTS User (
	user_id		  integer auto_increment PRIMARY KEY,
  username    varchar(50)			NOT NULL UNIQUE,
  email		    varchar(100)		NOT NULL UNIQUE,
	fname	    	varchar(50)			NOT NULL,
  lname	    	varchar(50)			NOT NULL,
  user_type	  enum('ADM', 'PLY', 'REF'),
	updated_by  integer			  	NOT NULL,
  updated_ts	timestamp 			DEFAULT		CURRENT_TIMESTAMP
								            	ON UPDATE	CURRENT_TIMESTAMP,
	FOREIGN KEY (updated_by)
		REFERENCES User(user_id)
);

DROP TABLE IF EXISTS Player;
CREATE TABLE IF NOT EXISTS Player (
	player_id	  	integer			    PRIMARY KEY,
  banner_id		  integer			    NOT NULL UNIQUE,
  gender		  	enum('M', 'F')	NOT NULL,
  age				    tinyint			    NOT NULL,
	class			    enum('FR', 'SO', 'JR', 'SR', 'GR', 'FA', 'ST'),
	club_athlete	boolean,
  varsity_sport	varchar(50),
  phone			    varchar(20)     NOT NULL,
	updated_by		integer			    NOT NULL,
  updated_ts		timestamp 	    DEFAULT		CURRENT_TIMESTAMP
									              ON UPDATE	CURRENT_TIMESTAMP,
	FOREIGN KEY (player_id)
		REFERENCES User(user_id),
	FOREIGN KEY (updated_by)
		REFERENCES User(user_id)
);

DROP TABLE IF EXISTS Team_Member;
CREATE TABLE IF NOT EXISTS Team_Member (
  user_id     integer   NOT NULL,
  team_id     integer   NOT NULL,
  captain     boolean   NOT NULL DEFAULT FALSE,
	updated_by	integer		NOT NULL,
  updated_ts  timestamp DEFAULT		CURRENT_TIMESTAMP
									      ON UPDATE	CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id)
		REFERENCES User(user_id),
  FOREIGN KEY (team_id)
    REFERENCES Team(team_id),
	FOREIGN KEY (updated_by)
		REFERENCES User(user_id)
);

DROP TABLE IF EXISTS Referee_For;
CREATE TABLE IF NOT EXISTS Referee_For (
	user_id		  integer	  NOT NULL,
  contest_id	integer	  NOT NULL,
  head_ref	  boolean   NOT NULL DEFAULT FALSE,
	updated_by	integer		NOT NULL,
  updated_ts  timestamp DEFAULT		CURRENT_TIMESTAMP
									      ON UPDATE	CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, contest_id),
  FOREIGN KEY (user_id)
		REFERENCES User(user_id),
	FOREIGN KEY (contest_id)
		REFERENCES Contest(contest_id),
	FOREIGN KEY (updated_by)
		REFERENCES User(user_id)
);
