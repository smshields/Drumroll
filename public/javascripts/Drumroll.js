import GameManager from "./core/GameManager.js";

//Create game manager
let gameManager = new GameManager(); 

//Initialize P5 sketch
let drumrollSketch = function (p5) {

    p5.drumrollModel = {};
    p5.centerX = {};
    p5.centerY = {};
    p5.cnv = {};
    p5.canvasWidth = {};
    p5.canvasHeight = {};

    p5.centerCanvas = function () {
        p5.centerX = (p5.windowWidth - p5.width) / 2;
        p5.centerY = (p5.windowHeight - p5.height) / 2;
        p5.cnv.position(p5.centerX, p5.centerY);
    };

    p5.setup = function () {
        p5.cnv = p5.createCanvas(100, 100);
        p5.canvasWidth = p5.windowWidth * .9;
        p5.canvasHeight = p5.windowHeight * .7;
        p5.resizeCanvas(p5.canvasWidth, p5.canvasHeight);
        p5.centerCanvas();
        p5.background(GameManager.instance.backgroundColor);
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

    p5.mouseClicked = async function() {
      await Tone.start()
      gameManager.transport.start()
    }

    //render


};

//Set up application references
gameManager.p5 = new p5(drumrollSketch, 'drumroll');
gameManager.canvas = p5.cnv;
gameManager.backgroundColor = '#222222';
gameManager.transport = Tone.Transport;
console.log(gameManager.transport);

//TODO: Model initialization
gameManager.transport.loop = true;
gameManager.transport.loopStart = "0:0:0";
gameManager.transport.loopEnd = "16:0:0";
gameManager.transport.schedule((time) => {
  console.log(`${time}: starting song`)
}, "0:0:0");

// Define sampler
const sampler = new Tone.Sampler({
  urls: {
    "C4": "C4.mp3",
    "D#4": "Ds4.mp3",
    "F#4": "Fs4.mp3",
    "A4": "A4.mp3",
  },
  release: 1,
  baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

// Wait for samples to load...
Tone.loaded().then(() => {
  
  const emptySequenceArray = [].fill(null, 64);
  let someSequenceArray = emptySequenceArray;
  someSequenceArray[0] = "Eb4";
  someSequenceArray[15] = "Eb4";
  someSequenceArray[31] = "Eb4";
  someSequenceArray[47] = "Eb4";
  const sampleSeq = new Tone.Sequence((time, note) => {
    sampler.triggerAttackRelease(note, 0.1, time);
    // sequences are defined as 64 beat arrays
  }, someSequenceArray).start("0:0:0")

});
