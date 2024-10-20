// Anonymous Returns.

// When a function is called by itself it is bound to the global context;
// the variable of the function will be bound to the global object.this

// When the function is called on the object the value of the variable outside of the object is returned:
// getNameFunc, alpha, name, "The Window"

// We do not want this, we want the value of the property inside the object to be returned name, alpha.
// Fix so the right value is returned getNameFunc

// * * *

var name = 'The Window';

const alpha = {
    name: 'My Alpha',
    getNameFunc: function () {
        return function () {
            return this.name;
        }.bind({name: alpha.name})
    }
};

// console.log(alpha.getNameFunc().apply({name: alpha.name}))
console.log(alpha.getNameFunc()())