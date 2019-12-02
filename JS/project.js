function animalsMove() {
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
}

function moveImg() {
  document.getElementById("spottedOwlImg").style.left = "100px";
  document.getElementById("spottedOwlImg").style.top = "50px";
}

function getInfo() {
  var parkRequest = new XMLHttpRequest();
  parkRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      document.getElementById("infoDisplay").innerHTML = this.responseText;
      // var jsonResp = JSON.parse(this.responseText);
      // formatPicture(jsonResp);
    }
  };
  parkRequest.open("GET", 
                  "https://developer.nps.gov/api/v1/parks?parkCode=yell&api_key=JNYAWS2ZETuoa0Qip2UdSflY3evyqacAiEGQKixm", 
                  true);
  parkRequest.send();
}

