let myCharacter;
const path="../assets/sounds/";
const gravity = 1;
const numColors = 100;
const bgCol = 0;
let bg = 255;

let wallSpeed = 1;
let silentY = 0;
let wallCount = 0;
let wallWait = false;
let isRaining = false;

const numSounds = 49;
const sounds = Array.from({ length: numSounds});
const buffers = Array.from({ length: numSounds});

let walls = [];
let baseColors = [];

let loadingCircle;
let loaded = false;

let startTime, timeElapsed;
let gameOver = false;


// let freqs = [];


function preload(){

    buffers.forEach((buffer, i) => {
        buffers[i] = new Promise((resolve) => {
            sounds[i] = loadSound(`${path}${i}.mp3`, setTimeout(resolve, 10000));
        })
    })

    Promise.all(buffers)
        .then(() => {
            console.log('all audio is loaded')
            loaded = true;
            bg = 0;
        })
        .catch(()=> console.error('error loading sounds'))
    
}



function setup(){ 
    createCanvas(700,700);
    myCharacter = new Character();
  
  for(let i = 0; i < numColors; i++){
  	baseColors[i]=[random(255), random(255), random(255), 180];
    // freqs[i] = 220*i%20;
    // freqs[i]= 220 + (i*4);
  }


  loadingCircle = new LoadingCircle();

  addWall();
  startTime = millis();

} 

function draw() { 
    if(loaded){
        if(!gameOver){
            drawGame();
        } else {
            drawGameOver();
        }
        
    } else {
        drawLoading();
    }

}


function drawLoading(){
    background(bg);
    loadingCircle.balls.forEach(ball => {
        ball.update();
        ball.display();
    })
    noStroke();
    textSize(30);
    text('loading...', width/2 -50, height/2 );

}


function drawGameOver(){
    background(0);
    fill(255);
    textSize(20);
    text('uh oh.  you have disappeared.  try again?  press space bar', 10, 200)
    
}


function drawGame(){
    background(bg);
    checkGameOver();
    timeElapsed = millis() - startTime;

    checkKeyboardInput();
    addRandomWall();

    
    walls.forEach((wall, i) => {
        wall.move();
        if(wall.y > 1000) {
            walls.splice(i,1);
            myCharacter.missed++
            } ;
        wall.display();  
    })

       
    if(myCharacter.jumping){
        myCharacter.moveUp();
    }

    myCharacter.y += gravity;
    myCharacter.checkWalls(walls);    
    myCharacter.display();
    wallSpeed += (timeElapsed/10000000);
}


function endJump() {
    myCharacter.jumping = false;    
}

function wallWaitClear() {
    wallWait=false;
}

function addWall() {

  	walls.push(new DemonWall(random(100,500),random(50,200), baseColors[wallCount%baseColors.length], sounds[wallCount%sounds.length] ));
    wallCount++
}

function addRandomWall(){
    const coin = Math.random();
    if(coin > 0.2 && !wallWait){
        wallWait = true;
        setTimeout(wallWaitClear,3000);
        addWall();
    		wallCount++
    }
}


function checkKeyboardInput(){
    if(keyIsDown(RIGHT_ARROW)){
        myCharacter.x += 20;
    }
    if(keyIsDown(LEFT_ARROW)){
        myCharacter.x -= 20;
    }
    if(keyIsDown(DOWN_ARROW)){
        myCharacter.y += 20;
    }
}


function checkGameOver(){
    if(myCharacter.missed > 6){
        gameOver = true;
    }
}


function keyPressed(){

    if(keyCode == UP_ARROW){
        if(!myCharacter.jumping) {
            myCharacter.jumping = true;            
        }
        setTimeout(endJump,300);
    }
    
    if(gameOver && key === ' '){
        resetGame();
    }
}

function resetGame(){
    gameOver = false;
    wallSpeed = 1;
    walls = [];
    myCharacter.missed = 0;
}