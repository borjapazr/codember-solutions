const passwords = [];

const MIN_NUMBER = 11098;
const MAX_NUMBER = 98123;

for (let number = MIN_NUMBER; number <= MAX_NUMBER; number++) {
  const numberString = number.toString();
  if (numberString.includes('55') && [...numberString].sort().join('') === numberString) {
    passwords.push(number);
  }
}

const submitValue = `submit ${passwords.length}-${passwords[55]}`;

console.log(submitValue);
