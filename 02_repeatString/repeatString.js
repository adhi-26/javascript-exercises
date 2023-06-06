const repeatString = function(string,num) {
    let copy = string;
    if (num<0) {
        return "ERROR";
    }else if (num==0) {
        return '';
    }
    for (i=1;i<num;i++) {
        string = string.concat(copy);
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
