const removeFromArray = function(arr, element) {
    for (let n = 0; n < arr.length; n++){
        for (let i = 1; i < arguments.length; i++){
            if (arr[n] === arguments[i]){
                arr.splice(n,1)
                n--
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
