const palindromes = function (string) {
    const trimmedString = string.toLowerCase()
                                 .replace(/[&\/\\#,+()$~%.'":*?<>{}!@-\s]/g,"");
    const revString = trimmedString.split("").reverse().join("");
    return revString === trimmedString ;
};

// Do not edit below this line
module.exports = palindromes;
