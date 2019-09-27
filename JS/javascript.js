function pumpkinChoices() {
  document.getElementById("picture1").src = "/Pics/pumpkin1.png";
  document.getElementById("picture2").src = "/Pics/pumpkin2.png";
  document.getElementById("picture3").src = "/Pics/pumpkin3.png";
}

function eyeChoices() {
  document.getElementById("picture1").src = "/Pics/eyes4.png";
  document.getElementById("picture2").src = "/Pics/eyes5.png";
  document.getElementById("picture3").src = "/Pics/eyes6.png";
 
}

function noseChoices() {
  document.getElementById("picture1").src = "/Pics/nose4.png";
  document.getElementById("picture2").src = "/Pics/nose5.png";
  document.getElementById("picture3").src = "/Pics/nose6.png";
}

function mouthChoices() {
  document.getElementById("picture1").src = "/Pics/mouth4.png";
  document.getElementById("picture2").src = "/Pics/mouth5.png";
  document.getElementById("picture3").src = "/Pics/mouth6.png";
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