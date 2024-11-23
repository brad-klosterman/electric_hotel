// Original synth melody pattern in MIDI format
const synth_pattern = [
  {note: 'E4', time: '0:0:0', duration: '0:0:2'},
  {note: 'G4', time: '0:0:2', duration: '0:0:2'},
  {note: 'A4', time: '0:1:0', duration: '0:0:4'},
  {note: 'G4', time: '0:1:2', duration: '0:0:2'},
  {note: 'E4', time: '0:2:0', duration: '0:0:4'},
  {note: 'D4', time: '0:2:2', duration: '0:0:2'},
  {note: 'E4', time: '0:3:0', duration: '0:1:0'}
];

// Suggested synth parameters
const synthSettings = {
  oscillator: {
    type: 'square8'  // Rich, retro-style waveform
  },
  envelope: {
    attack: 0.02,
    decay: 0.1,
    sustain: 0.3,
    release: 0.8
  }
};
