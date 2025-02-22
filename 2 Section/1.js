// `Lesson #1`
// Duplicate objects with object literal syntax is an issue only if that object has  behaviour/methods cuz it can result in bugs
// Factory functions simply functions that create objects and return them

// Factory function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     }
// }


// `Lesson #2`
// Construction function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }


// the first letter in a constructor function should be uppercase
// "This" keyword is basiclly a reference to the object that executing the code inside of it


// `Lesson #3`
//Functions are objects
// Every object in JS has a constructor property and that references the function that was used to create that object
// "new" operator will create an empty object and pass it as the first argument

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const another = new Circle(1);

// const Circle1 = new Function('radius', `
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// `)

// `Lesson #4`
// In js we have 2 value types 
// - 1 reference // Objects are copied by their reference
// - 2 primitive // Primitives are copied by their value

// `Lesson #5`
// Closures and privite variables
// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0}; // this is private variable
//     let computerOptimumLocation = function(factor) { // private func
//         //...
//     }
//     this.draw = function() {
//         let x, y;
//         console.log('draw');
//     }
// }

// Lesson #6
// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0}; // this is private variable
//     this.getDefaultLocation = function() {
//         return defaultLocation;
//     }
//     this.draw = function() {
//         console.log('draw');
//     }

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() { // now we can read a privite provery from the outsite = getter
//             return defaultLocation;
//         },
//         set: function(value) {
//             if(!value.x || !value.y) {
//                 throw new Error('Invalid lol');
//             }
//             defaultLocation = value;
//         }
//     });
// }

function Watch() {
    let startTime, stopTime, running, duration = 0;

    this.start = function() {
        if(running) {
            throw new Error('Watch has already started.');
        }
        running = true;
        startTime = new Date();

    }

    this.stop = function() {
        if(!running) {
            throw new Error('Watch has already stopped.');
        }
        running = false;
        stopTime = new Date();
        const seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }

    this.reset = function() {
        startTime = null,
        stopTime = null,
        running = null,
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}

