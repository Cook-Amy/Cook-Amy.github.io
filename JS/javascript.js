/****************************************************************
 * Show the different choices for each part of the jack-o-lantern
****************************************************************/
var pictureChoices = ["picture1", "picture2", "picture3"];

function pumpkinChoices() {
  var pumpkins = ["/Pics/javascriptPics/pumpkin1.png",
                  "/Pics/javascriptPics/pumpkin2.png",
                  "/Pics/javascriptPics/pumpkin3.png"];

  for(var i = 0; i < 3; i++) {
    document.getElementById(pictureChoices[i]).src = pumpkins[i];
  }
}

function eyeChoices() {
  var eyes = ["/Pics/javascriptPics/eyes4.png",
              "/Pics/javascriptPics/eyes5.png",
              "/Pics/javascriptPics/eyes6.png"];

  for(var i = 0; i < 3; i++) {
    document.getElementById(pictureChoices[i]).src = eyes[i];
  }
}

function noseChoices() {
  var noses = ["/Pics/javascriptPics/nose4.png",
              "/Pics/javascriptPics/nose5.png",
              "/Pics/javascriptPics/nose6.png"];

  for(var i = 0; i < 3; i++) {
    document.getElementById(pictureChoices[i]).src = noses[i];
  }
}

function mouthChoices() {
  var mouths = ["/Pics/javascriptPics/mouth4.png",
                "/Pics/javascriptPics/mouth5.png",
                "/Pics/javascriptPics/mouth6.png"];

  for(var i = 0; i < 3; i++) {
    document.getElementById(pictureChoices[i]).src = mouths[i];
  }
}

/**************************************************************
 * Add the user's choice to the picture
**************************************************************/
function addSelection(num) {
  switch(num) {

    // if the 1st picture was chosen
    case 1:
      var pic1 = document.getElementById("picture1").src;

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
      break;

    // if the 2nd picture was chosen
    case 2:
      var pic2 = document.getElementById("picture2").src;

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
      break;

    // if the 3rd picture was chosen
    case 3:
      var pic3 = document.getElementById("picture3").src;

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

/**************************************************************
 * Show random jack-o-lantern pictures
**************************************************************/
function randomSelection() {
  var pumpkins = ["/Pics/javascriptPics/pumpkin1.png",
                  "/Pics/javascriptPics/pumpkin2.png",
                  "/Pics/javascriptPics/pumpkin3.png"];
  var eyes = ["/Pics/javascriptPics/eyes4.png",
              "/Pics/javascriptPics/eyes5.png",
              "/Pics/javascriptPics/eyes6.png"];
  var noses = ["/Pics/javascriptPics/nose4.png",
               "/Pics/javascriptPics/nose5.png",
               "/Pics/javascriptPics/nose6.png"];
  var mouths = ["/Pics/javascriptPics/mouth4.png",
                "/Pics/javascriptPics/mouth5.png",
                "/Pics/javascriptPics/mouth6.png"];

  var random1 = Math.floor(Math.random() * 3);
  var random2 = Math.floor(Math.random() * 3);
  var random3 = Math.floor(Math.random() * 3);
  var random4 = Math.floor(Math.random() * 3);

  document.getElementById("resultPumpkin").src = pumpkins[random1];
  document.getElementById("resultEyes").src = eyes[random2];
  document.getElementById("resultNose").src = noses[random3];
  document.getElementById("resultMouth").src = mouths[random4];
}