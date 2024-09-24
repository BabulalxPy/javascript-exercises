//my solution incomplete
//const removeFromArray = function(array, ...args) {
  //  args.forEach((arg) =>{
    //    uniq = array.filter((item, index) => array.indexOf(item) === index);
      //  let index = uniq.indexOf(arg);
        //if(index > -1){
      //  uniq.splice(index,1);
        //}
    //});
    
    //return uniq;
//};
//console.log(removeFromArray([1,4,,3,4,4,5],5,4))
// Do not edit below this line
//module.exports = removeFromArray;

const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };
  module.exports = removeFromArray;
