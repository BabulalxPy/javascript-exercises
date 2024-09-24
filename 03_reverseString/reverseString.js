const reverseString = function(word) {
    let string = "";
    for(var i = word.length-1;i>=0;i--){
        string += word[i];
    }
    return string;
    //optional method: 
    //string = word.split("").reverse().join("");
    //return string;
};


// Do not edit below this line
module.exports = reverseString;
