//anonymous function

var palindrome = function(str){
    let strReverse = str.split("").reverse().join("");
    if (str === strReverse) {
        console.log("The string is a palindrome");
    } else {
        console.log("NOT a palindrome");
    }
}
let str = "civic";
palindrome(str);

  //IIFE function

(function palindrome(st){
    let strReverse = st.split("").reverse().join("");
    if (st === strReverse) {
        console.log("The string is a palindrome");
    } else {
        console.log("NOT a palindrome");
    }
})
let st = "civic";
palindrome(st);

//arrow function

var palindrome = (s) => {
    let strReverse = s.split("").reverse().join("");
    if (s === strReverse) {
        console.log("The string is a palindrome");
    } else {
        console.log("NOT a palindrome");
    }
}
let s = "civic";
palindrome(s);