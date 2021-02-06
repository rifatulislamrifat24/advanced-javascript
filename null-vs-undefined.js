1st way to undefined

let pakhi;
console.log(pakhi);

2nd way to undefined.

function add (num1, num2){
    console.log(num1 + num2);
}

const result = add(13, 82);
console.log(result);

3rd way to undefined.

function add (num1, num2){
    console.log(num1 + num2);
    return
}

const result = add(13, 82);
console.log(result);

4th way to undefined.

function add (num1, num2){
    console.log(num1, num2);
    return
}

const result = add(13,);
console.log(result);

5th way to undefined.

const premik = {name: "Smart Dude", phone: 45382671};
console.log(premik.gf);

not recommended way to undefined.

let fun = undefined;
console.log(fun);