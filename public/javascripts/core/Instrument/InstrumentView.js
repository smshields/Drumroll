import GameManager from "./../GameManager.js";

/** Controls composition rendering for tracks in the display.
 * 
 * MVP: Dice management, instrument/clip creation, clip placement.
 * 
 */

export default class InstrumentView {

    constructor() {
        this.gameManager = GameManager.instance;

        this.instrumentViewContainerWidth = this.gameManager.p5.canvasWidth * 0.9;
        this.instrumentViewContainerHeight = this.gameManager.p5.canvasHeight * 0.46;
        this.instrumentViewContainerOffsetX = (this.gameManager.p5.canvasWidth - this.instrumentViewContainerWidth) / 2.0;
        this.instrumentViewContainerOffsetY = this.gameManager.p5.canvasHeight * 0.53; //TODO: fix magic numbers
    }

    windowResized() {
        this.instrumentViewContainerWidth = this.gameManager.p5.canvasWidth * 0.9;
        this.instrumentViewContainerHeight = this.gameManager.p5.canvasHeight * 0.46;
        this.instrumentViewContainerOffsetX = (this.gameManager.p5.canvasWidth - this.instrumentViewContainerWidth) / 2.0;
        this.instrumentViewContainerOffsetY = this.gameManager.p5.canvasHeight * 0.53;
    }

    render() {
        //Border - takes top third of screen
        this.gameManager.p5.stroke(this.gameManager.highContrast);
        this.gameManager.p5.strokeWeight(4);
        this.gameManager.p5.noFill();
        this.gameManager.p5.rect(
            this.instrumentViewContainerOffsetX,
            this.instrumentViewContainerOffsetY,
            this.instrumentViewContainerWidth,
            this.instrumentViewContainerHeight
        );

        //Timeline - takes up 80% of section

        //Playhead - where the playback currently is
    }

}