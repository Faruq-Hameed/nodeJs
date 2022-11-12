// const mod = require('./module')
// mod.f()
const y = require('../module2/faruq')
// y()
// exports.log = function () {
//   process.stdIn.write(format.apply(this, arguments) + '\n');
// }

const user = require('./module');
console.log(
  `${user.getName()} lives in ${user.getLocation()} and was born on ${user.dob}.`
);