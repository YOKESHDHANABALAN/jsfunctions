//anonymous function

var sum_array = function(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum += array[i];
    }
    console.log(sum);
}
var array = [1,2,3,4,5];
sum_array(array);

//IIFE function

(function sum_array(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum += array[i];
    }
    console.log(sum);
})
var array = [1,2,3,4,5];
sum_array(array);

//arrow function

var sum_array = (array) => {
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum += array[i];
    }
    console.log(sum);
}
var array = [1,2,3,4,5];
sum_array(array);