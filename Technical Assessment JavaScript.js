#Technical Assessment JavaScript

#largestNumber
const numbers=[10,25,30,15,40,5]
const largest=Math.max(...numbers)
console.log(largest)

#smallestNumber
   const numbers=[10,25,30,15,40,5]
    let smallest=numbers[0]
    for(let i=1;i<numbers.length;i++){
        if(numbers[i]<smallest){
            smallest=numbers[i]
        }
    }
    console.log(smallest)
#sumOfNumbers
const numbers=[10,25,30,15,40,5]
let sum=0;
for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i]
}
console.log(sum)

#newArraywithNumbersGreaterthan20
const numbers=[10,25,30,15,40,5]
const Array =[]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>20){
        Array.push(numbers[i])
    }
}
console.log(Array)

#reverseArray
const numbers=[10,25,30,15,40,5]
numbers.reverse()
console.log(numbers)

#employeeid3
const employees = [
  { id: 1, name: "Arun", salary: 25000, department: "IT" },
  { id: 2, name: "Priya", salary: 35000, department: "HR" },
  { id: 3, name: "Kumar", salary: 45000, department: "IT" },
  { id: 4, name: "Divya", salary: 30000, department: "IT" },
];
const employee=employees.find(emp => emp.id === 3)
console.log(employee)
#employeesatIT
const employees = [
  { id: 1, name: "Arun", salary: 25000, department: "IT" },
  { id: 2, name: "Priya", salary: 35000, department: "HR" },
  { id: 3, name: "Kumar", salary: 45000, department: "IT" },
  { id: 4, name: "Divya", salary: 30000, department: "IT" },
];
for(let i=0;i<employees.length;i++){
    if(employees[i].department==="IT"){
        console.log(employees[i])
    }
}

#totalSalary
const employees = [
  { id: 1, name: "Arun", salary: 25000, department: "IT" },
  { id: 2, name: "Priya", salary: 35000, department: "HR" },
  { id: 3, name: "Kumar", salary: 45000, department: "IT" },
  { id: 4, name: "Divya", salary: 30000, department: "IT" },
];
let sum=0
employees.forEach(employee=>{sum=sum+employee.salary})
console.log(sum)

#highestSalary
 const employees = [
  { id: 1, name: "Arun", salary: 25000, department: "IT" },
  { id: 2, name: "Priya", salary: 35000, department: "HR" },
  { id: 3, name: "Kumar", salary: 45000, department: "IT" },
  { id: 4, name: "Divya", salary: 30000, department: "IT" },
];
const highestSalary=employees.sort((a,b)=>b.salary-a.salary)
console.log(highestSalary[0])

#newArraywithEmployees
const employees = [
  { id: 1, name: "Arun", salary: 25000, department: "IT" },
  { id: 2, name: "Priya", salary: 35000, department: "HR" },
  { id: 3, name: "Kumar", salary: 45000, department: "IT" },
  { id: 4, name: "Divya", salary: 30000, department: "IT" },
]
const newArray=employees.map(emp=>emp.name)
console.log(newArray)


#defaultdiscountofZero
function calculateTotal(price, quantity, discountPercentage) {
  let pay = price * quantity;
  let discount = pay * discountPercentage / 100;
  return pay - discount;
 
}

console.log(calculateTotal(1000, 2, 10));

#rejectNegativePriceandDiscountprecentagesBelowZeroorAbove100

function calculateTotal(price, quantity, discountPercentage=0) {
  if(price<0||quantity<0||discountPercentage>100||discountPercentage<0){
    return"Invalid price or quantity or discount percentage"

  }
  let pay = price * quantity;
  let discount = pay * discountPercentage / 100;
  return pay - discount;
 
}

console.log(calculateTotal(1000, 2, 10));
console.log(calculateTotal(1000, -2));
console.log(calculateTotal(1000, 2, 110));


###regularFunctionorArrowFunctionI would use a regular function than arrow function ,because regular function feels less complex than an arrow function.It is easy to understand


#ArrayMethods
const products = [
  { id: 1, name: "Laptop", price: 50000, stock: 5 },
  { id: 2, name: "Mouse", price: 500, stock: 0 },
  { id: 3, name: "Keyboard", price: 1500, stock: 10 },
  { id: 4, name: "Monitor", price: 12000, stock: 3 },
  { id: 5, name: "USB Cable", price: 200, stock: 20 },
];
const stock=products.filter((product)=>product.stock>0)
const array=products.map(product=>product.name)
const inventoryValue=products.reduce((total,product)=>{return total+ (product.price*product.stock)},0)
const id=products.find(product=>product.id===3)
const rate=products.some(product=>product.price>40000)
const rate1=products.every(product=>product.price>0)
console.log(stock)
console.log(array)
console.log(inventoryValue)
console.log(id)
console.log(rate)
console.log(rate1)

#callgetUserandPrintreturnedUser
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Arun" });
    }, 1000);
  });
}
getUser()
  .then((user) => {
    console.log(user);
  })
  .catch(error=>{console.log(error);

  })

#handlingRejectedPromiseUsingcatch()

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failed:no user");
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

#accessingusernamethen()

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Arun" });
    }, 1000);
  });
}

getUser().then(user => {
  console.log(user.name);
});

#accessingReturnedUserimmediatelyWithoutwaitingforthePromise.It will show promise{pending},we will only get the promise object and not user object

#getUserusingAwait
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Arun" });
    }, 1000);
  });
}

async function displayUser() {
  const user = await getUser();
  console.log(user);
}

displayUser();


#printUsernmae
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Arun" });
    }, 1000);
  });
}

async function displayUser() {
  const user = await getUser();
  console.log(user.name);
}

displayUser();

#handleErrorUsingtry..catch

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Failed to fetch user");
    }, 1000);
  });
}

async function displayUser() {
  try {
    const user = await getUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

displayUser();

##asynchronousfunctionNamedgetOrders
function getOrders(userId) {
  return new Promise((resolve, reject) => {
    resolve([
      { id: 101, amount: 1500 },
      { id: 102, amount: 2500 }
    ]);
  });
}

async function displayUser() {
  try {
    const orders = await getOrders(1);
    console.log(orders);
  } catch (error) {
    console.log(error);
  }
}

displayUser();

#closuresIncreasingCountbyOneandCountNotAccessiblefromOutside
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

#creatingTwoSeperateCountersandMaintainTwoIndependentCount 
function parseUser(jsonString) {
  return JSON.parse(jsonString);
}

console.log(parseUser('{"name":"Arun","age":25}'));


#ParsesJSONstring 
function parseUser(jsonString) {
    const user = JSON.parse(jsonString);
    return user;
}

console.log(parseUser('{"name":"Arun","age":25}'));


#checkingParsedStringConatainsNamePropertyThatisNonempty
function parseUser(jsonString) {
  let user = JSON.parse(jsonString);

  if (typeof user.name === "string" && user.name !== "") {
    return true;
  }

  return false;
}
console.log(parseUser('{"name":"Arun","age":25}')); 
console.log(parseUser('{"age":25}'));
console.log(parseUser('{"name":""}'));
             
           
#returnsPrasedObject
function parseUser(jsonString) {
    const user = JSON.parse(jsonString);

    if (typeof user.name !== "string" || user.name === "") {
        throw new Error("Name is missing or invalid");
    }

    return user;
}

console.log(parseUser('{"name":"Arun","age":25}'));

#throwingmeaningfulError
   function parseUser(jsonString) {
    const user = JSON.parse(jsonString);

    if (typeof user.name !== "string" || user.name === "") {
        throw new Error("missing");
    }

    return user;
}

console.log(parseUser('{"age":25}'));
 
#usingTryCatch
function parseUser(jsonString) {
    try {
        const user = JSON.parse(jsonString);

        if (typeof user.name !== "string" || user.name === "") {
            throw new Error(" missing");
        }

        return user;
    } catch (error) {
        throw error;
    }
}

console.log(parseUser('invalid json'));





