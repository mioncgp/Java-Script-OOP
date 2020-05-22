`Lesson #1`
// Duplicate objects with object literal syntax is an issue only if that object has  behaviour/methods cuz it can result in bugs
// Factory functions simply functions that create objects and return them

// Factory function
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}


`Lesson #2`
// Construction function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}


// the first letter in a constructor function should be uppercase
// "This" keyword is basiclly a reference to the object that executing the code inside of it


`Lesson #3`
//Functions are objects
// Every object in JS has a constructor property and that references the function that was used to create that object
// "new" operator will create an empty object and pass it as the first argument

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const another = new Circle(1);

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
`)

