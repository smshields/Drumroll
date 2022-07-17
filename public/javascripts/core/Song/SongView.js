import GameManager from "./../GameManager.js";
/** Controls song rendering in the display.
 * 
 * MVP: 33% of screen, 16 segment bar, cursor that follows the pattern of song data structure
 * */
export default class SongView {

    constructor() {
        this.gameManager = GameManager.instance;

        this.songViewContainerWidth = this.gameManager.p5.canvasWidth * 0.9;
        this.songViewContainerHeight = this.gameManager.p5.canvasHeight * 0.2;
        this.songViewContainerOffsetX = (this.gameManager.p5.canvasWidth - this.songViewContainerWidth) / 2.0;
        this.songViewContainerOffsetY = this.gameManager.p5.canvasHeight * 0.01;
    
    }

    windowResized() {
        this.songViewContainerWidth = this.gameManager.p5.canvasWidth * 0.9;
        this.songViewContainerHeight = this.gameManager.p5.canvasHeight * 0.2;
        this.songViewContainerOffsetX = (this.gameManager.p5.canvasWidth - this.songViewContainerWidth) / 2.0;
        this.songViewContainerOffsetY = this.gameManager.p5.canvasHeight * 0.01;
    }

    render() {
        //Border - takes top third of screen
        this.gameManager.p5.stroke(this.gameManager.lowContrast);
        this.gameManager.p5.strokeWeight(4);
        this.gameManager.p5.noFill();
        this.gameManager.p5.rect(
            this.songViewContainerOffsetX,
            this.songViewContainerOffsetY,
            this.songViewContainerWidth,
            this.songViewContainerHeight
        );

        //Timeline - takes up 80% of section

        //Playhead - where the playback currently is
    }

}