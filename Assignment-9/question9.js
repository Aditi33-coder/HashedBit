// Function to merge two objects into one
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

// Example usage
const personInfo = { name: "Alice", age: 25 };
const jobInfo = { occupation: "Engineer", country: "USA" };

const mergedObject = mergeObjects(personInfo, jobInfo);
console.log(mergedObject);  