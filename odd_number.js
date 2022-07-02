//anonymous function

var odd = function(a){
    for(let i=0;i<a.length;i++){
        if(a[i]%2!=0){
            console.log(a[i]);
        }
    }
}
var a = [1,2,5,6,3,2];
odd(a);

//IIFE function

(function odd(a){
    for(let i=0;i<a.length;i++){
        if(a[i]%2!=0){
            console.log(a[i]);
        }
    }
})
var a = [1,2,5,6,3,2];
odd(a);

//arrow function

var odd = (a) => {
    for(let i=0;i<a.length;i++){
        if(a[i]%2!=0){
            console.log(a[i]);
        }
    }
}
var a = [1,2,5,6,3,2];
odd(a);