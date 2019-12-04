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
}

function viewList() {
  closeNav();
  document.getElementById("list").style.width = "60%";
}

function searchParks() {
  closeNav();
  document.getElementById("search").style.width = "60%";
}


/***** Get results ******/
function getParkFromAnimal(e) {
  document.getElementById("result").style.width = "75%";
  var park = returnParkFromId(this.id);
  getParkInfo(park);
}

function getParkFromList(e) {
  var park = this.innerHTML;
  getParkInfo(park);
}

function getParkFromSearch() {
  var park = document.getElementById("searchInput").value;
  getParkInfo(park);
}

function getParkInfo(park) {
  var parkRequest = new XMLHttpRequest();
  parkRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      console.log("info returned for " + park);
      // document.getElementById("infoDisplay").innerHTML = this.responseText;
      // var jsonResp = JSON.parse(this.responseText);
      // formatPicture(jsonResp);
    }
  };
  parkRequest.open("GET", 
                  "https://developer.nps.gov/api/v1/parks?parkCode=yell&api_key=JNYAWS2ZETuoa0Qip2UdSflY3evyqacAiEGQKixm", 
                  true);
  parkRequest.send();
}


/***** Get park name from animal picture id *****/
function returnParkFromId(id) {
  switch (id) {
    case "spottedOwlImg":
      return "Mt. Ranier";
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
      return "Hawaii Volcanoes";
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