// get back the class
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, age) => {
  console.log(`data recieved ${name} with age: ${age}`);
});
customEmitter.on('response', () => {
  console.log(`some other thing`);
});

customEmitter.emit('response', 'nikson', 21);
