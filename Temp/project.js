var animals = [];
var listNames = [];

/***** Animals will move onto the screen when page is loaded *****/
function animalsMove() {
  // document.getElementById("home").style.display = "block";

  document.getElementById("spottedOwlImg").style.animation = "loadMove1 4s";
  document.getElementById("graySquirrelImg").style.animation = "loadMove2 3s";
  document.getElementById("buffaloImg").style.animation = "loadMove3 5s";
  document.getElementById("westernLizardImg").style.animation = "loadMove4 3s";
  document.getElementById("redTailedHawkImg").style.animation = "loadMove5 4.2s";
  document.getElementById("mooseImg").style.animation = "loadMove6 4s";
  document.getElementById("hawksbillTurtleImg").style.animation = "loadMove7 4.8s";
  document.getElementById("coyoteImg").style.animation = "loadMove8 3s";
  document.getElementById("bighornSheepImg").style.animation = "loadMove9 4s";
  document.getElementById("blackBearImg").style.animation = "loadMove10 4.5s";
  document.getElementById("snowyOwlImg").style.animation = "loadMove11 5s";
  document.getElementById("crocodileImg").style.animation = "loadMove12 4.5s";
  setTimeout("animalsInPlace()", 5000);
}


/***** Once animals are in place, they move around slightly *****/
function animalsInPlace() {
  document.getElementById("spottedOwlImg").style.animation = "moveInPlace1 3s infinite linear";
  document.getElementById("graySquirrelImg").style.animation = "moveInPlace6 5s infinite linear";
  document.getElementById("buffaloImg").style.animation = "moveInPlace8 3.5s infinite ease-out";
  document.getElementById("westernLizardImg").style.animation = "moveInPlace5 3s infinite linear";
  document.getElementById("redTailedHawkImg").style.animation = "moveInPlace2 4s infinite linear";
  document.getElementById("mooseImg").style.animation = "moveInPlace3 3s infinite linear";
  document.getElementById("hawksbillTurtleImg").style.animation = "moveInPlace12 5.5s infinite linear";
  document.getElementById("coyoteImg").style.animation = "moveInPlace11 3s infinite linear";
  document.getElementById("bighornSheepImg").style.animation = "moveInPlace9 2s infinite linear";
  document.getElementById("blackBearImg").style.animation = "moveInPlace4 3.5s infinite ease-in-out";
  document.getElementById("snowyOwlImg").style.animation = "moveInPlace7 3s infinite linear";
  document.getElementById("crocodileImg").style.animation = "moveInPlace10 2s infinite linear";

  // Animal images are saved in an array and given an onclick event listener
  animals = document.querySelectorAll(".animalImg");
  animals.forEach(animal => animal.addEventListener("click", getParkFromAnimal));

  // List names are saved in an array and given an onclick event listener
  listNames = document.querySelectorAll(".parkName");
  listNames.forEach(listName => listName.addEventListener("click", getParkFromList));
}


/***** Open and close navigation and sidebars ******/
function openNav() {
  document.getElementById("sidebar").style.width = "15%";
  document.getElementById("list").style.width = "0%";
  document.getElementById("search").style.width = "0%";
  document.getElementById("result").style.width = "0%";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("list").style.width = "0%";
  document.getElementById("search").style.width = "0%";
  document.getElementById("result").style.width = "0%";

  clearElements();
}

function viewList() {
  closeNav();
  document.getElementById("list").style.width = "60%";
}

function searchParks() {
  closeNav();
  document.getElementById("search").style.width = "60%";
}

function openResults() {
  document.getElementById("result").style.width = "75%";
}

// Clear results when side panel closes
function clearElements() {
  var results = document.querySelectorAll(".resultCell");
  results.forEach(result => result.innerHTML = "");
  clearSearchResults();
}

// Clear search results
function clearSearchResults() {
  document.getElementById("searchInput").value = "";
  document.getElementById("searchList").innerHTML = "";
}

/***** Get results ******/
function getParkFromAnimal(e) {
  var park = returnParkFromId(this.id);
  getParkInfo(park);
  openResults();
}

function getParkFromList(e) {
  var park = this.innerHTML;
  getParkInfo(park);
  openResults();
}

  // get basic park info
function getParkInfo(park) {
  var parkRequest = new XMLHttpRequest();
  parkRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      // console.log("info returned for " + park);
      // console.log(this.responseText);
      var info = JSON.parse(this.responseText);
      getParkAlerts(park, info);
    }
  };
  parkRequest.open("GET", 
                  "https://developer.nps.gov/api/v1/parks?q=" + park + "&api_key=JNYAWS2ZETuoa0Qip2UdSflY3evyqacAiEGQKixm", 
                  true);
  parkRequest.send();
}

  // get park alerts
function getParkAlerts(park, info) {
  // get the correct park if more than one was found
  for(var j = 0; j < info.data.length; j++) {
    var lower1 = info.data[j].fullName.toLowerCase();
    var lower2 = park.toLowerCase();
    console.log("lower case name: " + lower1);
    if(lower1.includes(lower2)) {

      // send AJAX request for alert
      var parkAlert = new XMLHttpRequest();
      parkAlert.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
          // console.log("alert returned for " + park);
          // console.log(this.responseText);
          var alert = JSON.parse(this.response);
          formatResponse(park, info, alert);
        }
      };
      parkAlert.open("GET", 
                      "https://developer.nps.gov/api/v1/alerts?q=" + info.data[j].fullName + "&api_key=JNYAWS2ZETuoa0Qip2UdSflY3evyqacAiEGQKixm", 
                      true);
      parkAlert.send();
    }
  }
}

  // Format AJAX response for display
function formatResponse(park, info, alert) {
  for(var j = 0; j < info.data.length; j++) {
    var lower1 = info.data[j].fullName.toLowerCase();
    var lower2 = park.toLowerCase();
    if(lower1.includes(lower2)) {
      document.getElementById("nameResult").innerHTML = info.data[j].fullName;
      document.getElementById("descriptionResult").innerHTML = info.data[j].description;
      document.getElementById("weatherResult").innerHTML = info.data[j].weatherInfo;

      document.getElementById("linkResult").innerHTML = "<a href='" + info.data[j].url + "' target='_blank'>" + info.data[j].url + "</a>";

      var stateNames = getStateNames(info.data[j].states);
      document.getElementById("stateResult").innerHTML = stateNames;
    }
  }

  var alertInfo = "";
  for (var i = 0; i < alert.data.length; i++) {
    if(i > 0) {
      alertInfo += "<br>";
    }
    alertInfo += alert.data[i].description;
  }
  document.getElementById("alertInfo").innerHTML = alertInfo;
}


function getParkFromSearch() {
  var park = document.getElementById("searchInput").value;
  if(park != "") {
    document.getElementById("searchList").innerHTML = "<div class='loader'></div>";
    console.log("search park: " + park);
    getParkInfoForSearch(park);
  }
  // openResults();
}

  // get park info for Search Page
function getParkInfoForSearch(park) {
  var parkRequest = new XMLHttpRequest();
  parkRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      console.log("info returned for " + park);
      console.log(this.responseText);
      var info = JSON.parse(this.responseText);
      displayAllResults(park, info);
    }
  };
  parkRequest.open("GET", 
                  "https://developer.nps.gov/api/v1/parks?q=" + park + "&limit=100&api_key=JNYAWS2ZETuoa0Qip2UdSflY3evyqacAiEGQKixm", 
                  true);
  parkRequest.send();
}

  // Format results from search
function displayAllResults(park, info) {
  var display = "";
  var count = 1;
  for(var i = 0; i < info.data.length; i++) {
    var lower1 = info.data[i].fullName.toLowerCase();
    var lower2 = park.toLowerCase();
    console.log("length: " + info.data.length);
    if(lower1.includes(lower2)) {
      console.log("count: " + count);
      display += "<p id='result" + count++ + "' class='searchResultItem' onclick=\"seeResultsFromSearch('" + info.data[i].fullName + "')\">" + info.data[i].fullName + "</p>";
    }
  }
  console.log("display: " + display);
  document.getElementById("searchList").innerHTML = display;
}

function seeResultsFromSearch(park) {
  getParkInfo(park);
  openResults();
}

/***** Get park name from animal picture id *****/
function returnParkFromId(id) {
  switch (id) {
    case "spottedOwlImg":
      return "Mount Rainier";
    case "graySquirrelImg":
      return "Sequoia";
    case "buffaloImg":
      return "Yellowstone";
    case "westernLizardImg":
      return "Arches";
    case "redTailedHawkImg":
      return "Grand Canyon";
    case "mooseImg":
      return "Denali";
    case "hawksbillTurtleImg":
      return "Hawai'i Volcanoes";
    case "coyoteImg":
      return "Big Bend";
    case "bighornSheepImg":
      return "Badlands";
    case "blackBearImg":
      return "Great Smoky Mountains";
    case "snowyOwlImg":
      return "Acadia";
    case "crocodileImg":
      return "Everglades";
  }
}

/***** Get state name from state abbreviation *****/
function getStateNames(stateAbb) {
  var stateArray = stateAbb.split(',');
  var stateNames = "";
  for(var i = 0; i < stateArray.length; i++) {
    if(i > 0) {
      stateNames += ", ";
    }
    var name = convertAbb(stateArray[i]);
    stateNames += name;
  }
  return stateNames;
}

function convertAbb(abb) {
  switch (abb) {
    case "AL":
      return "Alabama";
    case "AK": 
      return "Alaska";
    case "AZ":
      return "Arizona";
    case "AR":
      return "Arkansas";
    case "CA":
      return "California";
    case "CO":
      return "Colorado";
    case "CT":
      return "Connecticut";
    case "DE":
      return "Delaware";
    case "FL":
      return "Florida";
    case "GA":
      return "Georgia";
    case "HI":
      return "Hawaii";
    case "ID":
      return "Idaho";
    case "IL":
      return "Illinois";
    case "IN":
      return "Indiana";
    case "IA":
      return "Iowa";
    case "KS":
      return "Kansas";
    case "KY":
      return "Kentucky";
    case "LA":
      return "Louisiana";
    case "ME":
      return "Maine";
    case "MD":
      return "Maryland";
    case "MA":
      return "Massachusetts";
    case "MI":
      return "Michigan";
    case "MN":
      return "Minnesota";
    case "MS":
      return "Mississippi";
    case "MO":
      return "Missouri";
    case "MT":
      return "Montana";
    case "NE":
      return "Nebraska";
    case "NV":
      return "Nevada";
    case "NH":
      return "New Hampshire";
    case "NJ":
      return "Jew Jersey";
    case "NM":
      return "New Mexico";
    case "NY":
      return "New York";
    case "NC":
      return "North Carolina";
    case "ND":
      return "North Dakota";
    case "OH":
      return "Ohio";
    case "OK":
      return "Oklahoma";
    case "OR":
      return "Oregon";
    case "PA":
      return "Pennsylvania";
    case "RI":
      return "Rhode Island";
    case "SC":
      return "South Carolina";
    case "SD":
      return "South Dakota";
    case "TN":
      return "Tennessee";
    case "TX":
      return "Texas";
    case "UT":
      return "Utah";
    case "VT":
      return "Vermont";
    case "VA":
      return "Virginia";
    case "WA":
      return "Washington";
    case "WV":
      return "West Virginia";
    case "WI":
      return "Wisconsin";
    case "WY":
      return "Wyoming";
    case "DC":
      return "District of Columbia";
  }
}