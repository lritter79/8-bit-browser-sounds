exports.makeSound = function (
  frequency: number = 440,
  oscillatorType: OscillatorNode["type"] = "sine",
  duration: number = 150
) {
  if (!window.AudioContext) {
    console.warn(
      "Your browser does not support any AudioContext and cannot play sounds."
    );
    return;
  }
  if (checkInHumanRange(frequency) === false) {
    return;
  }
  const audio = new window.AudioContext();
  const gainNode = audio.createGain();
  gainNode.gain.value = 0.05;
  gainNode.connect(audio.destination);
  const oscillator = audio.createOscillator();
  oscillator.type = oscillatorType;
  oscillator.connect(gainNode);
  oscillator.frequency.value = frequency;
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
    //off by 1 millisecond in order to not trigger the set interval a fourth time and get an out of index error
  }, duration);
};

exports.makeGlissando = function (
  startFrequency: number = 440,
  endFrequency: number = 880,
  oscillatorType: OscillatorNode["type"] = "sine",
  duration: number = 150
) {
  if (!window.AudioContext) {
    console.warn(
      "Your browser does not support any AudioContext and cannot play sounds."
    );
    return;
  }
  if (
    !checkInHumanRange(startFrequency) ||
    !checkInHumanRange(endFrequency)
  ) {
    return;
  }
  const audio = new window.AudioContext();
  const gainNode = audio.createGain();
  gainNode.gain.value = 0.05;
  gainNode.connect(audio.destination);
  const oscillator = audio.createOscillator();
  oscillator.type = oscillatorType;
  oscillator.connect(gainNode);
  oscillator.frequency.value = startFrequency;
  oscillator.frequency.linearRampToValueAtTime(
    endFrequency,
    audio.currentTime + 0.15
  ); // 0.15 seconds for the glissando effect
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
    //off by 1 millisecond in order to not trigger the set interval a fourth time and get an out of index error
  }, duration);
};

exports.checkInHumanRange = function (frequency: number) {
  if (frequency < 20 || frequency > 2e4) {
    console.warn(
      "The frequency you provided is outside the human hearing range."
    );
    return false;
  }
  return true;
};

function checkInHumanRange(frequency: number) {
  if (frequency < 20 || frequency > 2e4) {
    console.warn(
      "The frequency you provided is outside the human hearing range."
    );
    return false;
  }
  return true;
}
