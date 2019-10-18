/*************************************************
 * Puppy Pictures
 * ontouch events. Change the picture when it is 
 * touched. Change back when finger is let go.
*************************************************/
function changePic(num) {
  switch (num) {
    case 1:
      document.getElementById("dogPic1").src = "bulldogAd.jpg";
      break;
    case 2:
      document.getElementById("dogPic2").src = "bernieAd.jpg";
      break;
    case 3:
      document.getElementById("dogPic3").src = "chowAd.jpg";
      break;
    case 4:
      document.getElementById("dogPic4").src = "bassettAd.jpg";
      break;
    case 5:
      document.getElementById("dogPic5").src = "goldenRetrieverAd.jpg";
      break;
    case 6:
      document.getElementById("dogPic6").src = "huskyAd.jpg";
      break;
    case 7:
      document.getElementById("dogPic7").src = "irishSetterAd.jpg";
      break;
    case 8:
      document.getElementById("dogPic8").src = "pugAd.jpg";
      break;
    case 9:
      document.getElementById("dogPic9").src = "pomeranianAd.jpg";
      break;
    case 10:
      document.getElementById("dogPic10").src = "boxerAd.jpg";
      break;
    case 11:
      document.getElementById("dogPic11").src = "beagleAd.jpg";
      break;
    case 12:
      document.getElementById("dogPic12").src = "poodleAd.jpg";
      break;
    case 13:
      document.getElementById("dogPic1").src = "bulldogPup.jpg";
      break;
    case 14:
      document.getElementById("dogPic2").src = "berniePup.jpg";
      break;
    case 15:
      document.getElementById("dogPic3").src = "chowPup.jpg";
      break;
    case 16:
      document.getElementById("dogPic4").src = "bassettPup.jpg";
      break;
    case 17:
      document.getElementById("dogPic5").src = "goldenRetrieverPup.jpg";
      break;
    case 18:
      document.getElementById("dogPic6").src = "huskyPup.jpg";
      break;
    case 19:
      document.getElementById("dogPic7").src = "irishSetterPup.jpg";
      break;
    case 20:
      document.getElementById("dogPic8").src = "pugPup.jpg";
      break;
    case 21:
      document.getElementById("dogPic9").src = "pomeranianPup.jpg";
      break;
    case 22:
      document.getElementById("dogPic10").src = "boxerPup.jpg";
      break;
    case 23:
      document.getElementById("dogPic11").src = "beaglePup.jpg";
      break;
    case 24:
      document.getElementById("dogPic12").src = "poodlePup.jpg";
      break;
  }
}

/*************************************************
 * Breed Unscramble
 * onkeyup events. When the correct name has been
 * entered, a message will be displayed for the user.
*************************************************/
function checkScramble(num) {
  switch (num){
    case 1:
      var input1 = document.getElementById("scrambleInp1").value;
      input1 = input1.toLowerCase();
      if(input1.includes("rottweiler")) {
        document.getElementById("scrambleCor1").innerHTML = "Correct!";
      }
      break;
    case 2:
      var input2 = document.getElementById("scrambleInp2").value;
      input2 = input2.toLowerCase();
      if(input2.includes("sheepdog")) {
        document.getElementById("scrambleCor2").innerHTML = "Correct!";
      }
      break;
    case 3:
      var input3 = document.getElementById("scrambleInp3").value;
      input3 = input3.toLowerCase();
      if(input3.includes("dalmatian")) {
        document.getElementById("scrambleCor3").innerHTML = "Correct!";
      }
      break;
    case 4:
      var input4 = document.getElementById("scrambleInp4").value;
      input4 = input4.toLowerCase();
      if(input4.includes("collie")) {
        document.getElementById("scrambleCor4").innerHTML = "Correct!";
      }
      break;
    case 5:
      var input5 = document.getElementById("scrambleInp5").value;
      input5 = input5.toLowerCase();
      if(input5.includes("bloodhound")) {
        document.getElementById("scrambleCor5").innerHTML = "Correct!";
      }
      break;
    case 6:
      var input6 = document.getElementById("scrambleInp6").value;
      input6 = input6.toLowerCase();
      if(input6.includes("greyhound")) {
        document.getElementById("scrambleCor6").innerHTML = "Correct!";
      }
      break;
    case 7:
      var input7 = document.getElementById("scrambleInp7").value;
      input7 = input7.toLowerCase();
      if(input7.includes("mastiff")) {
        document.getElementById("scrambleCor7").innerHTML = "Correct!";
      }
      break;
  }
}

function hint(num) {
  switch (num) {
    case 1:
      document.getElementById("scrambleHint1").innerHTML = "No rotten apples here";
      break;
    case 2:
      document.getElementById("scrambleHint2").innerHTML = "BAAAAAA";
      break;
    case 3:
      document.getElementById("scrambleHint3").innerHTML = "I see spots.";
      break;
    case 4:
      document.getElementById("scrambleHint4").innerHTML = "Lassie";
      break;
    case 5:
      document.getElementById("scrambleHint5").innerHTML = "My nose is the best in the biz!";
      break;
    case 6:
      document.getElementById("scrambleHint6").innerHTML = "I race for treats!";
      break;
    case 7:
      document.getElementById("scrambleHint7").innerHTML = "He is MASsive!";
      break;
  }
}