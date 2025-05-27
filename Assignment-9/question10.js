// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to calculate the sum using reduce()
function sumArray(arr) {
    return arr.reduce((accumulator, current) => accumulator + current, 0);
}

// Example usage
console.log(sumArray(numbers));  // Output: 15