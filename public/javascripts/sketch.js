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
        p5.background('#222222');
        p5.fill(255);
        p5.rect(0, 0, 50, 50);
    };

    p5.windowResized = function () {
        let canvasWidth = p5.windowWidth * .9;
        let canvasHeight = p5.windowHeight * .7;
        p5.resizeCanvas(canvasWidth, canvasHeight);
        p5.centerCanvas();
    };

    //render


};

let drumroll = {};
drumroll.p5 = new p5(drumrollSketch, 'drumroll');

//TODO: Model initialization