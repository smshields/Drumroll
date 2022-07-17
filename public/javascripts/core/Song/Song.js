/** SONG
 *  
 *  Song to be built and played during gameplay
 * 
 */
 import GameManager from '../GameManager.js';

 export default class Song {

  constructor() {
    //Instance Variables
    this.tracks = []

    //Constants
  }

  addTrack(track) {
    this.tracks.push(track);
    track.sequence.start(this.convertPositionToStart(track.position));
  }

  convertPositionToStart(position) {
    let positionInSixteenthNotes =  position * (GameManager.instance.totalSixteenthNotes / GameManager.instance.subdivisions);
    let quarterNotePosition = Math.floor(positionInSixteenthNotes / 16)
    const sixteenthNotePosition = positionInSixteenthNotes % 16;
    return `0:${quarterNotePosition}:${sixteenthNotePosition}`;
  }
  
}