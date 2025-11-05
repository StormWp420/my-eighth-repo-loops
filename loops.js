
function sum(n) {
    if (typeof n !== 'number' || n !== Math.floor(n)) {
        return "The value passed is not a number";
    }
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
function factorial(num) {
    if (num < 0) return "Factorial is not defined for negative numbers";
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
function funkyMath(...args) {
    if (args.length === 2) {
        return args[1] - args[0];
    } else if (args.length === 3) {
        return args.reduce((a, b) => a + b, 0);
    } else if (args.length === 4) {
        return (args[0] + args[1]) / (args[2] + args[3]);
    }
}
function removeOdds(arr) {
    const evens = [];
    const odds = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }
    }
    odds.sort((a, b) => a - b);
    return { evens, odds };
}
const me = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    favouriteColour: "blue",
    dreamCar: "Tesla"
};
me.favouriteFood = "Pizza";

delete me.age;
me.age = 31;
me.dreamCar = "Lamborghini Aventador";

console.log(me);
console.log(sum(5)); 
console.log(factorial(5));
console.log(removeOdds([1, 2, 3, 4, 5, 6])); 
console.log(factorial(-3)); 
console.log(sum("five")); 
console.log(sum(4.5)); 
console.log(factorial(6)); 
console.log(removeOdds([2, 4, 6])); 
console.log(me);
console.log(me);
console.log(me);
console.log(me);
console.log(factorial(5));
console.log(removeOdds([1, 2, 3, 4, 5, 6]));    
console.log(me);
console.log(factorial(6));
console.log(sum(5));
console.log(removeOdds([10, 15, 20, 25, 30]));

