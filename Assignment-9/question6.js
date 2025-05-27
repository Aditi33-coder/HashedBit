// Object representing a person
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};

// Function to log a greeting message using person properties
function greetPerson(person) {
    console.log(
        `Hello, my name is ${person.name}. I am ${person.age} years old, and I work as a ${person.occupation}.`
    );
}

// Example usage
greetPerson(person);  
