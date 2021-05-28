// printReverse()
// Write a function printReverse() that takes an array as an argument
// and prints out the elements in the array in reverse order(don't
// actually reverse the array itself)

// printReverse([1,2,3,4]);
// 4
// 3
// 2
// 1
// printReverse(["a","b","c"]);
// "c"
// "b"
// "a"

function printReverse(arr) {
    console.log(arr.reverse());

}

printReverse([1, 2, 3, 4]);
printReverse(["a ", "b", "c"]);


// write a function isUniform() which takes an array as an argument
// and returns true if all elements in the array are identical
// isUniform([1,1,1,1]); //true
// isUniform([2,1,1,1]); //false
// isUniform(["a", "b", "p"]); //false
// isUniform(["b", "b", "b"]); //true

function isUniform(array) {
    var i;
    for (i = 1; i < array.length; i++) {
        if (array[0] !== array[i]) {
            return false;
        }
    }
    return true;
}

console.log(isUniform([2, 1, 1, 1]));
console.log(isUniform([1, 1, 1, 1]));
console.log(isUniform(["a","b","p"]));
console.log(isUniform(["b","b","b"]))


// Write a function sumArray() that accepts an array of numbers and
// returns the sum of all numbers in the array

// sumArray([1,2,3]); //6
// sumArray([10,3,10,4]); //27
// sumArray([-5,100]); //95

var array = [1, 2, 3], sum = 0;
function forEach(array, arrayAdder){
    for (var i = 0; i < array.length; i ++)
    arrayAdder(array[i]) ;
}


forEach(array, function(number){
    sum += number ;
});

console.log(sum);

// Write a function max() that accepts an array of numbers and
// returns the maximum number in the array

// max([1,2,3]); //3
// max([10,3,10,4]); //10
// max([-5,100]); //100

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var max= 0;

for (i=0; i<=max;i++){
    if (array[i]>max) {
        var max=array[i];
    }
}


console.log(max);


// contains()
// Write a function contains() which takes 2 arguments: an array, and
// an element to search for. Return true is the element exists in the
// provided array

//Don't use the built-in Array.indexOf()
// contains([10,15,20], 15); //true
// contains(["hello", "bye"], "bye"); //true
// contains([10,15,20], 11); //false

function Check(A) {
    var myarr = [10, "hello",11];
    var i, j;
    var totalmatches = 0;
    for (i = 0; i < myarr.length; i++) {
        for (j = 0; j < A.length; ++j) {
            if (myarr[i] == A[j]) {

                totalmatches++;

            }

        }
    }
    if (totalmatches > 0) {
        return true;
    } else {
        return false;
    }
}
var fruits1 = new Array(10, 15);
console.log(Check(fruits1));

var fruits2 = new Array("hello", 10);
console.log(Check(fruits2));

var fruits3 = new Array(12, "bye");
console.log(Check(fruits3));


// reverse()
// Write a function reverse() that takes a single array as an argument
// and returns a reversed copy of the array

// This is similar to the earlier printReverse() except that this function
// should return an array rather than just print the elements

//Don't use the built-in Array.reverse()

function inplaceReverse(arr) {
    var i = 0;
    while (i < arr.length - 1) {
      arr.splice(i, 0, arr.pop());
      i++;
    }
    return arr;
  }
  
  var arr = [1, 2, 3];
  console.log(inplaceReverse(arr)); 
