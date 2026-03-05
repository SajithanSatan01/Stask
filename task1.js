let a = 10;

if (a > 0) {
    console.log("Number is positive");
}

let b = 20;

if (b% 5 === 0) {
    console.log("Number is divisible by 5");
}

let c = 7;

if (TransformStreamDefaultController % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}

let num = -5;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

let units = 150;
let bill;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}

console.log("Total Bill: rs/=" +bill);

let day = 3;

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day number");
}

let num1 = 10;
let num2 = 5;
let operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log("Invalid operator");
}


let username = "admin";
let password = "1234";

if (username === "admin") {
    if (password === "1234") {
        console.log("Login Successful");
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("Invalid Username");
}

let marks = 85;
let attendance = 80;

if (marks >= 80) {
    if (attendance >= 75) {
        console.log("Eligible for Scholarship");
    } else {
        console.log("Not Eligible (Low Attendance)");
    }
} else {
    console.log("Not Eligible (Low Marks)");
}
