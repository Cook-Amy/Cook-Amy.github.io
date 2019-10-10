
var birthdays = '{"person":[' +
  '{"first": "AJ","last": "Shane","birthday": {"month": 8,"day": 11,"year": 2016 },"ideas": ["card"]},' +
  '{"first": "Ashton","last": "Saari","birthday": {"month": 5,"day": 17,"year": 2005 },"ideas": ["giftcard"]},' +
  '{"first": "Brandon","last": "Saari","birthday": {"month": 10,"day": 13,"year": 1998 },"ideas": ["giftcard", "cash"]},' +
  '{"first": "Bruce","last": "Cook","birthday": {"month": 7,"day": 7,"year": 1973 },"ideas": ["drill", "kayak", "headphones"]},' +
  '{"first": "Caleb","last": "Caten","birthday": {"month": 4,"day": 11,"year": 2003 },"ideas": ["cash", "card"]},' +
  '{"first": "Carter","last": "Shane","birthday": {"month": 6,"day": 19,"year": 2005 },"ideas": ["cash", "card"]},' +
  '{"first": "Courtney","last": "Cook","birthday": {"month": 10,"day": 7,"year": 1998 },"ideas": ["mallets", "keyboard", "plane ticket"]},' +
  '{"first": "Dylan","last": "Cook","birthday":{"month": 7,"day": 6,"year": 2003 },"ideas": ["book", "movie", "watch"]},' +
  '{"first": "Ethan","last": "Saari","birthday": {"month": 4,"day": 20,"year": 2001 },"ideas": ["cash", "card"]},' +
  '{"first": "Grace","last": "Caten","birthday": {"month": 10,"day": 6,"year": 2005 },"ideas": ["cash", "card"]},' +
  '{"first": "Ian","last": "Shane","birthday": {"month": 1,"day": 22,"year": 1999 },"ideas": ["cash", "card"]},' +
  '{"first": "Jason","last": "Saari","birthday": {"month": 5,"day": 28,"year": 1971 },"ideas": ["giftcard"]},' +
  '{"first": "Jaxon","last": "Shane","birthday": {"month": 9,"day": 24,"year": 2007 },"ideas": ["cash", "card"]},' +
  '{"first": "Jayleen","last": "Shane","birthday": {"month": 3,"day": 5,"year": 1974 },"ideas": ["giftcard"]},' +
  '{"first": "Jeff","last": "Shane","birthday": {"month": 10,"day": 14,"year": 1970 },"ideas": ["giftcard"]},' +
  '{"first": "Jessica","last": "Shane","birthday": {"month": 10,"day": 20,"year": 1981 },"ideas": ["giftcard"]},' +
  '{"first": "Jill","last": "Saari","birthday": {"month": 10,"day": 8,"year": 1975 },"ideas": ["giftcard"]},' +
  '{"first": "JoAnn","last": "Shane","birthday": {"month": 6,"day": 10,"year": 1946 },"ideas": ["sweater", "tickets", "photos"]},' +
  '{"first": "Jordan","last": "Saari","birthday": {"month": 10,"day": 7,"year": 1995 },"ideas": ["cash", "card"]},' +
  '{"first": "Joshua","last": "Caten","birthday": {"month": 12,"day": 28,"year": 2009 },"ideas": ["cash", "card"]},' +
  '{"first": "June","last": "Saari","birthday": {"month": 10,"day": 6,"year": 2018 },"ideas": ["card"]},' +
  '{"first": "Justin","last": "Caten","birthday": {"month": 2,"day": 17,"year": 1978 },"ideas": ["giftcard"]},' +
  '{"first": "Kim","last": "Caten","birthday": {"month": 5,"day": 12,"year": 1981 },"ideas": ["giftcard"]},' +
  '{"first": "Kimmie","last": "Saari","birthday": {"month": 4,"day": 29,"year": 1996 },"ideas": ["card"]},' +
  '{"first": "Lexie","last": "Shane","birthday": {"month": 2,"day": 18,"year": 2011 },"ideas": ["cash", "card"]},' +
  '{"first": "Luke","last": "Caten","birthday": {"month": 8,"day": 8,"year": 2011 },"ideas": ["cash", "card"]},' +
  '{"first": "Matt","last": "Shane","birthday": {"month": 3,"day": 30,"year": 1979 },"ideas": ["giftcard"]},' +
  '{"first": "Michael","last": "Shane","birthday": {"month": 5,"day": 12,"year": 1946 },"ideas": ["photos", "cookies", "tickets"]},' +
  '{"first": "Morgan","last": "Shane","birthday": {"month": 5,"day": 2,"year": 2007 },"ideas": ["card", "cash"]},' +
  '{"first": "Travis","last": "Cook","birthday": {"month": 7,"day": 19,"year": 2006 },"ideas": ["headphones", "phone", "video game"]},' +
  '{"first": "Vance","last": "Caten","birthday": {"month": 8,"day": 12,"year": 2013 },"ideas": ["cash", "card"]}]}';

var months = ["January", "February", "March", "April", 
              "May", "June", "July", "August", 
              "September", "October", "November", "December"];

function fillDropdown() {
  /*****************************************************
   * Create Month Dropdown
  ******************************************************/
  let dropdownMonth = document.getElementById("monthDropdown");
  //dropdownMonth.length = 0;

  var option;
  // fill in options
  for(var i = 0; i < months.length; i++) {
    option = document.createElement("option");
    option.text = months[i];
    option.value = i + 1;
    dropdownMonth.options.add(option);
  }


  /*****************************************************
   * Create Date Dropdown
  ******************************************************/
  let dropdownDate = document.getElementById("dayDropdown");

  var option;
  // fill in options
  for(var i = 1; i < 32; i++) {
    option = document.createElement("option");
    option.text = i;
    option.value = i;
    dropdownDate.options.add(option);
  }

  /*****************************************************
   * Create Name Dropdown
  ******************************************************/
  let dropdownName = document.getElementById("nameDropdown");
  var birthdayJson = JSON.parse(birthdays);

  var option;
  // fill in options
  for(var i = 0; i < birthdayJson.person.length; i++) {
    option = document.createElement("option");
    option.text = birthdayJson.person[i].first + " " + birthdayJson.person[i].last;
    option.value = birthdayJson.person[i].first + birthdayJson.person[i].last;
    dropdownName.options.add(option);
  }
}

/*****************************************************
 * Select Date button
******************************************************/
function chooseDate() {
  var errorMsg = ""

  // get month selection
  var selMonth = document.getElementById("monthDropdown");
  var optMonth = selMonth.options[selMonth.selectedIndex];
  var monthNum = selMonth.value;
  var monthText = optMonth.text;

  // get date selection
  var selDate = document.getElementById("dayDropdown");
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
    displayDateResults(monthNum, dayNum);
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
  var selName = document.getElementById("nameDropdown");
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
 * Display date results
******************************************************/
function displayDateResults(monthNum, dayNum) {
  // clear error message if needed
  document.getElementById("dateError").innerHTML = "";

  var birthdayJson = JSON.parse(birthdays);
  var count = 0;
  var results = "<table id='table'><tr><th>Date</th><th>Name</th></tr>";

  // find matched objects
  for(var i = 0; i < birthdayJson.person.length; i++) {
    var birthday = birthdayJson.person[i].birthday.day;
    var name = birthdayJson.person[i].first + " " + birthdayJson.person[i].last;

    // get results that match selected month
    if(birthdayJson.person[i].birthday.month == monthNum) {

      // get results if all dates are selected
      if(dayNum == 0) {
        results += "<tr><td>" + birthday + "</td>" + 
                  "<td onclick=\"displayPerson(\'" + name + "\')\">" + name + "</td></tr>";
        count++;
      }

      // get results for specific date selected
      else {
        if(birthday == dayNum) {
          results += "<tr><td>" + birthday + "</td>" +
                    "<td onclick=\"displayPerson(\'" + name + "\')\">" + name + "</td></tr>";
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

/*****************************************************
 * Display a person's details
******************************************************/
function displayPerson(input) {
  var result = "";
  var birthdayJson = JSON.parse(birthdays);

  // get today's date to calculate age
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = today.getMonth() + 1;
  var dd = today.getDate();

  result = "<div id=\"todayDate\">Today is " + mm + "-" + dd + "-" + yyyy + "</div>";

  // find the person's info
  for(var i = 0; i < birthdayJson.person.length; i++) {
    if(birthdayJson.person[i].first + " " + birthdayJson.person[i].last == input) {
      // save all their info to variables for easier use
      var name = birthdayJson.person[i].first + " " + birthdayJson.person[i].last;
      var birthday = birthdayJson.person[i].birthday.month + "-" + birthdayJson.person[i].birthday.day + "-" + birthdayJson.person[i].birthday.year;
      var age = yyyy - birthdayJson.person[i].birthday.year;
      if(mm == birthdayJson.person[i].birthday.month){
        if (dd < birthdayJson.person[i].birthday.day) {
          age -=1;
        }
      }
      else if(mm < birthdayJson.person[i].birthday.month) {
        age -=1;
      }
      var ideas = [];
      for(var j = 0; j < birthdayJson.person[i].ideas.length; j++) {
        ideas.push(birthdayJson.person[i].ideas[j]);
      }

      // format display
      result += "<div>Name: " + name + "</div>" +
                "<div>Birthday: " + birthday + "<div>" +
                "<div>Age: " + age + "</div>" +
                "<div>Gift Ideas: ";
      
      for(var m = 0; m < ideas.length; m++) {
        if(m > 0) {
          result += ", ";
        }
        result += ideas[m];
      }

      result += "</div>" +
            "<div><input id=\"addGiftInput\">" +
            "<button id=\"addGift\" onclick=\"addGift(\'" + name + "\')\">Add A Gift</button></div>" +
            "<div><input id=\"deleteGiftInput\">" + 
            "<button id=\"deleteGift\" onclick=\"deleteGift(\'" + name + "\')\">Delete A Gift</button></div>";
    }

    // display the results
    document.getElementById("resultName").innerHTML = result;
  }
}

/*****************************************************
 * Edit list of gifts for a person
******************************************************/
function addGift(name) {
  var giftAdd = document.getElementById("addGiftInput").value;
  
  if(giftAdd != ""){
    var birthdayJson = JSON.parse(birthdays);

    for(var i = 0; i < birthdayJson.person.length; i++) {
      if(birthdayJson.person[i].first + " " + birthdayJson.person[i].last == name) {
        birthdayJson.person[i].ideas.push(giftAdd);
      }
    }

    // update the original string and display new list
    birthdays = JSON.stringify(birthdayJson);
    displayPerson(name);
  }
}

function deleteGift(name) {
  var giftDelete = document.getElementById("deleteGiftInput").value;
  var birthdayJson = JSON.parse(birthdays);
  
  for(var i = 0; i < birthdayJson.person.length; i++) {
    if(birthdayJson.person[i].first + " " + birthdayJson.person[i].last == name) {
      for(var j = 0; j < birthdayJson.person[i].ideas.length; j++) {
        if(birthdayJson.person[i].ideas[j] == giftDelete) {
          birthdayJson.person[i].ideas.splice(j, 1);
        }
      }
    }
  }

  // update the original string and display new list
  birthdays = JSON.stringify(birthdayJson);
  displayPerson(name);
}