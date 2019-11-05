 /*********** MouseEvents ***********/
 function function1() {
  document.getElementById("onclickAction").innerHTML = "Hello World!";
}
function undoFunction1() {
  document.getElementById("onclickAction").innerHTML = "";
}

function function2() {
  var x = document.getElementById("changeImage").src;
  if(x.includes("picture1")) {
    document.getElementById("changeImage").src = "/Pics/javascriptEventsPics/picture2.jpg";
  }
  else {
    document.getElementById("changeImage").src = "/Pics/javascriptEventsPics/picture1.jpg";
  }
}

function function3() {
  var c1 = document.getElementById("mouseOver").style.backgroundColor;
  if(c1 == "blue") {
    document.getElementById("mouseOver").style.backgroundColor = "green";
  }
  else {
    document.getElementById("mouseOver").style.backgroundColor = "blue";
  }
}

function function4() {
  var c2 = document.getElementById("mouseOut").style.backgroundColor;
  if(c2 == "darkgoldenrod") {
    document.getElementById("mouseOut").style.backgroundColor = "purple";
  }
  else {
    document.getElementById("mouseOut").style.backgroundColor = "darkgoldenrod";
  }
}

/*********** KeyboardEvents ***********/
function function5() {
  document.getElementById("keyUpResult").innerHTML = document.getElementById("keyUp").value;
}

/*********** UiEvents ***********/
function function6() {
document.getElementById("onLoadResult").style.visibility = "hidden";
}
function undoOnLoad() {
document.getElementById("onLoadResult").style.visibility = "visible";
}

function function7() {
document.getElementById("videoLoadedMsg").innerHTML = "The video is paused.";
}

function function10() {
document.getElementById("videoLoadedMsg").innerHTML = "My dog loves the dog park!";
}

/*********** FocusEvents ***********/
function function8(num) {
if(num == 1) {
  document.getElementById("input1").style.borderColor = "red";
}
else {
  document.getElementById("input2").style.borderColor = "red";
}

}

function function9(num) {
if(num == 1) {
  document.getElementById("input1").style.borderColor = "white";
  document.getElementById("focusMsg1").innerHTML = "Thank you for your response.";
}
else {
  document.getElementById("input2").style.borderColor = "white";
  document.getElementById("focusMsg2").innerHTML = "That's a great choice!"
}
}

function function11() {
document.getElementById("touchDemo1").innerHTML = "Hello World";
}

function function12(event) {
var x = event.touches[0].clientX;
var y = event.touches[0].clientY;
document.getElementById("touchDemo2").innerHTML = x + ", " + y;
}