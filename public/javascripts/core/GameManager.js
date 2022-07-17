/** GAMEMANAGER
 *  
 *  Effective Entry Point for the application.
 * Scaffolds all components of game design
 * so that we can have a single reference
 * throughout the application.
 */

export default class GameManager {

    constructor() {
        if (GameManager.instance) {
            return GameManager.instance;
        }
        GameManager.instance = this;

        //Instance Variables
        this.instance = {}; //GameSession
        this.p5 = {}; //P5 instance
        this.canvas = {}; //P5 Canvas
        this.tone = {}; //Tone Reference

        //Important Globals: Colors
        this.backgroundColor = 0;
        this.lowContrast = '';
        this.medContrast = '';
        this.highContrast = '';
        this.maxContrast = '';
        this.white = '';
        
        //Important Globals: Tone.js params
        this.bpm = 80;
        this.totalMeasures = 16;
        this.beatsPerMeasure = 4;
        this.totalSixteenthNotes = this.totalMeasures * this.beatsPerMeasure * 16;
        this.subdivisions = 4; // Determines how big a track may be
    
    }
}