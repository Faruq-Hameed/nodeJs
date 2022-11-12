// const {getName} = require('./user')
// console.log(`User: ${getName()}`);
// const {getName,getLocation,dateOfBirth} = require('./user')

// console.log(`User: ${user.getName()}`);
// console.log([dateOfBirth, getLocation(),getName() ]);
// exports.foo = 'foo';
// module.exports.bar = 'bar';
module.exports = () => { console.log('bar'); };
exports.foo = 'foo';

console.log(module);
