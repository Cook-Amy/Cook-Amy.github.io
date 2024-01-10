/************** Change the font of the name *****************/
function nameFont() {
  var fontSelections = 
     "<button class='font1 fontChoice' onclick='changeFont(1)'>My name is Ed</button>" +
     "<button class='font2 fontChoice' onclick='changeFont(2)'>My name is Ed</button>" +
     "<button class='font3 fontChoice' onclick='changeFont(3)'>My name is Ed</button>" +
     "<button class='font4 fontChoice' onclick='changeFont(4)'>My name is Ed</button>" +
     "<button class='font5 fontChoice' onclick='changeFont(5)'>My name is Ed</button>";
 
     document.getElementById("selections").innerHTML = fontSelections;
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
     "<div class='colorChoice' id='red' onclick='changeColorName(1)'></div>" +
     "<div class='colorChoice' id='yellow' onclick='changeColorName(2)'></div>" +
     "<div class='colorChoice' id='blue' onclick='changeColorName(3)'></div>" +
     "<div class='colorChoice' id='brown' onclick='changeColorName(4)'></div>" +
     "<div class='colorChoice' id='green' onclick='changeColorName(5)'></div>" +
     "<div class='colorChoice' id='pink' onclick='changeColorName(6)'></div>" +
     "<div class='colorChoice' id='purple' onclick='changeColorName(7)'></div>" +
     "<div class='colorChoice' id='orange' onclick='changeColorName(8)'></div>" +
     "<div class='colorChoice' id='black' onclick='changeColorName(9)'></div>" +
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
 
 /************** Change the border style *****************/
 function borderStyle() {
   var borderStyle = 
     "<div class='grid-container'>"+
     "<div class='borderChoice' id='dotted' onclick='changeBorderStyle(1)'></div>" +
     "<div class='borderChoice' id='dashed' onclick='changeBorderStyle(2)'></div>" +
     "<div class='borderChoice' id='solid' onclick='changeBorderStyle(3)'></div>" +
     "<div class='borderChoice' id='double' onclick='changeBorderStyle(4)'></div>" +
     "<div class='borderChoice' id='groove' onclick='changeBorderStyle(5)'></div>" +
     "<div class='borderChoice' id='ridge' onclick='changeBorderStyle(6)'></div>" +
     "<div class='borderChoice' id='inset' onclick='changeBorderStyle(7)'></div>" +
     "<div class='borderChoice' id='outset' onclick='changeBorderStyle(8)'></div>" +
     "<div class='borderChoice' id='none' onclick='changeBorderStyle(9)'>None</div>" +
     "</div>";
 
   document.getElementById("selections").innerHTML = borderStyle;
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
     "<div class='colorChoice' id='red' onclick='changeColorBorder(1)'></div>" +
     "<div class='colorChoice' id='yellow' onclick='changeColorBorder(2)'></div>" +
     "<div class='colorChoice' id='blue' onclick='changeColorBorder(3)'></div>" +
     "<div class='colorChoice' id='brown' onclick='changeColorBorder(4)'></div>" +
     "<div class='colorChoice' id='green' onclick='changeColorBorder(5)'></div>" +
     "<div class='colorChoice' id='pink' onclick='changeColorBorder(6)'></div>" +
     "<div class='colorChoice' id='purple' onclick='changeColorBorder(7)'></div>" +
     "<div class='colorChoice' id='orange' onclick='changeColorBorder(8)'></div>" +
     "<div class='colorChoice' id='black' onclick='changeColorBorder(9)'></div>" +
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
     "<div class='colorChoice' id='red' onclick='changeColorHead(1)'></div>" +
     "<div class='colorChoice' id='yellow' onclick='changeColorHead(2)'></div>" +
     "<div class='colorChoice' id='blue' onclick='changeColorHead(3)'></div>" +
     "<div class='colorChoice' id='brown' onclick='changeColorHead(4)'></div>" +
     "<div class='colorChoice' id='green' onclick='changeColorHead(5)'></div>" +
     "<div class='colorChoice' id='pink' onclick='changeColorHead(6)'></div>" +
     "<div class='colorChoice' id='purple' onclick='changeColorHead(7)'></div>" +
     "<div class='colorChoice' id='orange' onclick='changeColorHead(8)'></div>" +
     "<div class='colorChoice' id='black' onclick='changeColorHead(9)'></div>" +
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
   "<div class='headChoice' id='head0' onclick='changeShapeHead(1)'></div>" +
   "<div class='headChoice' id='head10' onclick='changeShapeHead(2)'></div>" +
   "<div class='headChoice' id='head20' onclick='changeShapeHead(3)'></div>" +
   "<div class='headChoice' id='head30' onclick='changeShapeHead(4)'></div>" +
   "<div class='headChoice' id='head40' onclick='changeShapeHead(5)'></div>" +
   "<div class='headChoice' id='head50' onclick='changeShapeHead(6)'></div>" +
   "</div>";
   
 document.getElementById("selections").innerHTML = shapeSelector;
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
 
 /************** Change the head color *****************/
 function bodyColor() {
   var colorSelector = 
   "<div class='grid-container'>"+
   "<div class='colorChoice' id='red' onclick='changeColorBody(1)'></div>" +
   "<div class='colorChoice' id='yellow' onclick='changeColorBody(2)'></div>" +
   "<div class='colorChoice' id='blue' onclick='changeColorBody(3)'></div>" +
   "<div class='colorChoice' id='brown' onclick='changeColorBody(4)'></div>" +
   "<div class='colorChoice' id='green' onclick='changeColorBody(5)'></div>" +
   "<div class='colorChoice' id='pink' onclick='changeColorBody(6)'></div>" +
   "<div class='colorChoice' id='purple' onclick='changeColorBody(7)'></div>" +
   "<div class='colorChoice' id='orange' onclick='changeColorBody(8)'></div>" +
   "<div class='colorChoice' id='black' onclick='changeColorBody(9)'></div>" +
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
     "<div><button class='heightChoice' id='height1' onclick='changeHeight(1)'>Very Short</button></div>" +
     "<div><button class='heightChoice' id='height2' onclick='changeHeight(2)'>Short</button></div>" +
     "<div><button class='heightChoice' id='height3' onclick='changeHeight(3)'>Medium</button></div>" +
     "<div><button class='heightChoice' id='height4' onclick='changeHeight(4)'>Tall</button></div>" +
     "<div><button class='heightChoice' id='height5' onclick='changeHeight(5)'>Very Tall</button></div>";
   
   document.getElementById("selections").innerHTML = height;
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
       document.querySelector(".leftfoot").style.width = "10px";
       document.querySelector(".leftfoot").style.top = "148px";
       document.querySelector(".leftfoot").style.left = "144px";
       document.querySelector(".rightfoot").style.width = "10px";
       document.querySelector(".rightfoot").style.top = "148px";
       document.querySelector(".rightfoot").style.left = "172px";
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
       document.querySelector(".leftfoot").style.width = "20px";
       document.querySelector(".leftfoot").style.top = "210px";
       document.querySelector(".leftfoot").style.left = "136px";
       document.querySelector(".rightfoot").style.width = "20px";
       document.querySelector(".rightfoot").style.top = "210px";
       document.querySelector(".rightfoot").style.left = "184px";
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
       document.querySelector(".leftfoot").style.width = "30px";
       document.querySelector(".leftfoot").style.top = "270px";
       document.querySelector(".leftfoot").style.left = "130px";
       document.querySelector(".rightfoot").style.width = "30px";
       document.querySelector(".rightfoot").style.top = "270px";
       document.querySelector(".rightfoot").style.left = "198px";
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
       document.querySelector(".leftfoot").style.width = "40px";
       document.querySelector(".leftfoot").style.top = "330px";
       document.querySelector(".leftfoot").style.left = "119px";
       document.querySelector(".rightfoot").style.width = "40px";
       document.querySelector(".rightfoot").style.top = "330px";
       document.querySelector(".rightfoot").style.left = "206px";
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
       document.querySelector(".leftfoot").style.width = "50px";
       document.querySelector(".leftfoot").style.top = "399px";
       document.querySelector(".leftfoot").style.left = "115px";
       document.querySelector(".rightfoot").style.width = "50px";
       document.querySelector(".rightfoot").style.top = "399px";
       document.querySelector(".rightfoot").style.left = "223px";
       break;
   }
 }
 