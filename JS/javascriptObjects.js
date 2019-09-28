function Apostle(name, title, date, talk) {
  this.name = name;
  this.title = title;
  this.date = date;
  this.talk = talk;
  this.output = function() {
    document.getElementById("info").innerHTML = this.name + " is a(n) " + this.title + " of the Church of Jesus Christ of Latter-Day Saints.";
  }
}

function showInfo(num) {
  switch (num) {
    case 1:
      nelson();
      break;
    case 2:
      oaks();
      break;
    case 3:
      eyring();
      break;
    case 4:
      ballard();
      break;
    case 5:
      holland();
      break;
    case 6:
      uchtdorf();
      break;
    
  }
}

function nelson() {
  var nelson = new Apostle(
    "Russell M. Nelson",
    "President",
    "January 14, 2018",
    "https://www.churchofjesuschrist.org/study/general-conference/2019/04/46nelson?lang=eng"
  );
  nelson.output();
}