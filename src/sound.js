const context = new AudioContext()

const oscillator = context.createOscillator()

oscillator.frequency.value = 261.0 
oscillator.type = 'sine'
oscillator.start(0);

export function play() {
  context.resume();
  oscillator.connect(context.destination)
}

export function stop() {
  oscillator.disconnect();
}