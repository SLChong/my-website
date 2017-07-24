

let pen = 1;
let apple = 2;
let result = pen + apple;
let ali = 'ali';
let ahmad = 'ahmad';

result = result + 3;

result = result + ali

//console.log(ali + ' ' + ahmad)

console.log(ali + ' ' + ahmad)
console.log(result)
console.log(4)
console.log('Today')

function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

pen = 1;
apple = 2;

result = add(pen, apple);

console.log(result);
console.log(minus(3, 4));
console.log(multiply(5, 6));
console.log(multiply(7, 9));
console.log(divide(7, 8));

console.log(add('ali', 'ahmad'));

function doSomething(para1, para2, para3, para4) {
    //resultA= para1+para2 = 3
    let smallResultA = add(para1, para2);

    //resultB= para3-para4 = -1
    let smallResultB = minus(para3, para4);

    //return resultA*resultB = -3
    return multiply(smallResultA, smallResultB);
}

let something = doSomething(1, 2, 3, 4);
console.log(something);

function tellmeJoke() {
    let joke = 'I am a boy';

    console.log(joke);
}

let somethingElse = tellmeJoke();
console.log(somethingElse);

function greetHello() {
    alert('hello world!');
}

//if someone enter 0, please alert "hello world"
//if someone enter 1, please alert "bye bye"
function greeting2(num) {
    if (num == 0) {
        alert('hello world');
    } else {
        alert('bye bye');
    }
}

//function isEvenOrOdd(num)}
// please detect the num whether even or odd
//write your logic here

isEvenOrOdd(2); //even
isEvenOrOdd(7); // odd

function isEvenOrOdd(num) {
    if (3 % 2 == 1) {
        alert('odd');
    } else {
        alert('even');
    }
}

function isEvenOrOdd(num) {
    let remainder = num % 2;

    if (remainder == 0) {
        console.log('even');
    } else {
        console.log('odd');
    }

}

//object
let human = {
    name: 'Sally',
    age: 20,
    food: 'udon'
};

console.log(human);
console.log(human.name);
console.log(human.age);
console.log(human.food);

function createNewHuman(name, age, food) {
    let human = {
        name: name,
        age: age,
        food: food,

        // function inside object
        talk: function () {
            return 'hello my name is ' + name + ' ' + 'and my age is' + ' ' + age;
        },

        tellmefood: function () {
            return 'my favourite food is' + ' ' + food;
        }
    };
    return human;
}

let Sally = createNewHuman('Sally', 20, 'udon');
let John = createNewHuman('John', 19, 'noodles');
let Captain = createNewHuman('Captain', 100, 'steak');

console.log(Sally);
console.log(John.talk());
console.log(Captain.talk());
console.log(Captain.tellmefood());

let sandra = 'sandra';
console.log(sandra.toUpperCase());

// add in javascript
document
    .getElementById('human')
    .append('i am Sally');

function login() {
    // get username
    let username = document
        .getElementById('usr')
        .value;


    //get password
    let password = document
        .getElementById('pwd')
        .value;

    console.log(username);
    console.log(password);

    //verify username is sally
    //verify password is 1234

    //if match, alert login successful
    //if not, alert login fail

    if (username == 'sally' && password == '1234') {
        if (password == '1234') {
            alert('login successful');
        }
    } else {
        alert('login fail');
    }

    //success (testing scenarios no.1):
    //sally, 1234 -- pass

    //fail (testing scenarios no. 1):
    //test, abc -- pass
    //sally, abc --pass
    //test, 1234-- pass




    let isSally = username == 'sally' && password == '1234';
    let isJohn = username == 'john' && password == 'abc';


    if (isSally || isJohn) {
        alert('login successful');
    } else {
        alert('login fail');
    }

    //john, abc
    //or
    //sally, 1234
    //login successful


    //fail (testing scenarios no. 2):
    //totally wrong: test, 1234
    //match name only: sally, 111
    //match name only: john, 222
    //match password only: test, 1234
    //match password only: test, abc
    //user with wrong password: sally, abc
    //user with wrong password: sally, abc
}


//array
let fruits = ['apple', 'orange', 'durian'];

// how many fruits are there
console.log(fruits.length);

// what basket is the orange in?
console.log(fruits[1]);

// array always start with 0
console.log(fruits[0]);

//array
fruits = ['apple', 'orange', 'durian'];
let random = ['apple', 1, true, false];
let students = [
    { name: 'Mike', age: 12 },
    { name: 'Mickey', age: 14 },
];

console.log(fruits);
console.log(random[0]);
console.log(students[1].age);
console.log(random.length);

students = [
    { name: 'Mike', age: 12, score: 50 },
    { name: 'Mickey', age: 14, score: 84 },
    { name: 'Bryan', age: 14, score: 20 },
    { name: 'John', age: 14, score: 52 }
];

//who passed the exam?
//passing score of 51 and above

function isPassing(marks) {
    if (marks > 50) {
        console.log('pass');
    } else {
        console.log('fail');
    }
}

//checking if student pass or fail:-

//manual way of calculation:

isPassing(students[0].score);
isPassing(students[1].score);
isPassing(students[2].score);
isPassing(students[3].score);

//faster way of calculation (the 'element' is the student):

students.forEach(function (student) {
    console.log(student.name);
    isPassing(student.score);
});

