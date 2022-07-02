//anonymous function

var prime = function(a){
    for(let i=0;i<a.length;i++){
        if(a[i]%2==0){
            console.log(a[i]);
        }
    }
}
var a = [1,2,5,6,3,2];
prime(a);

  //IIFE function

(function prime(a){
    for(let i=0;i<a.length;i++){
        if(a[i]%2==0){
            console.log(a[i]);
        }
    }
})
var a = [1,2,5,6,3,2];
prime(a);

//arrow function

var prime = (a) => {
    for(let i=0;i<a.length;i++){
        if(a[i]%2==0){
            console.log(a[i]);
        }
    }
}
var a = [1,2,5,6,3,2];
prime(a);