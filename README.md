# 8 Bit Browser Sounds Package

8 Bit Browser Sounds is a simple npm package designed to generate sound and glissando effects using the Web Audio API. It provides easy-to-use functions for creating pure tones and frequency sweeps, suitable for a variety of applications including testing, audio generation, and learning purposes.

## Installation

To install the package, use npm:

```bash
npm install 8-bit-browser-sounds
```

## Usage

Use wherever you want to add an 8 bit sound in your web app.

### Functions

#### makeSound

Generates a sound with a specified frequency, oscillator type, and duration.

**Parameters:**

- `frequency` (number, default = 440): The frequency of the sound in Hz.
- `oscillatorType` (OscillatorNode["type"], default = "sine"): The type of oscillator (e.g., "sine", "square", "sawtooth", "triangle").
- `duration` (number, default = 150): The duration of the sound in milliseconds.

**Example:**

```javascript
makeSound(440, "sine", 500);
```

#### makeGlissando

Generates a glissando (frequency sweep) effect from a start frequency to an end frequency over a specified duration.

**Parameters:**

- `startFrequency` (number, default = 440): The starting frequency of the glissando in Hz.
- `endFrequency` (number, default = 880): The ending frequency of the glissando in Hz.
- `oscillatorType` (OscillatorNode["type"], default = "sine"): The type of oscillator.
- `duration` (number, default = 150): The duration of the glissando in milliseconds.

**Example:**

```javascript
makeGlissando(440, 880, "sine", 500);
```

#### checkInHumanRange

Checks if a given frequency is within the human hearing range (20 Hz to 20,000 Hz).

**Parameters:**

- `frequency` (number): The frequency to check in Hz.

**Returns:**

- `boolean`: `true` if the frequency is within the human hearing range, otherwise `false`.

**Example:**

```javascript
const isInHumanRange = checkInHumanRange(440);
console.log(isInHumanRange); // true
```

## Browser Compatibility

Please note that this package relies on the Web Audio API, which may not be supported in all browsers. If the Web Audio API is not supported, a warning will be logged to the console.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This package is licensed under the MIT License. See the LICENSE file for details.

---

This README provides an overview of the package and its usage. For more detailed examples and documentation, please refer to the source code and comments within the package.
