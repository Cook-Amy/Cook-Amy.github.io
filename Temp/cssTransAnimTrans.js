
/************** Menu buttons *****************/
function changeMenu(listNum) {
  document.getElementById(listNum).style.transition = "background 1s, width 1s, font-size 1s";
  document.getElementById(listNum).style.background = "rgba(50, 51, 52, 0.8)";
  document.getElementById(listNum).style.width = "215px"; 
  document.getElementById(listNum).style.fontSize = "1.8em";
}

function changeMenuBack(listNum) {
  document.getElementById(listNum).style.backgroundColor = "#800000";
  document.getElementById(listNum).style.width = "180px";
  document.getElementById(listNum).style.fontSize = "1.2em";
}

/************** Change the font of the name *****************/
function nameFont() {
  var fontSelections = 
     "<button class='font1 fontChoice' id='font01' onmouseover='hoverFont(\"font01\")' onmouseout='hoverOutFont(\"font01\")' onclick='changeFont(1)'>My name is Ed</button>" +
     "<button class='font2 fontChoice' id='font02' onmouseover='hoverFont(\"font02\")' onmouseout='hoverOutFont(\"font02\")' onclick='changeFont(2)'>My name is Ed</button>" +
     "<button class='font3 fontChoice' id='font03' onmouseover='hoverFont(\"font03\")' onmouseout='hoverOutFont(\"font03\")' onclick='changeFont(3)'>My name is Ed</button>" +
     "<button class='font4 fontChoice' id='font04' onmouseover='hoverFont(\"font04\")' onmouseout='hoverOutFont(\"font04\")' onclick='changeFont(4)'>My name is Ed</button>" +
     "<button class='font5 fontChoice' id='font05' onmouseover='hoverFont(\"font05\")' onmouseout='hoverOutFont(\"font05\")' onclick='changeFont(5)'>My name is Ed</button>";
 
     document.getElementById("selections").innerHTML = fontSelections;
 }

 function hoverFont(id) {
   document.getElementById(id).style.transition = "background-color 1.5s, color 1.5s";
   document.getElementById(id).style.backgroundColor = "#006666";
   document.getElementById(id).style.color = "#ffffff";
 }

 function hoverOutFont(id) {
   document.getElementById(id).style.backgroundColor = "lightblue";
   document.getElementById(id).style.color = "black";
 }

 function changeFont(num) {
   switch (num) {
     case 1:
       document.getElementById("name").style.fontFamily = "dalekFont";
       break;
     case 2:
         document.getElementById("name").style.fontFamily = "goudyFont";
         break;
     case 3:
         document.getElementById("name").style.fontFamily = "magnetoFont";
         break;
     case 4:
         document.getElementById("name").style.fontFamily = "segoeFont";
         break;
     case 5:
         document.getElementById("name").style.fontFamily = "snapFont";
         break;
   }
 }
 
 /************** Change the color of the name *****************/
 function nameColor() {
   var colorSelector = 
     "<div class='grid-container'>"+
     "<div class='colorChoice' id='red' onmouseover='hoverColor(1)' onmouseout='hoverOutColor(1)' onclick='changeColorName(1)'></div>" +
     "<div class='colorChoice' id='yellow' onmouseover='hoverColor(2)' onmouseout='hoverOutColor(2)' onclick='changeColorName(2)'></div>" +
     "<div class='colorChoice' id='blue' onmouseover='hoverColor(3)' onmouseout='hoverOutColor(3)' onclick='changeColorName(3)'></div>" +
     "<div class='colorChoice' id='brown' onmouseover='hoverColor(4)' onmouseout='hoverOutColor(4)' onclick='changeColorName(4)'></div>" +
     "<div class='colorChoice' id='green' onmouseover='hoverColor(5)' onmouseout='hoverOutColor(5)' onclick='changeColorName(5)'></div>" +
     "<div class='colorChoice' id='pink' onmouseover='hoverColor(6)' onmouseout='hoverOutColor(6)' onclick='changeColorName(6)'></div>" +
     "<div class='colorChoice' id='purple' onmouseover='hoverColor(7)' onmouseout='hoverOutColor(7)' onclick='changeColorName(7)'></div>" +
     "<div class='colorChoice' id='orange' onmouseover='hoverColor(8)' onmouseout='hoverOutColor(8)' onclick='changeColorName(8)'></div>" +
     "<div class='colorChoice' id='black' onmouseover='hoverColor(9)' onmouseout='hoverOutColor(9)' onclick='changeColorName(9)'></div>" +
     "</div>";
 
   document.getElementById("selections").innerHTML = colorSelector;
 }
 
 function changeColorName(num) {
   switch(num) {
     case 1:
       document.getElementById("name").style.color = "#ff0000";
       break;
     case 2:
       document.getElementById("name").style.color = "#ffff00";
       break;
     case 3:
       document.getElementById("name").style.color = "#0033cc";
       break;
     case 4:
       document.getElementById("name").style.color = "#804000";
       break;
     case 5:
       document.getElementById("name").style.color = "#009933";
       break;
     case 6:
       document.getElementById("name").style.color = "#ff6699";
       break;
     case 7:
       document.getElementById("name").style.color = "#993399";
       break;
     case 8:
       document.getElementById("name").style.color = "#ff6600";
       break;
     case 9:
       document.getElementById("name").style.color = "#000000";
       break;
   }
 }

 function hoverColor(num) {
   switch(num) {
      case 1:
        document.getElementById("red").style.transition = "transform 1s";
        document.getElementById("red").style.transform = "rotate(180deg)";
        break;
      case 2:
        document.getElementById("yellow").style.transition = "transform 1s";
        document.getElementById("yellow").style.transform = "rotate(180deg)";
        break;
      case 3:
          document.getElementById("blue").style.transition = "transform 1s";
          document.getElementById("blue").style.transform = "rotate(180deg)";
          break;
      case 4:
          document.getElementById("brown").style.transition = "transform 1s";
          document.getElementById("brown").style.transform = "rotate(180deg)";
          break;
      case 5:
          document.getElementById("green").style.transition = "transform 1s";
          document.getElementById("green").style.transform = "rotate(180deg)";
          break;
      case 6:
          document.getElementById("pink").style.transition = "transform 1s";
          document.getElementById("pink").style.transform = "rotate(180deg)";
          break;
      case 7:
          document.getElementById("purple").style.transition = "transform 1s";
          document.getElementById("purple").style.transform = "rotate(180deg)";
          break;
      case 8:
          document.getElementById("orange").style.transition = "transform 1s";
          document.getElementById("orange").style.transform = "rotate(180deg)";
          break;
      case 9:
          document.getElementById("black").style.transition = "transform 1s";
          document.getElementById("black").style.transform = "rotate(180deg)";
          break;
   }
 }

 function hoverOutColor(num) {
   switch(num) {
      case 1:
        document.getElementById("red").style.transition = "";
        document.getElementById("red").style.transform = "";
        break;
      case 2:
        document.getElementById("yellow").style.transition = "";
        document.getElementById("yellow").style.transform = "";
        break;
      case 3:
          document.getElementById("blue").style.transition = "";
          document.getElementById("blue").style.transform = "";
          break;
      case 4:
          document.getElementById("brown").style.transition = "";
          document.getElementById("brown").style.transform = "";
          break;
      case 5:
          document.getElementById("green").style.transition = "";
          document.getElementById("green").style.transform = "";
          break;
      case 6:
          document.getElementById("pink").style.transition = "";
          document.getElementById("pink").style.transform = "";
          break;
      case 7:
          document.getElementById("purple").style.transition = "";
          document.getElementById("purple").style.transform = "";
          break;
      case 8:
          document.getElementById("orange").style.transition = "";
          document.getElementById("orange").style.transform = "";
          break;
      case 9:
          document.getElementById("black").style.transition = "";
          document.getElementById("black").style.transform = "";
          break;
   }
 }
 
 /************** Change the border style *****************/
function borderStyle() {
  var borderStyle = 
    "<div class='grid-container'>"+
    "<div class='borderChoice' id='dotted' onmouseover='hoverBorder(\"dotted\")' onmouseout='hoverOutBorder(\"dotted\")' onclick='changeBorderStyle(1)'></div>" +
    "<div class='borderChoice' id='dashed' onmouseover='hoverBorder(\"dashed\")' onmouseout='hoverOutBorder(\"dashed\")' onclick='changeBorderStyle(2)'></div>" +
    "<div class='borderChoice' id='solid' onmouseover='hoverBorder(\"solid\")' onmouseout='hoverOutBorder(\"solid\")' onclick='changeBorderStyle(3)'></div>" +
    "<div class='borderChoice' id='double' onmouseover='hoverBorder(\"double\")' onmouseout='hoverOutBorder(\"double\")' onclick='changeBorderStyle(4)'></div>" +
    "<div class='borderChoice' id='groove' onmouseover='hoverBorder(\"groove\")' onmouseout='hoverOutBorder(\"groove\")' onclick='changeBorderStyle(5)'></div>" +
    "<div class='borderChoice' id='ridge' onmouseover='hoverBorder(\"ridge\")' onmouseout='hoverOutBorder(\"ridge\")' onclick='changeBorderStyle(6)'></div>" +
    "<div class='borderChoice' id='inset' onmouseover='hoverBorder(\"inset\")' onmouseout='hoverOutBorder(\"inset\")' onclick='changeBorderStyle(7)'></div>" +
    "<div class='borderChoice' id='outset' onmouseover='hoverBorder(\"outset\")' onmouseout='hoverOutBorder(\"outset\")' onclick='changeBorderStyle(8)'></div>" +
    "<div class='borderChoice' id='none' onclick='changeBorderStyle(9)'>None</div>" +
    "</div>";

  document.getElementById("selections").innerHTML = borderStyle;
}

function hoverBorder(id) {
  document.getElementById(id).style.transition = "transform 1s";
  document.getElementById(id).style.transform = "skew(11deg, 11deg)";
}

function hoverOutBorder(id) {
  // document.getElementById(id).style.transition = "";
  document.getElementById(id).style.transform = "skew(0deg, 0deg)";
}
 
 function changeBorderStyle(num) {
   switch(num) {
     case 1:
       document.getElementById("picture").style.borderStyle = "dotted";
       break;
     case 2:
       document.getElementById("picture").style.borderStyle = "dashed";
       break;
     case 3:
       document.getElementById("picture").style.borderStyle = "solid";
       break;
     case 4:
       document.getElementById("picture").style.borderStyle = "double";
       break;
     case 5:
       document.getElementById("picture").style.borderStyle = "groove";
       break;
     case 6:
       document.getElementById("picture").style.borderStyle = "ridge";
       break;
     case 7:
       document.getElementById("picture").style.borderStyle = "inset";
       break;
     case 8:
       document.getElementById("picture").style.borderStyle = "outset";
       break;
     case 9:
       document.getElementById("picture").style.borderStyle = "none";
       break;
   }
 }
 
 /************** Change the border color *****************/
 function borderColor() {
   var colorSelector = 
     "<div class='grid-container'>"+
     "<div class='colorChoice' id='red' onmouseover='hoverColor(1)' onmouseout='hoverOutColor(1)' onclick='changeColorBorder(1)'></div>" +
     "<div class='colorChoice' id='yellow' onmouseover='hoverColor(2)' onmouseout='hoverOutColor(2)' onclick='changeColorBorder(2)'></div>" +
     "<div class='colorChoice' id='blue' onmouseover='hoverColor(3)' onmouseout='hoverOutColor(3)' onclick='changeColorBorder(3)'></div>" +
     "<div class='colorChoice' id='brown' onmouseover='hoverColor(4)' onmouseout='hoverOutColor(4)' onclick='changeColorBorder(4)'></div>" +
     "<div class='colorChoice' id='green' onmouseover='hoverColor(5)' onmouseout='hoverOutColor(5)' onclick='changeColorBorder(5)'></div>" +
     "<div class='colorChoice' id='pink' onmouseover='hoverColor(6)' onmouseout='hoverOutColor(6)' onclick='changeColorBorder(6)'></div>" +
     "<div class='colorChoice' id='purple' onmouseover='hoverColor(7)' onmouseout='hoverOutColor(7)' onclick='changeColorBorder(7)'></div>" +
     "<div class='colorChoice' id='orange' onmouseover='hoverColor(8)' onmouseout='hoverOutColor(8)' onclick='changeColorBorder(8)'></div>" +
     "<div class='colorChoice' id='black' onmouseover='hoverColor(9)' onmouseout='hoverOutColor(9)' onclick='changeColorBorder(9)'></div>" +
     "</div>";
 
   document.getElementById("selections").innerHTML = colorSelector;
 }
 
 function changeColorBorder(num) {
   switch(num) {
     case 1:
       document.getElementById("picture").style.borderColor = "#ff0000";
       break;
     case 2:
       document.getElementById("picture").style.borderColor = "#ffff00";
       break;
     case 3:
       document.getElementById("picture").style.borderColor = "#0033cc";
       break;
     case 4:
       document.getElementById("picture").style.borderColor = "#804000";
       break;
     case 5:
       document.getElementById("picture").style.borderColor = "#009933";
       break;
     case 6:
       document.getElementById("picture").style.borderColor = "#ff6699";
       break;
     case 7:
       document.getElementById("picture").style.borderColor = "#993399";
       break;
     case 8:
       document.getElementById("picture").style.borderColor = "#ff6600";
       break;
     case 9:
       document.getElementById("picture").style.borderColor = "#000000";
       break;
   }
 }
 
 /************** Change the head color *****************/
 function headColor() {
   var colorSelector = 
     "<div class='grid-container'>"+
     "<div class='colorChoice' id='red' onmouseover='hoverColor(1)' onmouseout='hoverOutColor(1)' onclick='changeColorHead(1)'></div>" +
     "<div class='colorChoice' id='yellow' onmouseover='hoverColor(2)' onmouseout='hoverOutColor(2)' onclick='changeColorHead(2)'></div>" +
     "<div class='colorChoice' id='blue' onmouseover='hoverColor(3)' onmouseout='hoverOutColor(3)' onclick='changeColorHead(3)'></div>" +
     "<div class='colorChoice' id='brown' onmouseover='hoverColor(4)' onmouseout='hoverOutColor(4)' onclick='changeColorHead(4)'></div>" +
     "<div class='colorChoice' id='green' onmouseover='hoverColor(5)' onmouseout='hoverOutColor(5)' onclick='changeColorHead(5)'></div>" +
     "<div class='colorChoice' id='pink' onmouseover='hoverColor(6)' onmouseout='hoverOutColor(6)' onclick='changeColorHead(6)'></div>" +
     "<div class='colorChoice' id='purple' onmouseover='hoverColor(7)' onmouseout='hoverOutColor(7)' onclick='changeColorHead(7)'></div>" +
     "<div class='colorChoice' id='orange' onmouseover='hoverColor(8)' onmouseout='hoverOutColor(8)' onclick='changeColorHead(8)'></div>" +
     "<div class='colorChoice' id='black' onmouseover='hoverColor(9)' onmouseout='hoverOutColor(9)' onclick='changeColorHead(9)'></div>" +
     "</div>";
     
   document.getElementById("selections").innerHTML = colorSelector;
 }
 
 function changeColorHead(num) {
   switch(num) {
     case 1:
       document.querySelector(".head").style.borderColor = "#ff0000";
       break;
     case 2:
       document.querySelector(".head").style.borderColor = "#ffff00";
       break;
     case 3:
       document.querySelector(".head").style.borderColor = "#0033cc";
       break;
     case 4:
       document.querySelector(".head").style.borderColor = "#804000";
       break;
     case 5:
       document.querySelector(".head").style.borderColor = "#009933";
       break;
     case 6:
       document.querySelector(".head").style.borderColor = "#ff6699";
       break;
     case 7:
       document.querySelector(".head").style.borderColor = "#993399";
       break;
     case 8:
       document.querySelector(".head").style.borderColor = "#ff6600";
       break;
     case 9:
       document.querySelector(".head").style.borderColor = "#000000";
       break;
   }
 }
 
 /************** Change the head shape *****************/
 function headShape() {
   var shapeSelector = 
   "<div class='grid-container'>"+
   "<div class='headChoice' id='head0' onmouseover='hoverShape(\"head0\")' onmouseout='hoverOutShape(\"head0\")' onclick='changeShapeHead(1)'></div>" +
   "<div class='headChoice' id='head10' onmouseover='hoverShape(\"head10\")' onmouseout='hoverOutShape(\"head10\")' onclick='changeShapeHead(2)'></div>" +
   "<div class='headChoice' id='head20' onmouseover='hoverShape(\"head20\")' onmouseout='hoverOutShape(\"head20\")' onclick='changeShapeHead(3)'></div>" +
   "<div class='headChoice' id='head30' onmouseover='hoverShape(\"head30\")' onmouseout='hoverOutShape(\"head30\")' onclick='changeShapeHead(4)'></div>" +
   "<div class='headChoice' id='head40' onmouseover='hoverShape(\"head40\")' onmouseout='hoverOutShape(\"head40\")' onclick='changeShapeHead(5)'></div>" +
   "<div class='headChoice' id='head50' onmouseover='hoverShape(\"head50\")' onmouseout='hoverOutShape(\"head50\")' onclick='changeShapeHead(6)'></div>" +
   "</div>";
   
 document.getElementById("selections").innerHTML = shapeSelector;
 }

 function hoverShape(id) {
  document.getElementById(id).style.transition = "border-width 0.5s";
  document.getElementById(id).style.borderWidth = "10px";
 }

 function hoverOutShape(id) {
  document.getElementById(id).style.borderWidth = "5px";
 }
 
 function changeShapeHead(num) {
   switch(num) {
     case 1:
       document.querySelector(".head").style.borderRadius = "0%";
       break;
     case 2:
       document.querySelector(".head").style.borderRadius = "10%";
       break;
     case 3:
       document.querySelector(".head").style.borderRadius = "20%";
       break;
     case 4:
       document.querySelector(".head").style.borderRadius = "30%";
       break;
     case 5:
       document.querySelector(".head").style.borderRadius = "40%";
       break;
     case 6:
       document.querySelector(".head").style.borderRadius = "50%";
       break;
   }
 }
 
 /************** Change the body color *****************/
 function bodyColor() {
   var colorSelector = 
   "<div class='grid-container'>"+
   "<div class='colorChoice' id='red' onmouseover='hoverColor(1)' onmouseout='hoverOutColor(1)' onclick='changeColorBody(1)'></div>" +
   "<div class='colorChoice' id='yellow' onmouseover='hoverColor(2)' onmouseout='hoverOutColor(2)' onclick='changeColorBody(2)'></div>" +
   "<div class='colorChoice' id='blue' onmouseover='hoverColor(3)' onmouseout='hoverOutColor(3)' onclick='changeColorBody(3)'></div>" +
   "<div class='colorChoice' id='brown' onmouseover='hoverColor(4)' onmouseout='hoverOutColor(4)' onclick='changeColorBody(4)'></div>" +
   "<div class='colorChoice' id='green' onmouseover='hoverColor(5)' onmouseout='hoverOutColor(5)' onclick='changeColorBody(5)'></div>" +
   "<div class='colorChoice' id='pink' onmouseover='hoverColor(6)' onmouseout='hoverOutColor(6)' onclick='changeColorBody(6)'></div>" +
   "<div class='colorChoice' id='purple' onmouseover='hoverColor(7)' onmouseout='hoverOutColor(7)' onclick='changeColorBody(7)'></div>" +
   "<div class='colorChoice' id='orange' onmouseover='hoverColor(8)' onmouseout='hoverOutColor(8)' onclick='changeColorBody(8)'></div>" +
   "<div class='colorChoice' id='black' onmouseover='hoverColor(9)' onmouseout='hoverOutColor(9)' onclick='changeColorBody(9)'></div>" +
   "</div>";
   
 document.getElementById("selections").innerHTML = colorSelector;
 }
 
 function changeColorBody(num) {
   var body = document.querySelectorAll(".body");
   switch(num) {
     case 1:
       body.forEach(part => { part.style.borderColor = "#ff0000"});
       break;
     case 2:
       body.forEach(part => { part.style.borderColor = "#ffff00"});
       break;
     case 3:
       body.forEach(part => { part.style.borderColor = "#0033cc"});
       break;
     case 4:
       body.forEach(part => { part.style.borderColor = "#804000"});
       break;
     case 5:
       body.forEach(part => { part.style.borderColor = "#009933"});
       break;
     case 6:
       body.forEach(part => { part.style.borderColor = "#ff6699"});
       break;
     case 7:
       body.forEach(part => { part.style.borderColor = "#993399"});
       break;
     case 8:
       body.forEach(part => { part.style.borderColor = "#ff6600"});
       break;
     case 9:
       body.forEach(part => { part.style.borderColor = "#000000"});
       break;
   }
 }
 
 /************** Change the height *****************/
 function height() {
   var height = 
     "<div class='heightBtnArea'><button class='heightChoice' id='height1' onmouseover='hoverHeight(\"height1\", \"12px\")' onmouseout='hoverOutHeight(\"height1\")' onclick='changeHeight(1)'>Very Short</button></div>" +
     "<div class='heightBtnArea'><button class='heightChoice' id='height2' onmouseover='hoverHeight(\"height2\", \"20px\")' onmouseout='hoverOutHeight(\"height2\")' onclick='changeHeight(2)'>Short</button></div>" +
     "<div class='heightBtnArea'><button class='heightChoice' id='height3' onmouseover='hoverHeight(\"height3\")' onmouseout='hoverOutHeight(\"height3\")' onclick='changeHeight(3)'>Medium</button></div>" +
     "<div class='heightBtnArea'><button class='heightChoice' id='height4' onmouseover='hoverHeight(\"height4\", \"40px\")' onmouseout='hoverOutHeight(\"height4\")' onclick='changeHeight(4)'>Tall</button></div>" +
     "<div class='heightBtnArea'><button class='heightChoice' id='height5' onmouseover='hoverHeight(\"height5\", \"50px\")' onmouseout='hoverOutHeight(\"height5\")' onclick='changeHeight(5)'>Very Tall</button></div>";
   
   document.getElementById("selections").innerHTML = height;
 }

 function hoverHeight(id, size) {
   document.getElementById(id).style.transition = "font-size 1.5s";
   document.getElementById(id).style.fontSize = size;
 }

 function hoverOutHeight(id) {
   document.getElementById(id).style.fontSize = "30px";
 }
 
 function changeHeight(num) {
   switch(num) {
     case 1:
       document.querySelector(".head").style.width = "20px";
       document.querySelector(".head").style.height = "30px";
       document.querySelector(".head").style.top = "21px";
       document.querySelector(".head").style.left = "153px";
       document.querySelector(".torso").style.height = "50px";
       document.querySelector(".torso").style.top = "50px";
       document.querySelector(".torso").style.left = "160px";
       document.querySelector(".leftleg").style.height = "50px";
       document.querySelector(".leftleg").style.top = "100px";
       document.querySelector(".leftleg").style.left = "159px";
       document.querySelector(".rightleg").style.height = "50px";
       document.querySelector(".rightleg").style.top = "100px";
       document.querySelector(".rightleg").style.left = "161px";
       document.querySelector(".leftarm").style.width = "50px";
       document.querySelector(".leftarm").style.top = "56px";
       document.querySelector(".leftarm").style.left = "111px";
       document.querySelector(".rightarm").style.width = "50px";
       document.querySelector(".rightarm").style.top = "56px";
       document.querySelector(".rightarm").style.left = "165px";
       break;
     case 2:
       document.querySelector(".head").style.width = "35px";
       document.querySelector(".head").style.height = "45px";
       document.querySelector(".head").style.top = "21px";
       document.querySelector(".head").style.left = "153px";
       document.querySelector(".torso").style.height = "75px";
       document.querySelector(".torso").style.top = "65px";
       document.querySelector(".torso").style.left = "167px";
       document.querySelector(".leftleg").style.height = "75px";
       document.querySelector(".leftleg").style.top = "139px";
       document.querySelector(".leftleg").style.left = "166px";
       document.querySelector(".rightleg").style.height = "75px";
       document.querySelector(".rightleg").style.top = "139px";
       document.querySelector(".rightleg").style.left = "168px";
       document.querySelector(".leftarm").style.width = "75px";
       document.querySelector(".leftarm").style.top = "71px";
       document.querySelector(".leftarm").style.left = "96px";
       document.querySelector(".rightarm").style.width = "75px";
       document.querySelector(".rightarm").style.top = "71px";
       document.querySelector(".rightarm").style.left = "170px";
       break;
     case 3:
       document.querySelector(".head").style.width = "50px";
       document.querySelector(".head").style.height = "60px";
       document.querySelector(".head").style.top = "21px";
       document.querySelector(".head").style.left = "153px";
       document.querySelector(".torso").style.height = "100px";
       document.querySelector(".torso").style.top = "80px";
       document.querySelector(".torso").style.left = "176px";
       document.querySelector(".leftleg").style.height = "100px";
       document.querySelector(".leftleg").style.top = "175px";
       document.querySelector(".leftleg").style.left = "175px";
       document.querySelector(".rightleg").style.height = "100px";
       document.querySelector(".rightleg").style.top = "175px";
       document.querySelector(".rightleg").style.left = "177px";
       document.querySelector(".leftarm").style.width = "100px";
       document.querySelector(".leftarm").style.top = "86px";
       document.querySelector(".leftarm").style.left = "77px";
       document.querySelector(".rightarm").style.width = "100px";
       document.querySelector(".rightarm").style.top = "86px";
       document.querySelector(".rightarm").style.left = "181px";
       break;
     case 4:
       document.querySelector(".head").style.width = "65px";
       document.querySelector(".head").style.height = "75px";
       document.querySelector(".head").style.top = "21px";
       document.querySelector(".head").style.left = "153px";
       document.querySelector(".torso").style.height = "125px";
       document.querySelector(".torso").style.top = "91px";
       document.querySelector(".torso").style.left = "180px";
       document.querySelector(".leftleg").style.height = "125px";
       document.querySelector(".leftleg").style.top = "216px";
       document.querySelector(".leftleg").style.left = "179px";
       document.querySelector(".rightleg").style.height = "125px";
       document.querySelector(".rightleg").style.top = "216px";
       document.querySelector(".rightleg").style.left = "181px";
       document.querySelector(".leftarm").style.width = "125px";
       document.querySelector(".leftarm").style.top = "104px";
       document.querySelector(".leftarm").style.left = "59px";
       document.querySelector(".rightarm").style.width = "125px";
       document.querySelector(".rightarm").style.top = "104px";
       document.querySelector(".rightarm").style.left = "181px";
       break;
     case 5:
       document.querySelector(".head").style.width = "80px";
       document.querySelector(".head").style.height = "90px";
       document.querySelector(".head").style.top = "21px";
       document.querySelector(".head").style.left = "153px";
       document.querySelector(".torso").style.height = "150px";
       document.querySelector(".torso").style.top = "106px";
       document.querySelector(".torso").style.left = "191px";
       document.querySelector(".leftleg").style.height = "150px";
       document.querySelector(".leftleg").style.top = "255px";
       document.querySelector(".leftleg").style.left = "190px";
       document.querySelector(".rightleg").style.height = "150px";
       document.querySelector(".rightleg").style.top = "255px";
       document.querySelector(".rightleg").style.left = "192px";
       document.querySelector(".leftarm").style.width = "150px";
       document.querySelector(".leftarm").style.top = "119px";
       document.querySelector(".leftarm").style.left = "45px";
       document.querySelector(".rightarm").style.width = "150px";
       document.querySelector(".rightarm").style.top = "119px";
       document.querySelector(".rightarm").style.left = "195px";
       break;
   }
 }
 
 /************** Dance Party *****************/
 var bdyColor; 

 function dance1() {
  bdyColor = document.getElementById("trso").style.borderColor;
  var body = document.querySelectorAll(".body");
  body.forEach(part => { part.style.borderColor = ""});
  console.log("color: " + bdyColor);

  document.getElementById("picture").style.animation = "danceBorder 1s infinite";
  document.querySelector(".head").style.animation = "rockHead 1s alternate infinite ease-in-out";
  document.querySelector(".leftarm").style.animation = "leftArmWave 1s alternate infinite ease-in-out";
  document.querySelector(".rightarm").style.animation = "rightArmWave 1s alternate infinite ease-in-out";
  document.querySelector(".leftleg").style.animation = "leftLegKick 2s alternate infinite ease-in-out";
  document.querySelector(".rightleg").style.animation = "rightLegKick 2s alternate infinite ease-in-out";
  document.querySelector(".torso").style.animation = "bodyColor 1.5s alternate infinite ease-in-out";
 }

 function stopDance() {
  var body = document.querySelectorAll(".body");
  body.forEach(part => { part.style.borderColor = bdyColor});
  console.log("color: " + bdyColor);

   document.getElementById("picture").style.animation = "";
   document.querySelector(".head").style.animation = "";
   document.querySelector(".leftarm").style.animation = "";
   document.querySelector(".rightarm").style.animation = "";
   document.querySelector(".leftleg").style.animation = "";
   document.querySelector(".rightleg").style.animation = "";
   document.querySelector(".torso").style.animation = "";

 }