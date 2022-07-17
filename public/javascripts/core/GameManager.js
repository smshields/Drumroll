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

        //Important Globals
        this.backgroundColor = 0;
        this.lowContrast = '';
        this.medContrast = '';
        this.highContrast = '';
        this.maxContrast = '';
    }
}