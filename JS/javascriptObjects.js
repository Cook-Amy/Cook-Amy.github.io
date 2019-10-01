/***************************************************
 * Define Objects and Methods
 **************************************************/
function Apostle(name, calling, date, talk) {
  this.name = name;
  this.calling = calling;
  this.date = date;
  this.talk = talk;
  this.output = function() {
    document.getElementById("name").innerHTML = name;
    document.getElementById("calling").innerHTML = calling;
    document.getElementById("date").innerHTML = "He was sustained to this calling on " + date + ".";
    document.getElementById("talk").innerHTML = "<p>During the " + talk.session + " session, he gave the following talk:</p>" +
                                                "<h1>Apostle.Talk.title</h1>" +
                                                "<p>" + talk.subject + "</p>" +
                                                "<p>You can access the talk by clicking on this link: " + talk.link + "</p>";
  }
}

function Talk(title, link, subject, session) {
  this.title = title;
  this.link = link;
  this.subject = subject;
  this.session = session;
}

/***************************************************
 * New Apostle objects defined 
 **************************************************/
function nelson() {
  var nelson = new Apostle(
    "Russell M. Nelson",
    "Prophet and President",
    "January 14, 2018",
    nelsonTalk
  );
  nelson.output();
}

function oaks() {
  var oaks = new Apostle(
    "Dallin H. Oaks",
    "First Counselor in the First Presidency",
    "January 14, 2018",
    "link pending"
  );
  oaks.output();
}

function eyring() {
  var eyring = new Apostle(
    "Henry B. Eyring",
    "Second Counselor in the First Presidency",
    "January 14, 2018",
    "link pending"
  );
  eyring.output();
}

function ballard() {
  var ballard = new Apostle(
    "M. Russell Ballard",
    "Apostle",
    "October 6, 1985",
    "link pending"
  );
  ballard.output();
}

function holland() {
  var holland = new Apostle(
    "Jeffrey R. Holland",
    "Apostle",
    "June 23, 1994",
    "link pending"
  );
  holland.output;
}

function uchtdorf() {
  var uchtdorf = new Apostle(
    "Dieter F. Uchtdorf",
    "Apostle",
    "October 2, 2004",
    "link pending"
  );
  uchtdorf.output();
}

function bednar() {
  var bednar = new Apostle(
    "David A. Bednar",
    "Apostle",
    "October 7, 2004",
    "link pending"
  );
  bednar.output();
}

function cook() {
  var cook = new Apostle(
    "Quentin L. Cook",
    "Apostle",
    "October 6, 2007",
    "link pending"
  );
  cook.output();
}

function christofferson() {
  var christofferson = new Apostle(
    "D. Todd Christofferson",
    "Apostle",
    "April 5, 2008",
    "link pending"
  );
  christofferson.output();
}

function andersen() {
  var andersen = new Apostle(
    "Neil L. Andersen",
    "Apostle",
    "April 4, 2009",
    "link pending"
  );
  andersen.output();
}

function rasband() {
  var rasband = new Apostle(
    "Ronald A. Rasband",
    "Apostle",
    "October 3, 2015",
    "link pending"
  );
  rasband.output();
}

function stevenson() {
  var stevenson = new Apostle(
    "Gary E. Stevenson",
    "Apostle",
    "October 3, 2015",
    "link pending"
  );
  stevenson.output();
}

function renlund() {
  var renlund = new Apostle(
    "Dale G. Renlund",
    "Apostle",
    "October 3, 2015",
    "link pending"
  );
  renlund.output();
}

function gong() {
  var gong = new Apostle(
    "Gerrit W. Gong",
    "Apostle",
    "March 31, 2018",
    "link pending"
  );
  gong.output();
}

function soares() {
  var soares = new Apostle(
    "Ulisses Soares",
    "Apostle",
    "March 31, 2018",
    "link pending"
  );
  soares.output();
}

/***************************************************
 * New Talk objects defined 
 **************************************************/
function nelsonTalk() {
  var nelsonTalk = new Talk(
    "Come, Follow Me",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/46nelson?lang=eng",
    "Jesus Christ invites us to take the covenant path back home to our Heavenly Parents and be with those we love.",
    "Sunday morning"
  );
}