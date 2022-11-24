const ENCRYPTED_MESSAGE =
  '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101';

const PRINTABLE_ASCII_CODES_REGEX = /(12[0-6]|1[01][0-9]|[4-9][0-9]|3[2-9])|\s/g;

const message = ENCRYPTED_MESSAGE.match(PRINTABLE_ASCII_CODES_REGEX)
  .map(char => (char === ' ' ? char : String.fromCharCode(char)))
  .join('');

const submitValue = `submit ${message}`;

console.log(submitValue);
