const a =[1,2];
const b =[3,4];

console.log(a.concat(b));

const letters = ["a", "b", "c", "d"]
console.log(letters.slice(1, 3));


letters.splice(2, 1, "x"); // remove 1 item at index 2, add "x"
console.log(letters); // ["a", "b", "x", "d"]