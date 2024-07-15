let num=23;
let string="abhishek";
let bool = true;
let abhishek={
    age:23,
    college:"mit"
}
let arr = [20,30,30,20,10];
console.log(`
    ${num}==>${typeof(num)},
    ${string}==>${typeof(string)},
    ${bool}==>${typeof(bool)},
    ${abhishek.age}==>${typeof(abhishek)},
    ${Object.keys(abhishek).map((key)=>`${key} : ${abhishek[key]}`)} ==>${typeof(abhishek)}
    `);
