const f = function(){
    console.log('Hello world from module1 f')
}

const x = function(){
    console.log('Hello world from module1 y')
}

const getName = () => {
    return 'Jim';
  };
  
  const getLocation = () => {
    return 'Munich';
  };
  
  const dateOfBirth = '12.01.1982';
  
  exports.getName = getName;
  exports.getLocation = getLocation;
  exports.dob = dateOfBirth;

module.exports= {f}