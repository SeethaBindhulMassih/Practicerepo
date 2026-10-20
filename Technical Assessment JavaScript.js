// Technical Assessment JavaScript

// Question 1: Arrays

// 1. Find the largest number
const numbers = [10, 25, 30, 15, 40, 5];
const largest = Math.max(...numbers);
console.log(largest);

// 2. Find the smallest number
const numbers1 = [10, 25, 30, 15, 40, 5];
let smallest = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {
    if (numbers1[i] < smallest) {
        smallest = numbers1[i];
    }
}
console.log(smallest);

// 3. Calculate the sum of all numbers
const numbers2 = [10, 25, 30, 15, 40, 5];
let sum = 0;

for (let i = 0; i < numbers2.length; i++) {
    sum = sum + numbers2[i];
}
console.log(sum);

// 4. Create a new array containing numbers greater than 20
const numbers3 = [10, 25, 30, 15, 40, 5];
const newArray1 = [];

for (let i = 0; i < numbers3.length; i++) {
    if (numbers3[i] > 20) {
        newArray1.push(numbers3[i]);
    }
}
console.log(newArray1);

// 5. Reverse the array without modifying the original array
const numbers4 = [10, 25, 30, 15, 40, 5];
const reversedArray = [...numbers4].reverse();
console.log(reversedArray);


// Question 2: Objects

const employees = [
    { id: 1, name: "Arun", salary: 25000, department: "IT" },
    { id: 2, name: "Priya", salary: 35000, department: "HR" },
    { id: 3, name: "Kumar", salary: 45000, department: "IT" },
    { id: 4, name: "Divya", salary: 30000, department: "IT" }
];

// 6. Find the employee whose ID is 3
const employee = employees.find(emp => emp.id === 3);
console.log(employee);

// 7. Get all employees working in the IT department
const itEmployees = employees.filter(emp => emp.department === "IT");
console.log(itEmployees);

// 8. Calculate the total salary of all employees
let sum1 = 0;

employees.forEach(employee => {
    sum1 = sum1 + employee.salary;
});
console.log(sum1);

// 9. Find the employee with the highest salary
const highestSalary = employees.reduce((highest, emp) => {
    if (emp.salary > highest.salary) {
        return emp;
    }
    return highest;
});
console.log(highestSalary);

// 10. Create a new array containing only employee names
const newArray = employees.map(emp => emp.name);
console.log(newArray);


// Question 3: Functions

// 11, 12, 13. Calculate total with default discount 
function calculateTotal(price, quantity, discountPercentage = 0) {
    if (price < 0 || quantity < 0) {
        console.log("Price and quantity cannot be negative");
        return;
    }

    if (discountPercentage < 0 || discountPercentage > 100) {
        console.log("Discount must be between 0 and 100");
        return;
    }

    let pay = price * quantity;
    let discount = pay * discountPercentage / 100;

    return pay - discount;
}

console.log(calculateTotal(1000, 2, 10));
console.log(calculateTotal(1000, 2));
console.log(calculateTotal(1000, -2));
console.log(calculateTotal(1000, 2, 110));

// 14. Regular function or arrow function I would use a regular function because I find it easier to understand.


// Question 4: Array Methods

const products = [
    { id: 1, name: "Laptop", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", price: 500, stock: 0 },
    { id: 3, name: "Keyboard", price: 1500, stock: 10 },
    { id: 4, name: "Monitor", price: 12000, stock: 3 },
    { id: 5, name: "USB Cable", price: 200, stock: 20 }
];

// 15. Find products currently in stock
const stock = products.filter(product => product.stock > 0);
console.log(stock);

// 16. Create an array of product names
const array = products.map(product => product.name);
console.log(array);

// 17. Calculate the total inventory value
const inventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.stock);
}, 0);
console.log(inventoryValue);

// 18. Find the product with ID 3
const id = products.find(product => product.id === 3);
console.log(id);

// 19. Check whether any product costs more than ₹40,000
const rate = products.some(product => product.price > 40000);
console.log(rate);

// 20. Check whether all products have a non-negative price
const rate1 = products.every(product => product.price >= 0);
console.log(rate1);


// Question 5: Promises

// 21. Call getUser() and print the returned user
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Arun" });
        }, 1000);
    });
}

getUser()
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.log(error);
    });

// 22. Handle a rejected promise using catch()
function getUser1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Failed: no user");
        }, 1000);
    });
}

getUser1()
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.log(error);
    });

// 23. Use then() to access the user's name
function getUser2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Arun" });
        }, 1000);
    });
}

getUser2().then(user => {
    console.log(user.name);
});

// 24. Access the returned user immediately without waiting
console.log(getUser());


// Question 6: Async/Await

function getUser3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Arun" });
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve, reject) => {
        resolve([
            { id: 101, amount: 1500 },
            { id: 102, amount: 2500 }
        ]);
    });
}

// 25, 26, 27, 28. Get user, print name, handle errors, and print orders
async function displayUser() {
    try {
        const user = await getUser3();
        console.log(user.name);

        const orders = await getOrders(user.id);
        console.log(orders);
    } catch (error) {
        console.log(error);
    }
}

displayUser();


// Question 7: Closures

// 29, 30, 31. Increase count and maintain independent counters
function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterA());
console.log(counterB());


// Question 8: Error Handling

// 32, 33, 34, 35, 36. Parse JSON, validate name, and handle errors
function parseUser(jsonString) {
    try {
        const user = JSON.parse(jsonString);

        if (typeof user.name !== "string" || user.name.trim() === "") {
            throw new Error("Name is missing or invalid");
        }

        return user;
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new Error("Invalid JSON");
        }

        throw error;
    }
}


const testInputs = [
    '{"name":"Arun","age":25}',
    '{"age":25}',
    'invalid json',
    '{"name":""}'
];

for (let i = 0; i < testInputs.length; i++) {
    try {
        console.log(parseUser(testInputs[i]));
    } catch (error) {
        console.log("Error:", error.message);
    }
}
