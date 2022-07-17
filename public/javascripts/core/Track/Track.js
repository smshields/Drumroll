/** TRACK
 *  
 * A unit of music, composed by the player.
 * Multiple tracks make up a song.
 *
 */
import GameManager from '../GameManager.js';

export default class Track {

  constructor(sequenceArray, position, sampler) {
    //Constants
    this.SEQUENCE_UNIT = "16n" // sequence are arrays of sixteenth notes
    this.DURATION = "16n" // how long to play each note of a sequence

    //Instance Variables
    if (!Array.isArray(sequenceArray) || sequenceArray.length !== GameManager.instance.totalSixteenthNotes / GameManager.instance.subdivisions) {
      throw new Error(`Expected sequenceArray argument to be an array of length ${GameManager.instance.totalSixteenthNotes / GameManager.instance.subdivisions}.`)
    }
    this.sequenceArray = sequenceArray;

    if (position >= GameManager.subdivisions) {
      throw new Error(`Expected position argument to be between 0 and ${GameManager.instance.subdivisions - 1}, inclusive.`)
    }
    this.position = position

    // TODO: Tone.Sequence or gameManager.tone.Sequence?
    this.sequence = new Tone.Sequence((time, note) => {
      sampler.triggerAttackRelease(note, this.DURATION, time);
    }, this.sequenceArray, this.SEQUENCE_UNIT);
  }



}