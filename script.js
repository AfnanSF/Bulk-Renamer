// const obj = {
//     name: "Afnan",
//     proffession: "Full Stack Developer",
//     Skill: "Extreme"
// };

//  const {name, proffession} = obj;

// console.log(name, proffession);

// const arr = [1, 2, 3, "afnan"];
// const objArr = { ...arr };
// console.log(objArr);

// const sum = (v1, v2, v3) => {
//     return v1 + v2 + v3;
// }

// const ans = sum(...arr);
// console.log(ans);

// console.log({ ...obj, name: "John Carmack", proffession: "Game Developer" });
let messsage = "Good Global"
function hello1() {
    let messsage = "Good morning"

    // let messsage = "Good Afternoon"
    console.log("Hello1 " + messsage)

    console.log(messsage);
    let c = function hello2() {
        console.log("I am c" + messsage)
    }
    return c;
}
// hello1();
c = hello1();
c()
// console.log(messsage);