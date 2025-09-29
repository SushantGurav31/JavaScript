const student = {
    name: "Alice",
    greet : function() {
        return "Hello I am " + this.name;
    }
};

console.log(student.greet());    // Hello, I am Alice


const car = {
    brand:"Toyota",
    greet : function() {
        return "car brand name is = " + this.brand; 
    }
};


console.log(car.greet());