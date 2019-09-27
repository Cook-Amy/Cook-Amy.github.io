function pumpkinChoices() {
  document.getElementById("picture1").src = "/Pics/pumpkin1.bmp";
  document.getElementById("picture2").src = "/Pics/pumpkin2.bmp";
  document.getElementById("picture3").src = "/Pics/pumpkin3.bmp";
}

function eyeChoices() {
  document.getElementById("picture1").src = "/Pics/eyes1.jpg";
  document.getElementById("picture2").src = "/Pics/eyes2.jpg";
  document.getElementById("picture3").src = "/Pics/eyes3.jpg";
}

function noseChoices() {
  document.getElementById("picture1").src = "/Pics/nose1.jpg";
  document.getElementById("picture2").src = "/Pics/nose2.jpg";
  document.getElementById("picture3").src = "/Pics/nose3.jpg";
}

function mouthChoices() {
  document.getElementById("picture1").src = "/Pics/mouth1.jpg";
  document.getElementById("picture2").src = "/Pics/mouth2.jpg";
  document.getElementById("picture3").src = "/Pics/mouth3.jpg";
}

function randomSelection() {
  document.getElementById("result").src = "/Pics/square.png";
}

function addSelection(num) {
  var choice = num;
  var pic1 = document.getElementById("picture1").src;
  var pic2 = document.getElementById("picture2").src;
  var pic3 = document.getElementById("picture3").src;

  // if the 1st picture was chosen
  if(choice == 1) {
    // figure out which part of the pumpkin
    var p = pic1.includes("pumpkin");
    var e = pic1.includes("eyes");
    var n = pic1.includes("nose");
    var m = pic1.includes("mouth");

    // add the chosen part to the result window
    if(p) { document.getElementById("resultPumpkin").src = pic1; }
    else if(e) { document.getElementById("resultEyes").src = pic1; }
    else if(n) { document.getElementById("resultNose").src = pic1; }
    else if(m) { document.getElementById("resultMouth").src = pic1; }
  }

  // if the 2nd picture was chosen
  else if(choice == 2) {
    // figure out which part of the pumpkin
    var p = pic2.includes("pumpkin");
    var e = pic2.includes("eyes");
    var n = pic2.includes("nose");
    var m = pic2.includes("mouth");

    // add the chosen part to the result window
    if(p) { document.getElementById("resultPumpkin").src = pic2; }
    else if(e) { document.getElementById("resultEyes").src = pic2; }
    else if(n) { document.getElementById("resultNose").src = pic2; }
    else if(m) { document.getElementById("resultMouth").src = pic2; }
  }

  // if the 3rd picture was chosen
  else if(choice == 3) {
    // figure out which part of the pumpkin
    var p = pic3.includes("pumpkin");
    var e = pic3.includes("eyes");
    var n = pic3.includes("nose");
    var m = pic3.includes("mouth");

    // add the chosen part to the result window
    if(p) { document.getElementById("resultPumpkin").src = pic3; }
    else if(e) { document.getElementById("resultEyes").src = pic3; }
    else if(n) { document.getElementById("resultNose").src = pic3; }
    else if(m) { document.getElementById("resultMouth").src = pic3; }
  }

}