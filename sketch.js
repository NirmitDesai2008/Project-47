var database, runners;
var finished, finishedPlayers;
var playerCount, allPlayers;
var form, player, game;
var background1, backgroundImg;
var mickey, mickeyImg;
var doraemon, doraemonImg, tom, tomImg;
var sonic, sonicImg, jerry, jerryImg;
var bunny, bunnyImg, endingAnimation;
var spider, spiderImg, mouse, mouseImg;
var i, obstaclesGroup;
var goldMedalImg, silverMedalImg, bronzeMedalImg;
var boundary1, boundary2;
var distance = 0;
var gameState = 0;

function preload(){
    backgroundImg = loadImage("sprites/bg2.png");
    endingAnimation = loadAnimation("sprites/bg4.png","sprites/bg5.png","sprites/bg6.png","sprites/bg7.png","sprites/bg8.png","sprites/bg9.png","sprites/bg10.png","sprites/bg11.png","sprites/bg12.png","sprites/bg13.png");
    mickeyImg = loadAnimation("sprites/mickey1.png","sprites/mickey2.png","sprites/mickey3.png","sprites/mickey4.png","sprites/mickey5.png","sprites/mickey6.png","sprites/mickey7.png","sprites/mickey8.png","sprites/mickey9.png","sprites/mickey10.png","sprites/mickey11.png","sprites/mickey12.png","sprites/mickey13.png","sprites/mickey14.png","sprites/mickey15.png","sprites/mickey16.png","sprites/mickey17.png","sprites/mickey18.png","sprites/mickey19.png","sprites/mickey20.png","sprites/mickey21.png","sprites/mickey22.png","sprites/mickey23.png");
    doraemonImg = loadAnimation("sprites/doraemon1.png","sprites/doraemon2.png","sprites/doraemon3.png");
    sonicImg = loadAnimation("sprites/sonic1.png","sprites/sonic2.png","sprites/sonic3.png","sprites/sonic4.png","sprites/sonic5.png","sprites/sonic6.png","sprites/sonic7.png","sprites/sonic8.png");
    jerryImg = loadAnimation("sprites/jerry1.png","sprites/jerry2.png","sprites/jerry3.png","sprites/jerry4.png","sprites/jerry5.png","sprites/jerry6.png","sprites/jerry7.png","sprites/jerry8.png");
    tomImg = loadAnimation("sprites/tom1.png","sprites/tom2.png","sprites/tom3.png","sprites/tom4.png","sprites/tom5.png","sprites/tom6.png","sprites/tom7.png","sprites/tom8.png","sprites/tom9.png","sprites/tom10.png","sprites/tom11.png","sprites/tom12.png","sprites/tom13.png","sprites/tom14.png","sprites/tom15.png","sprites/tom16.png","sprites/tom17.png");
    bunnyImg = loadAnimation("sprites/bunny1.png","sprites/bunny2.png","sprites/bunny3.png","sprites/bunny4.png","sprites/bunny5.png","sprites/bunny6.png","sprites/bunny7.png","sprites/bunny8.png","sprites/bunny9.png")
    spiderImg = loadImage("sprites/spider.png");
    mouseImg = loadImage("sprites/mouse.png");
    goldMedalImg = loadImage("sprites/gold.png");
    silverMedalImg = loadImage("sprites/silver.png");
    bronzeMedalImg = loadImage("sprites/bronze.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight-165);
    database = firebase.database();

    gameState = 0;
    distance = 0;
    finishedPlayers = 0;
    obstaclesGroup = createGroup();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background(200,200,255);

    if (playerCount === 6 && finishedPlayers === 0){
        game.update(1);
    }
    
    if (gameState === 1){
        game.play();
    }
    
    if (finishedPlayers === 6){
        game.update(2);
    }
    
    if (gameState === 2 && finishedPlayers === 6){
        //game.displayRanks();
    }
}