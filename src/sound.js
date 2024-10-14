const context = new AudioContext()
const o = context.createOscillator()
o.frequency.value = 600.0 
o.type = 'sine'
const g = context.createGain()
o.connect(g)
g.connect(context.destination)
g.gain.value = 0;

const DOT_DURATION = 100;
const DASH_DURATION = 300;

const SYMBOL_GAP = 100;
const LETTER_GAP = 300;
const WORD_GAP = 700;

let isPlaying = false;
export function play(text) {
  if (isPlaying) return;

  try {
    o.start(0);
  } catch (e) {
    context.resume();
  }

  isPlaying = true;
  let time = context.currentTime;
  let totalTime = 0;
  [...text].forEach((symbol) => {
      if (symbol == " ")
        time += LETTER_GAP / 1000
      else if (symbol == "/")
        time += WORD_GAP / 1000
      else {
        const duration = symbol === '.' ? DOT_DURATION : DASH_DURATION;

        // Start sound
        g.gain.setValueAtTime(1, time);
        time += duration / 1000; // Symbol duration

        // Stop sound (silence between symbols)
        g.gain.setValueAtTime(0, time);
        time += SYMBOL_GAP / 1000;
      }
    });

  totalTime = time - context.currentTime;
  setTimeout(() => {
    stop();
    console.log("stopped")
  }, totalTime * 1000);

  return totalTime
}

export function stop() {
  isPlaying = false;
  g.gain.cancelScheduledValues(context.currentTime);
  context.suspend()
}