// Function to add and remove an element from an array
function modifyArray(arr) {
    arr.push("New Element");  // Adds a new element to the end of the array
    arr.pop();  // Removes the last element from the array
    return arr;  // Returns the modified array
}

// Example usage
const fruits = ["Apple", "Banana", "Cherry"];
console.log(modifyArray(fruits));  