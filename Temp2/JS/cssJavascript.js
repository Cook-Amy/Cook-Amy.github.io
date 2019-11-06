/************** Change the font of the name *****************/
function nameFont() {
 var fontSelections = 
    "<p id='font1' onclick='changeFont(1)'>My name is Ed</p>" +
    "<p id='font2' onclick='changeFont(2)'>My name is Ed</p>" +
    "<p id='font3' onclick='changeFont(3)'>My name is Ed</p>" +
    "<p id='font4' onclick='changeFont(4)'>My name is Ed</p>" +
    "<p id='font5' onclick='changeFont(5)'>My name is Ed</p>";

    document.getElementById("selections").innerHTML = fontSelections;
}

function changeFont(num) {
  switch (num) {
    case 1:
      document.getElementById.name.style.fontFamily = "dalekFont";
    case 2:
        document.getElementById.name.style.fontFamily = "goudyFont";
    case 3:
        document.getElementById.name.style.fontFamily = "magnetoFont";
    case 4:
        document.getElementById.name.style.fontFamily = "segoeFont";
    case 5:
        document.getElementById.name.style.fontFamily = "snapFont";
  }
}

function nameColor() {

}

function border() {

}

function headColor() {

}

function headShape() {

}

function bodyColor() {

}

function height() {

}

function width() {

}