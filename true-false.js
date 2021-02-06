// ' ', '0', [], {}, number > 0, is truthy value.

// const name = ""; (falsy value)
// const age = 0; (falsy value)
// without value it's call "undefined" and it is falsy value.
// null is falsy value.
// NaN is falsy value.

let name = 12;

if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}