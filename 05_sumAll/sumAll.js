const sumAll = function(num1,num2) {
    if (!isValid(num1,num2)){
        return 'ERROR';
    }else{
        return sum(Math.max(num1,num2),Math.min(num1,num2));
    }
};

function isPositiveInteger(num) {
    if (Number.isInteger(num) && num >= 0){
        return true;
    }else{
        return false;
    }
}
function isValid(num1,num2){
    if (isPositiveInteger(num1) && isPositiveInteger(num2)){
        return 1;
    }else{
        return 0;
    }
}

function sum(large,small){
    if (large == small){
        return small;
    }else {
        return large + sum(large-1,small);
    }
}



// Do not edit below this line
module.exports = sumAll;
