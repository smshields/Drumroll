import GameManager from "./core/GameManager.js";

//Create game manager
let gameManager = new GameManager(); 

//Initialize P5 sketch
let drumrollSketch = function (p5) {

    p5.drumrollModel = {};

    p5.centerCanvas = function () {
        p5.centerX = (p5.windowWidth - p5.width) / 2;
        p5.centerY = (p5.windowHeight - p5.height) / 2;
        p5.cnv.position(p5.centerX, p5.centerY);
    };

    p5.setup = function () {
        p5.cnv = p5.createCanvas(100, 100);
        let canvasWidth = p5.windowWidth * .9;
        let canvasHeight = p5.windowHeight * .7;
        p5.resizeCanvas(canvasWidth, canvasHeight);
        p5.centerCanvas();
        p5.background(34, 34, 34);
    };

    p5.draw = function () {
        p5.background(GameManager.instance.backgroundColor);
        
    };

    p5.windowResized = function () {
        let canvasWidth = p5.windowWidth * .9;
        let canvasHeight = p5.windowHeight * .7;
        p5.resizeCanvas(canvasWidth, canvasHeight);
        p5.centerCanvas();
    };

    //render


};

//Set up application references
gameManager.p5 = new p5(drumrollSketch, 'drumroll');
gameManager.canvas = p5.cnv;
gameManager.backgroundColor = '#222222';


//TODO: Model initialization