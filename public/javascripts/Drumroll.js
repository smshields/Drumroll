import GameManager from "./core/GameManager.js";
import SongView from "./core/Song/SongView.js";

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

    //View Components
    p5.songView = {};

    p5.centerCanvas = function () {
        //offset by half of canvas vs window
        p5.offsetX = (p5.windowWidth - p5.canvasWidth) / 2;
        p5.offsetY = (p5.windowHeight - p5.canvasHeight) / 2;
        p5.cnv.position(p5.offsetX, p5.offsetY);
    };

    p5.setup = function () {
        //Create canvas and adjust height/position
        p5.canvasWidth = p5.windowWidth * .9;
        p5.canvasHeight = p5.windowHeight * .7;
        p5.cnv = p5.createCanvas(p5.canvasWidth, p5.canvasHeight);
        p5.centerCanvas();

        //Initial render of background
        p5.background(GameManager.instance.backgroundColor);

        //Initialize SongView
        p5.songView = new SongView();
        p5.songView.render();
    };

    p5.draw = function () {
        //render background
        p5.background(GameManager.instance.backgroundColor);
        //render song/transport view
        p5.songView.render();

        
    };

    p5.windowResized = function () {
        p5.canvasWidth = p5.windowWidth * .9;
        p5.canvasHeight = p5.windowHeight * .7;
        p5.resizeCanvas(p5.canvasWidth, p5.canvasHeight);
        p5.centerCanvas();
        //resize components
        p5.songView.windowResized();
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

//Establish color scheme for game
gameManager.backgroundColor = '#222222';
gameManager.lowContrast = '#000272';
gameManager.medContrast = '#341677';
gameManager.highContrast = '#A32F80';
gameManager.maxContrast = '#FF6363';

//Set up Song Timer/Playback with Tone
gameManager.transport = Tone.Transport;

//TODO: Model initialization
//TODO: Move to constants somewhere
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
