const reverseString = function(string) {
    let out = ''
    for (let i = string.length; i > 0; i--){
        out = out.concat(string.slice(i-1,i))
    }
    return out
};

// Do not edit below this line
module.exports = reverseString;
