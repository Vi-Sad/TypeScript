// Основные методы строк

// trim() - удаляет пробелы в начале и в конце строки
let str: string = '   Hello!   '
console.log(str.trim())

// includes() - проверяет, содержит ли строка указанную подстроку
let str2: string = 'Hello, world!'
console.log(str2.includes('world'))

// startsWith() - проверяет, начинается ли строка с указанной подстроки
let str3: string = 'Hello, world!'
console.log(str3.startsWith('Hello'))

// indexOf() - возвращает индекс первого вхождения указанной подстроки
let str4: string = 'Hello, world!'
console.log(str4.indexOf('wo'))

// split() - разбивает строку на массив подстрок по указанному разделителю
let str5: string = 'Hello, world!'
console.log(str4.split(''))
console.log(str4.split(' '))

// toLowerCase() / toUpperCase() - преобразует в нижний / верхний регистр
let str6: string = 'Hello, world!'
console.log(str6.toLowerCase())
console.log(str6.toUpperCase())

// replace() - заменяет подстроку на указанную
let str7: string = 'Hello, world!'
console.log(str6.replace('world', 'John'))
