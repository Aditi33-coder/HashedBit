// Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to filter out even numbers and return only odd numbers
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);  // Keep only odd numbers
}

// Example usage
console.log(filterOddNumbers(numbers)); 