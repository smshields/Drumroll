import GameManager from "./../GameManager.js";
/** Controls song rendering in the display.
 * 
 * MVP: 33% of screen, 16 segment bar, cursor that follows the pattern of song data structure
 * */
export default class SongView {

    constructor() {
        this.gameManager = GameManager.instance;

        //Border Rendering
        this.songViewContainerWidth = this.gameManager.p5.canvasWidth * 0.9;
        this.songViewContainerHeight = this.gameManager.p5.canvasHeight * 0.2;
        this.songViewContainerOffsetX = (this.gameManager.p5.canvasWidth - this.songViewContainerWidth) / 2.0;
        this.songViewContainerOffsetY = this.gameManager.p5.canvasHeight * 0.01;

        //Playhead Constraints
        this.playHeadWidth = this.songViewContainerWidth * .9;
        this.playHeadStartX = (this.gameManager.p5.canvasWidth - this.playHeadWidth) / 2.0;
        this.playHeadStartY = this.playHeadEndY = this.songViewContainerOffsetY + (this.songViewContainerHeight/2.0);
        this.playHeadEndX = this.playHeadStartX + this.playHeadWidth;
    
    }

    windowResized() {
        //Border Rendering
        this.songViewContainerWidth = this.gameManager.p5.canvasWidth * 0.9;
        this.songViewContainerHeight = this.gameManager.p5.canvasHeight * 0.2;
        this.songViewContainerOffsetX = (this.gameManager.p5.canvasWidth - this.songViewContainerWidth) / 2.0;
        this.songViewContainerOffsetY = this.gameManager.p5.canvasHeight * 0.01;
        //Playhead Constraints
        this.playHeadWidth = this.songViewContainerWidth * .9;
        this.playHeadStartX = (this.gameManager.p5.canvasWidth - this.playHeadWidth) / 2.0;
        this.playHeadStartY = this.playHeadEndY = this.songViewContainerOffsetY + (this.songViewContainerHeight / 2.0);
        this.playHeadEndX = this.playHeadStartX + this.playHeadWidth;
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

        //Playhead - timeline - takes up 90% of section
        this.gameManager.p5.stroke(this.gameManager.white);
        this.gameManager.p5.strokeWeight(2);
        this.gameManager.p5.line(this.playHeadStartX, this.playHeadStartY, this.playHeadEndX, this.playHeadEndY);

        //Playhead - where the playback currently is
    }

}