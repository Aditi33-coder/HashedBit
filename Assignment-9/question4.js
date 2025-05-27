// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to return a new array with squared numbers
function squareNumbers(arr) {
    return arr.map(num => num * num);  // Squares each number using map()
}

// Example usage
console.log(squareNumbers(numbers));  