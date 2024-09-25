const sumAll = function(numOne,numTwo) {
    sum = 0;
    if(numOne<numTwo && numOne >= 0 && numTwo >= 0 && numOne == Math.floor(numOne) && numTwo == Math.floor(numTwo) && typeof(numOne) == "number" && typeof(numTwo) == "number"){
        for(let i = numOne; i <=numTwo; i++){
            sum += i;
        }
    }
    else if(numOne>numTwo && numOne >= 0 && numTwo >= 0 && numOne == Math.floor(numOne) && numTwo == Math.floor(numTwo) && typeof(numOne) == "number" && typeof(numTwo) == "number"){
        for(let i = numOne; i >=numTwo; i--){
            sum += i;
        }
    }
    else{
        sum = "ERROR";
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
