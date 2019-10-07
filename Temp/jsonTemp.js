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
 * Select Date button
******************************************************/
function chooseDate() {
  var results = "<table id='table'><tr><th>Date</th><th>Name</th></tr>";
  var errorMsg = ""

  // get month selection
  var selMonth = document.getElementById("month");
  var optMonth = selMonth.options[selMonth.selectedIndex];
  var monthNum = selMonth.value;
  var monthText = optMonth.text;

  // get date selection
  var selDate = document.getElementById("day");
  var dayNum = selDate.value;

  var err = 0;
  // check if user selected a month
  if(monthNum == "month") {
    errorMsg = "Please select a month.";
    err++;
  }

  // check if user selected a date
  if(dayNum == "date") {
    errorMsg += " Please select a date.";
    err++;
  }

  // if month and date are selected, continue
  if(err == 0) {
    document.getElementById("dateError").innerHTML = "";
    var count = 0;
    // find matched objects
    for(var i = 0; i < person.info.length; i++) {
      var birthday = person.info[i].birthday.day;
      var name = person.info[i].first + " " + person.info[i].last;
  
      // get results that match selected month
      if(person.info[i].birthday.month == monthNum) {
  
        // get results if all dates are selected
        if(dayNum == 0) {
          results += "<tr><td>" + birthday + "</td>" + 
                    "<td onclick=\"displayPerson(\'" + name + "\')\">" + name + "</td></tr>";
          count++;
        }
  
        // get results for specific date selected
        else {
          if(person.info[i].birthday.day == dayNum) {
            results += "<tr><td>" + birthday + "</td><td>" + name + "</td></tr>";
            count++;
          }
        }
      }
    }
    results += "</table>";
  
    // no results found
    if(count == 0) {
      results = "No birthdays are listed for your selection.";
    }
  
    // display results
    document.getElementById("resultDate").innerHTML = results;
  }

  // if month or date are not selected, show error message
  else {
    document.getElementById("dateError").innerHTML = errorMsg;
  }
}

/*****************************************************
 * Select Name button
******************************************************/
function chooseName() {
  var errorMsg = ""

  // get name selection
  var selName = document.getElementById("name");
  var optName = selName.options[selName.selectedIndex];
  var nameValue = selName.value;
  var nameText = optName.text;

  if(nameValue == "chooseName") {
    errorMsg = "Please select a name."; 
    document.getElementById("nameError").innerHTML = errorMsg;
  }

  else {
    document.getElementById("nameError").innerHTML = "";
    displayPerson(nameText);
  }
}

/*****************************************************
 * Display a person's details
******************************************************/
function displayPerson(input) {
  var result = "";

  // get today's date to calculate age
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth() + 1;
  var dd = today.getDate();

  result = "<p>Today: " + mm + "-" + dd + "-" + yyyy + "</p>";

  // find the person's info
  for(var i = 0; i < person.info.length; i++) {
    if(person.info[i].first + " " + person.info[i].last == input) {
      // save all their info to variables for easier use
      var name = person.info[i].first + " " + person.info[i].last;
      var birthday = person.info[i].birthday.month + "-" + person.info[i].birthday.day + "-" + person.info[i].birthday.year;
      var age = yyyy - person.info[i].birthday.year;
      if(mm == person.info[i].birthday.month){
        if (dd < person.info[i].birthday.day) {
          age -=1;
        }
      }
      else if(mm < person.info[i].birthday.month) {
        age -=1;
      }
      var ideas = [];
      for(var j = 0; j < person.info[i].ideas.length; j++) {
        ideas.push(person.info[i].ideas[j]);
      }

      // format display
      result += "<p>Name: " + name + "</p>" +
                "<p>Birthday: " + birthday + "<p>" +
                "<p>Age: " + age + "</p>" +
                "<p>Gift Ideas: ";
      
      for(var m = 0; m < ideas.length; m++) {
        if(m > 0) {
          result += ", ";
        }
        result += ideas[m];
      }

      result += "</p>";
    }

    // display the results
    document.getElementById("resultName").innerHTML = result;
  }
  
  
}