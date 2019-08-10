let myUsername = "812344";
let password = 1234;

let webCheck = function(mystring){
    if (mystring.includes(123) && mystring.length >=6){
        return true
    }
    return false
}
console.log(webCheck(myUsername));
