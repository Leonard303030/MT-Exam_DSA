//Favorite Number Calculation

// favorite_number.js
// This program calculates the square, cube, and double of the user's favorite number.

function favoriteNumberOperations(num) {
    /* Returns an object containing the square, cube, and double of the given number */
    return {
        square: num ** 2,
        cube: num ** 3,
        double: num * 2
    };
}

// Get the user's favorite number and perform calculations
let num = parseInt(prompt("Enter your favorite number:"));
let results = favoriteNumberOperations(num);

// Display results
console.log(`Square: ${results.square}, Cube: ${results.cube}, Double: ${results.double}`);