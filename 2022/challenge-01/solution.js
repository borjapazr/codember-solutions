import { readFile } from 'node:fs/promises';

const REQUIRED_FIELDS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll'];

const rawData = await readFile('2022/challenge-01/users.txt', 'utf8');

const users = rawData
  .split('\n\n')
  .map(plainUser => plainUser.replaceAll('\n', ' ').split(' '))
  .map(rawUsers => Object.fromEntries(rawUsers.map(rawUser => rawUser.split(':'))));

const validUsers = users.filter(user => REQUIRED_FIELDS.every(field => field in user));

const submitValue = `submit ${validUsers.length}${validUsers.at(-1).usr}`;

console.log(submitValue);
