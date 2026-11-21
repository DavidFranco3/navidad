// Web Audio API Holiday Sound Synthesizer
// Provides bells, chimes, and background holiday music box without external assets

let audioCtx = null;
let isMuted = false;
let musicInterval = null;
let isMusicPlaying = false;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      audioCtx = new AudioContext();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function setMuted(muted) {
  isMuted = muted;
  if (muted && isMusicPlaying) {
    stopHolidayMelody();
  }
}

export function getMuted() {
  return isMuted;
}

// Play a crystal Christmas Bell chime
export function playBell(freq = 1046.5, duration = 1.2, volume = 0.25) {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(volume, now);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  // Bell harmonics: fundamental + bell partials
  const partials = [
    { ratio: 1.0, gain: 0.7 },
    { ratio: 2.76, gain: 0.3 },
    { ratio: 5.40, gain: 0.15 },
    { ratio: 8.93, gain: 0.08 }
  ];

  partials.forEach((p) => {
    const osc = ctx.createOscillator();
    const pGain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq * p.ratio, now);

    pGain.gain.setValueAtTime(p.gain, now);
    pGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(pGain);
    pGain.connect(masterGain);

    osc.start(now);
    osc.stop(now + duration);
  });
}

// Gentle chime for ornament placement or light bulb toggle
export function playChime(pitchIndex = 0) {
  if (isMuted) return;
  // Pentatonic Christmas scale: C5, D5, E5, G5, A5, C6
  const scale = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66, 1318.51];
  const freq = scale[Math.abs(pitchIndex) % scale.length];
  playBell(freq, 0.9, 0.2);
}

// Gift unwrap magic sparkle
export function playUnwrap() {
  if (isMuted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
  notes.forEach((freq, idx) => {
    setTimeout(() => {
      playBell(freq, 0.8, 0.18);
    }, idx * 70);
  });
}

// Jingle Bells Melody for cozy music box
const JINGLE_BELLS_NOTES = [
  // E E E - E E E - E G C D E
  { note: 659.25, dur: 0.3 }, // E5
  { note: 659.25, dur: 0.3 }, // E5
  { note: 659.25, dur: 0.6 }, // E5
  { note: 659.25, dur: 0.3 }, // E5
  { note: 659.25, dur: 0.3 }, // E5
  { note: 659.25, dur: 0.6 }, // E5
  { note: 659.25, dur: 0.3 }, // E5
  { note: 783.99, dur: 0.3 }, // G5
  { note: 523.25, dur: 0.4 }, // C5
  { note: 587.33, dur: 0.2 }, // D5
  { note: 659.25, dur: 0.8 }, // E5
  // F F F F F E E E E D D E D G
  { note: 698.46, dur: 0.3 }, // F5
  { note: 698.46, dur: 0.3 }, // F5
  { note: 698.46, dur: 0.4 }, // F5
  { note: 698.46, dur: 0.2 }, // F5
  { note: 698.46, dur: 0.3 }, // F5
  { note: 659.25, dur: 0.3 }, // E5
  { note: 659.25, dur: 0.3 }, // E5
  { note: 659.25, dur: 0.2 }, // E5
  { note: 659.25, dur: 0.2 }, // E5
  { note: 783.99, dur: 0.3 }, // G5
  { note: 783.99, dur: 0.3 }, // G5
  { note: 698.46, dur: 0.3 }, // F5
  { note: 587.33, dur: 0.3 }, // D5
  { note: 523.25, dur: 0.8 }, // C5
];

export function toggleHolidayMelody(onStatusChange) {
  if (isMusicPlaying) {
    stopHolidayMelody();
    if (onStatusChange) onStatusChange(false);
    return false;
  } else {
    startHolidayMelody();
    if (onStatusChange) onStatusChange(true);
    return true;
  }
}

export function startHolidayMelody() {
  if (isMuted) setMuted(false);
  const ctx = getAudioContext();
  if (!ctx) return;
  isMusicPlaying = true;

  let noteIdx = 0;

  function scheduleNextNote() {
    if (!isMusicPlaying) return;
    const current = JINGLE_BELLS_NOTES[noteIdx];
    playBell(current.note, 0.7, 0.12);

    noteIdx = (noteIdx + 1) % JINGLE_BELLS_NOTES.length;
    const delay = current.dur * 800; // Tempo
    musicInterval = setTimeout(scheduleNextNote, delay);
  }

  scheduleNextNote();
}

export function stopHolidayMelody() {
  isMusicPlaying = false;
  if (musicInterval) {
    clearTimeout(musicInterval);
    musicInterval = null;
  }
}

export function getIsMusicPlaying() {
  return isMusicPlaying;
}
