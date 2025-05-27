// Function to return an array of keys from an object
function getObjectKeys(obj) {
    return Object.keys(obj);
}

// Example usage
const person = {
    name: "Alice",
    age: 25,
    occupation: "Engineer",
    country: "USA"
};

console.log(getObjectKeys(person));  
