// *output из браузера

const user = {
    name: 'Victoria',
    age: 22,
    say: function () {
        return 'Hello, world!'
    }
}

console.log(user.say()) // output -> 'Hello, world!'

function whatIsThis() {
    return this === window
}

console.log(whatIsThis()) // output -> true

function whatIsThis2() {
    function whatInside() {
        return this === window
    }

    return whatInside()
}

console.log(whatIsThis2()) // output -> true

// Анонимная функция (вызов)
;(function () {
    return this === window
})()

// 'use strict' - строгий режим
// this = undefined
'use strict'
;(function () {
    console.log(this)
    return this === window
})() // output -> undefined, false

const user2 = {
    name: 'Victoria',
    age: 22,
    say: function () {
        return `Hello, ${this.name}!`
    }
}

console.log(user2.say()) // output -> 'Hello, Victoria!'
console.log(user2.say) // output ->
// ƒ () {
//     return `Hello, ${this.name}!`
// }

const sayHello = user2.say
console.log(sayHello) // output -> 'Hello, !'
console.log(sayHello) // output ->
// ƒ () {
//     return `Hello, ${this.name}!`
// }

// Функция конструктор
function CreateUser() {
    return this.name = 'Victoria'
}

const user3 = new CreateUser
console.log(user3) // output -> CreateUser {name: 'Victoria'}
const user4 = CreateUser
console.log(user4) // output -> 'Victoria'

console.log(user3 instanceof CreateUser) // output -> true
console.log(user4 instanceof CreateUser) // output -> false

function CreateUser2(name) {
    if (!(this instanceof CreateUser2)) {
        throw new Error('You should use new keyword')
    }

    return this.name = name
}

const createUser = CreateUser2('Victoria')
console.log(createUser) // output -> Uncaught Error: You should use new keyword

const createUser2 = new CreateUser2('Victoria')
console.log(createUser2) // output -> CreateUser2 {name: 'Victoria'}
console.log(createUser2.name) // output -> 'Victoria'

// Синтаксис ES6 (2016): let, const, class, () => {} (стрелочные функции), Promise
// VM1155:1 - виртуальная машина с выводом строки кода

class User {
    constructor(name) {
        this.name = name
    }
}

const user5 = new User('Victoria')
console.log(user5) // output -> User {name: 'Victoria'}
console.log(user5.name) // output -> 'Victoria'

function sayHello2() {
    return `Hello, ${this.name}`
}

console.log(sayHello2()) // output -> 'Hello, '

// call и apply - не явные вызовы функции

// Вызов функции с контекстом
console.log(sayHello2.call({name: 'Victoria'})) // output -> 'Hello, Victoria'
console.log(sayHello2.apply({name: 'Victoria'})) // output -> 'Hello, Victoria'

function sayHello3(name1, name2) {
    return `Hello ${this.name}, ${name1} and ${name2}`
}

// Вызов функции с контекстом и аргументами
console.log(sayHello3.call({name: 'Victoria'}, 'Ksenia', 'Ekaterina')) // output ->
// 'Hello Victoria, Ksenia and Ekaterina'

console.log(sayHello3.apply({name: 'Victoria'}, ['Ksenia', 'Ekaterina'])) // output ->
// 'Hello Victoria, Ksenia and Ekaterina'

// bind - возвращает новую функцию, сохраняя старую

console.log(sayHello3.bind({name: 'Victoria'}, 'Ksenia', 'Ekaterina')) // output ->
// ƒ sayHello3(name1, name2) {
//     return `Hello ${this.name}, ${name1} and ${name2}`
// }

const contextBind = sayHello3.bind({name: 'Victoria'}, 'Ksenia', 'Ekaterina')
console.log(contextBind) // output ->
// ƒ sayHello3(name1, name2) {
//     return `Hello ${this.name}, ${name1} and ${name2}`
// }
console.log(contextBind()) // output -> 'Hello Victoria, Ksenia and Ekaterina'

const contextBind2 = sayHello3.bind({name: 'Victoria'}, 'Ksenia')
console.log(contextBind2()) // output -> 'Hello Victoria, Ksenia and undefined'
console.log(contextBind2('Ivan')) // output -> 'Hello Victoria, Ksenia and Ivan'

const contextBind3 = sayHello3.bind({name: 'Victoria'}).bind({name: 'Ksenia'})
console.log(contextBind3()) // output -> 'Hello Victoria, undefined and undefined'

const contextBind4 = sayHello3.bind({name: 'Victoria'}).bind({name: 'Ksenia'}, 'Ivan')
console.log(contextBind4()) // output -> 'Hello Victoria, Ivan and undefined'
console.log(contextBind4('Ekaterina')) // output -> 'Hello Victoria, Ivan and Ekaterina'

function greetWaitAndAgain() {
    console.log(`Hello, ${this.name}`)
    setTimeout(() => {
        console.log(`Hello again, ${this.name}`)
    })
}

const user6 = {name: 'Victoria'}

user6.greet = greetWaitAndAgain

console.log(user6.greet()) // output ->
// 'Hello, Victoria'
// 'Hello again, Victoria'

// Пример использования bind на React

const [isLogged, setIsLogged] = useState(false)

// Стандартное использование
<User setIsLogged={()=>{setIsLogged(isLogged)}}/>

// Использование с bind
<User setIsLogged={setIsLogged.bind(isLogged)}/>

function CreateApi(url) {
    this.url = url
    getTodos() {
        const token = 'Bearer' + localStorage.getItem('token')
        fetch(this.url, {
            headers: {'Authorization': token}
        })
    }
}

const api = new CreateApi('http://localhost/todos')
const newFetch = api.getTodos.bind({url: 'http://localhost/todos'})