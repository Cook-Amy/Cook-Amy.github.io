var person = {
  "info": [],
  "family": true
};

/*****************************************************
 * Create person objects
******************************************************/
person.info.push({ 
  "first": "Dylan", 
  "last": "Cook", 
  "birthday": { 
    "month": 7, 
    "day": 6, 
    "year": 2003 }, 
  "ideas": ["book", "movie", "watch"]
});

person.info.push({ 
  "first": "Bruce", 
  "last": "Cook", 
  "birthday": { 
    "month": 7, 
    "day": 7, 
    "year": 1973 }, 
  "ideas": ["drill", "kayak", "headphones"]
});

person.info.push({ 
  "first": "Travis", 
  "last": "Cook", 
  "birthday": { 
    "month": 7, 
    "day": 19, 
    "year": 2006 }, 
  "ideas": ["headphones", "phone", "video game"]
});

person.info.push({ 
  "first": "Courtney", 
  "last": "Cook", 
  "birthday": { 
    "month": 10, 
    "day": 7, 
    "year": 1998 }, 
  "ideas": ["mallets", "keyboard", "plane ticket"]
});

/*****************************************************
 * Select button functions
******************************************************/
function chooseDate() {
  var results = "<table id='table'><tr><th>Date</th><th>Name</th></tr>";

  // get month selection
  var selMonth = document.getElementById("month");
  var optMonth = selMonth.options[selMonth.selectedIndex];
  var monthNum = selMonth.value;
  var monthText = optMonth.text;

  // get date selection
  var selDate = document.getElementById("day");
  var dayNum = selDate.value;

  // find matched objects
  for(var i = 0; i < person.info.length; i++) {
    var birthday = person.info[i].birthday.day;
    var name = person.info[i].first + " " + person.info[i].last;
    if(person.info[i].birthday.month == monthNum) {
      if(dayNum == 0) {
        results += "<tr><td>" + birthday + "</td><td>" + name + "</td></tr>";
      }
      else {
        if(person.info[i].birthday.day == dayNum) {
          results += "<tr><td>" + birthday + "</td><td>" + name + "</td></tr>";
        }
      }
    }


  }
  results += "</table>";

  document.getElementById("resultDate").innerHTML = results;


}

function chooseName() {

}