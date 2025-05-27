function scopeDemo() {
    if (true) {
        var varVariable = "I am a var variable";  // Function-scoped
        let letVariable = "I am a let variable";  // Block-scoped
        const constVariable = "I am a const variable";  // Block-scoped
    }

    console.log(varVariable);  
}
scopeDemo();

/*Scope Differences

1. var (Function Scope)
Scope: Variables declared with var are scoped to the function in which they are declared, not the block.
Hoisting: They are hoisted to the top of the function (initialized with undefined).
Re-declaration: Allowed within the same scope. Example: In the above code, varVariable is accessible outside the if block because it is function-scoped.

2. let (Block Scope)
Scope: Variables declared with let are scoped to the block (e.g., inside an if, for loop).
Hoisting: They are hoisted but not initialized (cannot be accessed before declaration).
Re-declaration: Not allowed within the same block scope. Example: letVariable is only available within the if block. Trying to access it outside results in an error.

3. const (Block Scope and Immutable)
Scope: Same block scope behavior as let. Hoisting: Similar to let, const is hoisted but not initialized.
Immutability: The value assigned to a const variable cannot be re-assigned.
Re-declaration: Not allowed within the same block scope. Example: constVariable is block-scoped, just like letVariable. Attempting to access it outside the if block results in an error.
*/