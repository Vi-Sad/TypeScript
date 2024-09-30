// Примитивные типы данных
let age: number = 20;
let firstName: string = 'John';
let isMarried: boolean = false;

// Не примитивные типы данных

// Массивы
let names: string[] = ['John', 'Sara', 'Bill'];
// или
let names2: Array<string> = ['John', 'Sara', 'Bill', 'Alex'];

// Кортежи
let person: [string, number] = ['John', 20]

// Перечисления
enum colors {'red', 'yellow', 'green'}

let color = Math.floor(Math.random() * 3)
if (color == colors.red) {
    console.log('Stop')
}

// Специальные типы

// any
let someValue: any = 'Hello!';
someValue = 20
someValue = true

// unknown
let someValue2: unknown = 'hello';
let someValue3: string = someValue2

// void (используется для указания, что функция не возвращает значение)
function sayHello(): void {
    console.log('Hello')
}

// never (используется для указания, что функция не возвращает значение и не завершается)
function throwError(): never {
    throw new Error('Error!');
}

const func = function (id: string): string {
    return id.toString();
}

// null и undefined (подтипы всех типов данных)
let age2: null = null
let ahe3: undefined = undefined

// interface
interface User {
    name: string,
    age: number,
}

interface Admin extends User {
    isAdmin: boolean
}

let user: Admin = {name: 'John', age: 20, isAdmin: false}

// type
type User1 = { name: string, age: number }
type Admin1 = User1 & {
    isAdmin: boolean,
    friends: Friends
}
type Friends = {
    amount: number | string,
    names?: Array<string> // ? - необязательное присутствие
}

let user1: Admin1 = {
    name: 'John',
    age: 20,
    isAdmin: false,
    friends: {
        amount: 2
    }
}