const events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('carrot', function() {
console.log('A carrot is boiling!');
});
eventEmitter.emit('carrot');