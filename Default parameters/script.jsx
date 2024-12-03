// in case of default pararmeters,we need to give default parameter,we will get the result 
// even if we return the function with no parameters


function rolldie(noOfSide =6){
    return Math.floor(Math.random() * noOfSide) +1;

}