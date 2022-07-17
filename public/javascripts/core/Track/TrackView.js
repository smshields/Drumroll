import GameManager from "./../GameManager.js";
/** Controls composition rendering for tracks in the display.
 * 
 * MVP: 33% of screen, 4 bars with 16 beats each, view of sound placement
 * */
export default class TrackView {

    constructor() {
        this.gameManager = GameManager.instance;

        this.trackViewContainerWidth = this.gameManager.p5.canvasWidth * 0.9;
        this.trackViewContainerHeight = this.gameManager.p5.canvasHeight * 0.3;
        this.trackViewContainerOffsetX = (this.gameManager.p5.canvasWidth - this.trackViewContainerWidth) / 2.0;
        this.trackViewContainerOffsetY = this.gameManager.p5.canvasHeight * 0.22; //TODO: fix magic numbers

    }

    windowResized() {
        this.trackViewContainerWidth = this.gameManager.p5.canvasWidth * 0.9;
        this.trackViewContainerHeight = this.gameManager.p5.canvasHeight * 0.3;
        this.trackViewContainerOffsetX = (this.gameManager.p5.canvasWidth - this.trackViewContainerWidth) / 2.0;
        this.trackViewContainerOffsetY = this.gameManager.p5.canvasHeight * 0.22;
    }

    render() {
        //Border - takes top third of screen
        this.gameManager.p5.stroke(this.gameManager.medContrast);
        this.gameManager.p5.strokeWeight(4);
        this.gameManager.p5.noFill();
        this.gameManager.p5.rect(
            this.trackViewContainerOffsetX,
            this.trackViewContainerOffsetY,
            this.trackViewContainerWidth,
            this.trackViewContainerHeight
        );

        //Timeline - takes up 80% of section

        //Playhead - where the playback currently is
    }

}