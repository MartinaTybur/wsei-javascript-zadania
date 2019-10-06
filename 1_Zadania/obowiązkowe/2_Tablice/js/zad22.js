function distFromAvarage (numberArray) {
    var average = 0; 
    numberArray.forEach (element => {
        average += element; 
    });
    average = average / numberArray.length;
    console.log(average);
    var returnArray = [];
    numberArray.forEach (element => {
        returnArray.push(element - average);

    });
    console.log(returnArray);
    return returnArray;
}
distFromAvarage([1,2,3,4,5,6,7])