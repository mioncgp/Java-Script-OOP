// Creating Your Own Prototypical Inheritance
function Shape() {
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function() {
    console.log('draw');
}


const c = new Shape();
console.log(c);
