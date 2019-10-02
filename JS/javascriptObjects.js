/***************************************************
 * Define Objects and Methods
 **************************************************/
function Apostle(name, calling, date) {
  this.name = name;
  this.calling = calling;
  this.date = new Date(date);
  // this.calcTime = function() {
  //   var now = new Date();
  //   var diff = ((now.getTime() - this.date.getTime()) / 31536000000).toFixed(0);
  //   return diff;
  // }
  this.output = function(yr) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("calling").innerHTML = calling;
    document.getElementById("date").innerHTML = "He was sustained to this calling on " + date + ", which was " + yr + " years ago.";
  }
}

function Talk(title, link, subject, session) {
  this.title = title;
  this.link = link;
  this.subject = subject;
  this.session = session;
  this.output = function() {
    document.getElementById("talk").innerHTML = "<p><div class=\"talkInfo\">During the " + session + " session of the April 2019 General Conference, he gave the following talk:</div>" +
                                                "<div id=\"title\">" + title + "</div>" +
                                                "<div id=\"talkSubject\" class=\"talkInfo\">\"" + subject + "\"</div>" +
                                                "<div class=\"talkInfo\">You can access the talk by clicking " + 
                                                "<a href=\"" + link + "\" target=\"_blank\">HERE</a></div></p>";
  }
}

function calcTime(date) {
    var now = new Date();
    var diff = ((now.getTime() - date.getTime()) / 31536000000).toFixed(0);
    return diff;
}

/***************************************************
 * New Apostle objects defined 
 **************************************************/
function nelson() {
  var nelson = new Apostle(
    "Russell M. Nelson",
    "Prophet and President of the Church",
    "January 14, 2018"
  );
  var yr = calcTime(nelson.date);
  nelson.output(yr);
  nelsonTalk();
}

function oaks() {
  var oaks = new Apostle(
    "Dallin H. Oaks",
    "First Counselor in the First Presidency",
    "January 14, 2018"
  );
  var yr = calcTime(oaks.date);
  oaks.output(yr);
  oaksTalk();
}

function eyring() {
  var eyring = new Apostle(
    "Henry B. Eyring",
    "Second Counselor in the First Presidency",
    "January 14, 2018"
  );
  var yr = calcTime(eyring.date);
  eyring.output(yr);
  eyringTalk();
}

function ballard() {
  var ballard = new Apostle(
    "M. Russell Ballard",
    "Apostle",
    "October 6, 1985"
  );
  var yr = calcTime(ballard.date);
  ballard.output(yr);
  ballardTalk();
}

function holland() {
  var holland = new Apostle(
    "Jeffrey R. Holland",
    "Apostle",
    "June 23, 1994"
  );
  var yr = calcTime(holland.date);
  holland.output(yr);
  hollandTalk();
}

function uchtdorf() {
  var uchtdorf = new Apostle(
    "Dieter F. Uchtdorf",
    "Apostle",
    "October 2, 2004"
  );
  var yr = calcTime(uchtdorf.date);
  uchtdorf.output(yr);
  uchtdorfTalk();
}

function bednar() {
  var bednar = new Apostle(
    "David A. Bednar",
    "Apostle",
    "October 7, 2004"
  );
  var yr = calcTime(bednar.date);
  bednar.output(yr);
  bednarTalk();
}

function cook() {
  var cook = new Apostle(
    "Quentin L. Cook",
    "Apostle",
    "October 6, 2007"
  );
  var yr = calcTime(cook.date);
  cook.output(yr);
  cookTalk();
}

function christofferson() {
  var christofferson = new Apostle(
    "D. Todd Christofferson",
    "Apostle",
    "April 5, 2008"
  );
  var yr = calcTime(christofferson.date);
  christofferson.output(yr);
  christoffersonTalk();
}

function andersen() {
  var andersen = new Apostle(
    "Neil L. Andersen",
    "Apostle",
    "April 4, 2009"
  );
  var yr = calcTime(andersen.date);
  andersen.output(yr);
  andersenTalk();
}

function rasband() {
  var rasband = new Apostle(
    "Ronald A. Rasband",
    "Apostle",
    "October 3, 2015"
  );
  var yr = calcTime(rasband.date);
  rasband.output(yr);
  rasbandTalk();
}

function stevenson() {
  var stevenson = new Apostle(
    "Gary E. Stevenson",
    "Apostle",
    "October 3, 2015"
  );
  var yr = calcTime(stevenson.date);
  stevenson.output(yr);
  stevensonTalk();
}

function renlund() {
  var renlund = new Apostle(
    "Dale G. Renlund",
    "Apostle",
    "October 3, 2015"
  );
  var yr = calcTime(renlund.date);
  renlund.output(yr);
  renlundTalk();
}

function gong() {
  var gong = new Apostle(
    "Gerrit W. Gong",
    "Apostle",
    "March 31, 2018"
  );
  var yr = calcTime(gong.date);
  gong.output(yr);
  gongTalk();
}

function soares() {
  var soares = new Apostle(
    "Ulisses Soares",
    "Apostle",
    "March 31, 2018"
  );
  var yr = calcTime(soares.date);
  soares.output(yr);
  soaresTalk();
}

/***************************************************
 * New Talk objects defined 
 **************************************************/
function nelsonTalk() {
  var nelsonTalk = new Talk(
    "Come, Follow Me",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/46nelson?lang=eng",
    "Jesus Christ invites us to take the covenant path back home to our Heavenly Parents and be with those we love.",
    "Sunday Morning"
  );
  nelsonTalk.output();
}

function oaksTalk() {
  var oaksTalk = new Talk(
    "Cleansed By Repentance",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/51oaks?lang=eng",
    "Because of God’s plan and the Atonement of Jesus Christ, we can be cleansed by the process of repentance.",
    "Sunday Afternoon"
  );
  oaksTalk.output();
}

function eyringTalk() {
  var eyringTalk = new Talk(
    "A Home Where the Spirit of the Lord Dwells",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/16eyring?lang=eng",
    "You will find some of your greatest joys in your efforts to make your home a place of faith in the Lord Jesus Christ and a place that is permeated with love.",
    "Saturday Morning"
  );
  eyringTalk.output();
}

function ballardTalk() {
  var ballardTalk = new Talk(
    "The True, Pure, and Simple Gospel of Jesus Christ",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/23ballard?lang=eng",
    "Loving God and loving our neighbors is the doctrinal foundation of ministering; home-centered, Church-supported learning; Sabbath-day spiritual worship; and the work of salvation.",
    "Saturday Afternoon"
  );
  ballardTalk.output();
}

function hollandTalk() {
  var hollandTalk = new Talk(
    "Behold the Lamb of God",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/28holland?lang=eng",
    "Our modified Sunday service is to emphasize the sacrament of the Lord’s Supper as the sacred, acknowledged focal point of our weekly worship experience.",
    "Saturday Afternoon"
  );
  hollandTalk.output();
}

function uchtdorfTalk() {
  var uchtdorfTalk = new Talk(
    "Missionary Work: Sharing What is in Your Heart",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/14uchtdorf?lang=eng",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/14uchtdorf?lang=eng",
    "Saturday Morning"
  );
  uchtdorfTalk.output();
}

function bednarTalk() {
  var bednarTalk = new Talk(
    "Prepared to Obtain Every Needful Thing",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/54bednar?lang=eng",
    "Blessings will come as we strive to fulfill our individual responsibility to learn and love the restored gospel of Jesus Christ.",
    "Sunday Afternoon"
  );
  bednarTalk.output();
}

function cookTalk() {
  var cookTalk = new Talk(
    "Great Love for Our Father's Children",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/43cook?lang=eng",
    "Love is the primary attribute and motive for the spiritual purposes we were charged to undertake by our beloved prophet.",
    "Sunday Morning"
  );
  cookTalk.output();
}

function christoffersonTalk() {
  var christoffersonTalk = new Talk(
    "Preparing for the Lord's Return",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/44christofferson?lang=eng",
    "The Church of Jesus Christ of Latter-day Saints is uniquely empowered and commissioned to accomplish the necessary preparations for the Lord’s Second Coming.",
    "Sunday Morning"
  );
  christoffersonTalk.output();
}

function andersenTalk() {
  var andersenTalk = new Talk(
    "The Eye of Faith",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/25andersen?lang=eng",
    "If we pick and choose what we accept in the proclamation, we cloud our eternal view, putting too much importance on our experience here and now.",
    "Saturday Afternoon"
  );
  andersenTalk.output();
}

function rasbandTalk() {
  var rasbandTalk = new Talk(
    "Build a Fortress of Spirituality and Protection",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/56rasband?lang=eng",
    "When we live the gospel of Jesus Christ, when we draw upon the Savior’s Atonement and press forward with faith, we are fortified against the adversary.",
    "Sunday Afternoon"
  );
  rasbandTalk.output();
}

function stevensonTalk() {
  var stevensonTalk = new Talk(
    "Your Priesthood Playbook",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/31stevenson?lang=eng",
    "Create your own playbook of how you will prove yourself as a disciple of Christ.",
    "General Priesthood"
  );
  stevensonTalk.output();
}

function renlundTalk() {
  var renlundTalk = new Talk(
    "Abound with Blessings",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/41renlund?lang=eng",
    "Most blessings that God desires to give us require action on our part﻿—action based on our faith in Jesus Christ.",
    "Sunday Morning"
  );
  renlundTalk.output();
}

function gongTalk() {
  var gongTalk = new Talk(
    "Good Shepherd, Lamb of God",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/53gong?lang=eng",
    "Jesus Christ calls us in His voice and His name. He seeks and gathers us. He teaches us how to minister in love.",
    "Sunday Afternoon"
  );
  gongTalk.output();
}

function soaresTalk() {
  var soaresTalk = new Talk(
    "How Can I Understand",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/11soares?lang=eng",
    "When we earnestly, heartily, firmly, and sincerely seek to learn the gospel of Jesus Christ and teach it to one another, these teachings may transform hearts.",
    "Saturday Morning"
  );
  soaresTalk.output();
}