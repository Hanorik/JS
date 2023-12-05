console.log("------------------------------------------------------------------------- \n Task 1:")

function printPowsOf2(num) {
    if (typeof num !== "number") {
        console.log('Wrong query')
    }
    else
    for (let i = 1; i <= num; i*=2) {
    console.log (i);
    }
}
printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);

console.log("------------------------------------------------------------------------- \n Task 2:")

function calculateSumOfArray() {
    const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
    let n = 0;
    for (let i of initialArray) {
        if (typeof i == "number") {
            n += i;
        }
    }
    console.log(n);
    }

   calculateSumOfArray();

console.log("------------------------------------------------------------------------- \n Task 3:")

function printSeasonByMonth(month) {
    switch (month) {
        case "DECEMBER":
        case "JANUARY":
        case "FEBRUARY":
            console.log("winter");
            break;
        case "MARCH":
        case "APRIL":
        case "MAY":
            console.log("spring");
            break;
        case "JUNE":
        case "JULY":
        case "AUGUST":
            console.log("summer");
            break;
        case "SEPTEMBER":
        case "OCTOBER":
        case "NOVEMBER":
            console.log("autumn");
            break;
        default:
            console.log("Invalid month");
    }
}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");

console.log("------------------------------------------------------------------------- \n Task 4:")

function calculateWordsInString(string) {
    let nospace = string.trim();
    let words = nospace.split(/\s+/);
    const m = words.length;
    console.log(m);
   }
   calculateWordsInString("Easy string for count");
   calculateWordsInString("Easy");
   calculateWordsInString("Some string with a triple   space");
   calculateWordsInString("Some?  string, with a triple   space");

console.log("------------------------------------------------------------------------- \n Task 5:")
   
function unicFn(initialArray) {
    let num = [];
    for (let i of initialArray) {
        if (!num.includes(i)) {
        num.push(i);
        }
    }
    return num;
   }
   console.log(unicFn([2, 3, 1, 3, 3, 7]))

console.log("------------------------------------------------------------------------- \n Task 6:")

function isEvenArray(initialArray) {
    for (let i of initialArray)
    if (i % 2) {
        return "no";
    }
    return 'yes'
   }
console.log(isEvenArray([1, 2, 3, 9]))
console.log(isEvenArray([2, 4, 6]))

console.log("------------------------------------------------------------------------- \n Task 7:")

function filterArray(initialArray) {
    let filter = [];
    for (let i of initialArray){
        if (typeof i == 'string') {
            filter.push(i);
        }
    }
    return filter;
}
console.log(filterArray([2, 'string', 3, , , "test"]))

console.log("------------------------------------------------------------------------- \n Task 8:")

function findUser(initialObject) {
    let person = [];
    for (let i in initialObject) {
        if (initialObject[i].age > 18 && initialObject[i].city == "NY") {
            person.push(i);
        }
    }
    if (person.length > 0) {
        return person;    
    }
    else { 
    console.log ('peson wasnt found')
    return '^-^';
    }
}
console.log(findUser({Max: {age: 23, city: "London"}, Mike: {age: 20, city: `NY`}}))

console.log("------------------------------------------------------------------------- \n Task 9:")

function removeObj(arr, str, num) {
    let result = [];
    for (let i of arr) {
        if (i[str] !== num) {
            result.push(i);
        } 
    }
    return result;
}
const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
console.log(removeObj(arr, "age", 2))
console.log(removeObj(arr, "year", 2))
// Знизу код який написав чат гпт, знаю шо він буде оптимізованіший і бла бла бла

// function removeObj(arrayOfObj, keyName, value) {
//     return arrayOfObj.filter(obj => obj[keyName] !== value);
// }

// const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];

// console.log(removeObj(arr, "age", 2))
// console.log(removeObj(arr, "year", 2))

console.log("------------------------------------------------------------------------- \n Task 10:")

let global_scope = 'global scope';
let global = () => {
    console.log(global_scope);
}
global()

let funct = () => {
    let func_scope = 'funct scope';
    console.log(func_scope);
}
funct()

let localvar = () => {
    if (true) {
        let local = "local scope";
        console.log(local);
    }
    // console.log(local); // не працює))
}
localvar();

console.log("------------------------------------------------------------------------- \n Task 11:")

const car = {
 name : "Tesla",
 model : "X",
};
function showCarInfo() {
   console.log(this.name, this.model);
}
let showNewCarInfo = showCarInfo.bind(car);
showNewCarInfo()

console.log("------------------------------------------------------------------------- \n Task 12: \n Тут має бути мяу, але воно в кінці консолі)))))")

const cat = {
    sound: 'meow',
    greet: function() {
      setTimeout(function() {
          console.log(this.sound)
      }. bind(this), // В консолі виводиться пустий таск 12, і пустий таск 13 а мяу і гав в кінці консолі бо як я поняв функція setTimeout відкладає своє виконання і це вроді називається затримка виводу чи шось типу цього
      0)
    }
   };
cat.greet();

console.log("------------------------------------------------------------------------- \n Task 13: \n Тут має бути гав, але воно в кінці консолі)))))))))")

const dog = {
sound2: 'bark',
greeting: function() {
    setTimeout(() => { 
        console.log(this.sound2)
    },0)
  }
}
    
dog.greeting();

console.log("------------------------------------------------------------------------- \n Task 14:")

let convert = (bytes) => {
    return (bytes / 1000000 + 'mb');
}
console.log(convert(10000))

console.log("------------------------------------------------------------------------- \n Task 15:")

const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        const fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
   };
   const testArgs = ['sushi', 'hiking']
   let logPersonNameAndInterests = function() {
    let interests = testArgs.join(', ');
    console.log (Person.getFullName(), 'loves:', interests);
   };
   logPersonNameAndInterests();

console.log("------------------------------------------------------------------------- \n Task 16:")

let compose = function (...functions) {
    return function(abc) {
        return functions.reduce(function(res, num) {
            return num(res);
        }, abc);
    };
};
let modify = function (modified) {
    return function (data) {
        return data.map (function(i) {
            return modified(i);
        });
    };
}

let setupper = compose (
    modify(function(smth2) {
        return smth2.charAt(0).toUpperCase() + smth2.slice(1).toLowerCase();
    }),
    function (output2) {
        const result2 = `Result: ${output2.join("-")} length: ${output2.join("-").length}`;
        console.log(result2);
        return output2;
    }
)
let setlower = compose(
    modify (function(smth) {
        return smth.toLowerCase();
    }),
    function (output1) {
        const result1 = `Result: ${output1.join(" - ")} length: ${output1.join("-").length + output1.length}`;
        console.log(result1);
        return output1;
    }
);

const abv = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];
setupper(abv);
setlower(abv);

console.log("------------------------------------------------------------------------- \n Task 17:")

function Calculator() {}

Calculator.prototype.sum = function (a, b) {
  return a + b;
};

Calculator.prototype.subtract = function (a, b) {
  return a - b;
};

function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
// 2.1
function AdvancedCalculator() {}

// 2.2
AdvancedCalculator.prototype = Object.create(Calculator.prototype);

// 2.3
AdvancedCalculator.prototype.multiply = function (a, b) {
  return a * b;
};

AdvancedCalculator.prototype.divide = function (a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    console.error("Division by zero is not allowed.");
    return undefined;
  }
};

// Приклад використання:
const calc = new Calculator();
console.log(calc.sum(5, 3)); // Виведе 8
console.log(calc.subtract(5, 3)); // Виведе 2

const advCalc = new AdvancedCalculator();
console.log(advCalc.multiply(5, 3)); // Виведе 15
console.log(advCalc.divide(6, 2)); // Виведе 3
console.log(advCalc.divide(6, 0)); // Виведе помилку та undefined

// 2.1
function TodoItem(name) {
    this.id = generateId();
    this.name = name;
    this._checked = false;
  }
  
  // 2.2
  Object.defineProperty(TodoItem.prototype, "checked", {
    get: function () {
      return this._checked;
    },
    set: function (value) {
      if (typeof value === "boolean") {
        this._checked = value;
      } else {
        console.error("Invalid value for 'checked'. Must be a boolean.");
      }
    },
  });
  
  // 2.3
  function TodoList(name) {
    this.id = generateId();
    this.name = name;
    this.items = [];
  }
  
  // 2.4
  TodoList.prototype.addItem = function (item) {
    if (item instanceof TodoItem) {
      this.items.push(item);
    } else {
      console.error("Invalid item type. Must be a TodoItem.");
    }
  };
  
  // 2.5
  TodoList.prototype.removeItemById = function (itemId) {
    this.items = this.items.filter((item) => item.id !== itemId);
  };
  
  // 2.6
  TodoList.prototype.getItemById = function (itemId) {
    return this.items.find((item) => item.id === itemId);
  };
  
  // 3
  const myTodoList = new TodoList("My Todo List");
  
  // 4
  const item1 = new TodoItem("Task 1");
  const item2 = new TodoItem("Task 2");
  const item3 = new TodoItem("Task 3");
  const item4 = new TodoItem("Task 4");
  
  myTodoList.addItem(item1);
  myTodoList.addItem(item2);
  myTodoList.addItem(item3);
  myTodoList.addItem(item4);
  
  console.log(myTodoList);
  
  // 5
  item2.checked = true;
  
  console.log(myTodoList);
  
  // 6
  myTodoList.removeItemById(item1.id);
  myTodoList.removeItemById(item3.id);
  
  console.log(myTodoList);
  