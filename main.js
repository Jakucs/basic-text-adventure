import promptSync from 'prompt-sync';
const prompt = promptSync({sigint: true});

const answer = prompt('Please, give me a number between 1 and 10: ');
console.log(`Your number is: ${answer}`);
