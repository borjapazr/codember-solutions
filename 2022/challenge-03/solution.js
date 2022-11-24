import { COLORS } from './colors.js';

const longestColorAlternation = COLORS.reduce(
  (accumulator, currentColor, index, colors) => {
    const nextColor = colors[index + 1];
    const previousColor = colors[index - 1];

    if (currentColor === nextColor) {
      accumulator.currentSize = 1;
      return accumulator;
    }

    if (nextColor !== previousColor) {
      accumulator.currentSize = 2;
      return accumulator;
    }

    accumulator.currentSize += 1;

    if (accumulator.currentSize >= accumulator.maximumSize) {
      accumulator.maximumSize = accumulator.currentSize;
      accumulator.lastColor = colors[index - 1];
    }

    return accumulator;
  },
  { maximumSize: 0, currentSize: 0, lastColor: '' }
);

const submitValue = `submit ${longestColorAlternation.maximumSize}@${longestColorAlternation.lastColor}`;

console.log(submitValue);
