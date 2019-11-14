/*************** game variables ***************/
var myGamePiece;
var myMaze;
var obstacleArray = [];
var win = false;

/*************** Start new game ***************/
function startGame() {
    myGameArea.start();
    myGamePiece.create(25, 25, "red", 5, 310);
    updateGameArea();
    myMaze = drawMaze();
}

/*************** Define the game board ***************/
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 360;
        this.canvas.height = 360;
        this.context = this.canvas.getContext("2d");
        document.getElementById("canvasArea").appendChild(this.canvas);
    }, 
    clearGame : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    clearPiece : function(gx, gy, gw, gh) {
      this.context.clearRect(gx, gy, gw, gh);
    }
}

/*************** Define the game piece ***************/
var myGamePiece = {
  create : function(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.color = color;
  },
  update : function () {
    ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  newPos : function() {
    this.x += this.speedX;
    this.y += this.speedY;
  },
  crashWith : function(dx, dy) {
    var crash = false;      
    var imgData = ctx.getImageData(this.x + dx, this.y + dy, 25, 25);
    var pix = imgData.data;
    for(var i = 0; i < pix.length; ) {
      if(pix[i++] == 0 && pix[i++] == 0 && pix[i++] == 0 && pix[i++] == 255) {
        crash = true;
      }
    }
    if(this.x + dx <= 0) {
      crash = true;
    }
    return crash;
  },
  win : function() {
      if(this.x + this.width >= 365) {
        win = true;
        winMsg();
        resetGame();
      }
    }
}

/*************** Define the game walls ***************/
function obstacle(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;    
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

/*************** Game Actions ***************/
function updateGameArea() {
  if(!win) {
    myGameArea.clearPiece(myGamePiece.x, myGamePiece.y, myGamePiece.width, myGamePiece.height);
    myGamePiece.newPos();
    myGamePiece.update();
    myGamePiece.win();
  }
}

function moveup() {
  var collision = myGamePiece.crashWith(0, -10);
  if(!collision) {
    myGamePiece.speedY -= 10;
    updateGameArea();
  }
}

function movedown() {
  var collision = myGamePiece.crashWith(0, 10);
  if(!collision) {
    myGamePiece.speedY += 10;
    updateGameArea();
  }
}

function moveleft() {
  var collision = myGamePiece.crashWith(-10, 0);
  if(!collision) {
    myGamePiece.speedX -= 10;
    updateGameArea();
  }
}

function moveright() {
  var collision = myGamePiece.crashWith(10, 0);
  if(!collision) {
    myGamePiece.speedX += 10;
    updateGameArea();
  }
}

function stopmove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}

function winMsg() {
  ctx = myGameArea.context; 
  ctx.fillStyle = "yellow";
  ctx.fillRect(50, 100, 250, 120);
  ctx.fillStyle = "blue";
  ctx.font = "50px Arial";
  ctx.fillText("You Won!", 65, 180);
}

/*************** Draw the game board ***************/
function drawMaze() {
  var obstacleVert1 = new obstacle(10, 300, "black", 0, 0);
  obstacleVert1.update();
  obstacleArray.push(obstacleVert1);

var obstacleVert2 = new obstacle(10, 50, "black", 50, 50);
obstacleVert2.update();
obstacleArray.push(obstacleVert2);

var obstacleVert3 = new obstacle(10, 50, "black", 100, 0);
obstacleVert3.update();
obstacleArray.push(obstacleVert3);

var obstacleVert4 = new obstacle(10, 50, "black", 150, 50);
obstacleVert4.update();
obstacleArray.push(obstacleVert4);

var obstacleVert5 = new obstacle(10, 50, "black", 200, 0);
obstacleVert5.update();
obstacleArray.push(obstacleVert5);

var obstacleVert6 = new obstacle(10, 50, "black", 250, 50);
obstacleVert6.update();
obstacleArray.push(obstacleVert6);

var obstacleVert7 = new obstacle(10, 50, "black", 300, 0);
obstacleVert7.update();
obstacleArray.push(obstacleVert7);

var obstacleVert8 = new obstacle(10, 200, "black", 350, 0);
obstacleVert8.update();
obstacleArray.push(obstacleVert8);

var obstacleVert9 = new obstacle(10, 50, "black", 50, 50);
obstacleVert9.update();
obstacleArray.push(obstacleVert9);

var obstacleVert10 = new obstacle(10, 50, "black", 50, 200);
obstacleVert10.update();
obstacleArray.push(obstacleVert10);

var obstacleVert11 = new obstacle(10, 200, "black", 100, 150);
obstacleVert11.update();
obstacleArray.push(obstacleVert11);

var obstacleVert12 = new obstacle(10, 50, "black", 150, 150);
obstacleVert12.update();
obstacleArray.push(obstacleVert12);

var obstacleVert13 = new obstacle(10, 50, "black", 150, 250);
obstacleVert13.update();
obstacleArray.push(obstacleVert13);

var obstacleVert14 = new obstacle(10, 150, "black", 200, 200);
obstacleVert14.update();
obstacleArray.push(obstacleVert14);

var obstacleVert15 = new obstacle(10, 150, "black", 250, 150);
obstacleVert15.update();
obstacleArray.push(obstacleVert15);

var obstacleVert16 = new obstacle(10, 50, "black", 300, 200);
obstacleVert16.update();
obstacleArray.push(obstacleVert16);

var obstacleVert17 = new obstacle(10, 100, "black", 350, 250);
obstacleVert17.update();
obstacleArray.push(obstacleVert17);

var obstacleVert17 = new obstacle(10, 50, "#ccffe5", 0, 300);
obstacleVert17.update();
obstacleArray.push(obstacleVert17);

var obstacleHorz1 = new obstacle(350, 10, "black", 0, 0);
obstacleHorz1.update();
obstacleArray.push(obstacleHorz1);

var obstacleHorz2 = new obstacle(350, 10, "black", 0, 0);
obstacleHorz2.update();
obstacleArray.push(obstacleHorz2);

var obstacleHorz3 = new obstacle(300, 10, "black", 50, 100);
obstacleHorz3.update();
obstacleArray.push(obstacleHorz3);


var obstacleHorz4 = new obstacle(50, 10, "black", 0, 150);
obstacleHorz4.update();
obstacleArray.push(obstacleHorz4);

var obstacleHorz5 = new obstacle(50, 10, "black", 150, 150);
obstacleHorz5.update();
obstacleArray.push(obstacleHorz5);

var obstacleHorz6 = new obstacle(50, 10, "black", 250, 150);
obstacleHorz6.update();
obstacleArray.push(obstacleHorz6);

var obstacleHorz7 = new obstacle(50, 10, "black", 50, 200);
obstacleHorz7.update();
obstacleArray.push(obstacleHorz7);

var obstacleHorz8 = new obstacle(50, 10, "black", 150, 200);
obstacleHorz8.update();
obstacleArray.push(obstacleHorz8);

var obstacleHorz9 = new obstacle(60, 10, "black", 300, 200);
obstacleHorz9.update();
obstacleArray.push(obstacleHorz9);

var obstacleHorz10 = new obstacle(50, 10, "black", 100, 250);
obstacleHorz10.update();
obstacleArray.push(obstacleHorz10);

var obstacleHorz11 = new obstacle(50, 10, "black", 250, 300);
obstacleHorz11.update();
obstacleArray.push(obstacleHorz11);

var obstacleHorz12 = new obstacle(360, 10, "black", 0, 350);
obstacleHorz12.update();
obstacleArray.push(obstacleHorz12);
}

/*************** Reset the game board ***************/
function resetGame() {
  document.getElementById("resetMsg").style.visibility = "visible";
}

function resetYes() {
  document.getElementById("resetMsg").style.visibility = "hidden";
  myGameArea.clearGame();
  win = false;
  startGame();
}

function resetNo() {
  document.getElementById("resetMsg").style.visibility = "hidden";
}


/*************** Show and hid the solution video/audio ***************/
function showSolution() {
  var vid = document.createElement("VIDEO");
  vid.setAttribute("src", "/Other/mazeVideo.mp4");
  vid.setAttribute("width", "350");
  vid.setAttribute("height", "350");
  vid.setAttribute("loop", "loop");
  document.getElementById("myVideo").insertBefore(vid, document.getElementById("myVideo").childNodes[4]);
  vid.load();
  vid.playbackRate = 2.5;
  vid.play();

  var aud = document.createElement("AUDIO");
  aud.setAttribute("src", "/Other/sillyMusic.mp3");
  aud.setAttribute("loop", "loop");
  document.getElementById("myVideo").insertBefore(aud, document.getElementById("myVideo").childNodes[5]);
  document.querySelector("audio").load();
  document.querySelector("audio").play();
}

function hideSolution() {
  document.querySelector("video").remove();
  document.querySelector("audio").remove();
}