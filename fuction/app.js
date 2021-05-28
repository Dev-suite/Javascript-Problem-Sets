// Write a function isEven() which takes a single numeric argument
// and returns true if the number is even, and false otherwise
// isEven(4); //true
// isEven(21); //false
// isEven(68); //true
// isEven(333); //false
// EVEN NUMBER
function isEven(num) {
    if (num % 2 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }

}
isEven(4);
isEven(21);
isEven(68);
isEven(333);

// write a function factorial() which takes a single numeric argument
// and returns the factorial of that number
// factorial(5); //120
// factorial(2); //2
// factorial(10); //3628800
// factorial(0); //1




function factorial(x) {

    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);

}
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));


function kebabToSnake(str) {
    var myString = str.replace(/-/g, "_");
    return myString;
}


console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"))