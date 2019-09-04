// 接口
// interface person{
//     firstName:String;
//     lastName:String;
// }

// function greeter(person:person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// let user = { firstName: "Jane", lastName: "User" };

// document.body.innerHTML = greeter(user);

// 要注意的是尽管有错误，greeter.js文件还是被创建了。 就算你的代码里有错误，你仍然可以使用TypeScript。但在这种情况下，TypeScript会警告你代码可能不会按预期执行。
// 类
class Student {
    fullName:string;
    constructor(public firstName,public middleInitial,public lastName) {
        this.fullName = firstName + " " + middleInitial +" "+ lastName;
    }
}
// 还要注意的是，在构造函数的参数上使用public等同于创建了同名的成员变量。
interface Person {
    firstName:string;
    lastName:string;
}
function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName+" "+ person.fullName;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);