// Деструктуризация массива. Присваивание переменным значения из массива
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first);
console.log(second);

// равносильно записи:
const first2 = numbers[0];
const second2 = numbers[1];
console.log(first2);
console.log(second2);

// Деструктуризация объекта. Присваивание переменным значения из объекта
const userObject = {
    useName: 'John',
    userAge: 25,
    friends: {
        amount: 10
    }
};

const {useName, userAge} = userObject;
const {amount: userFriendsAmount} = userObject.friends
console.log(userFriendsAmount)

// Оператор Rest
const numbers2 = [1, 2, 3, 4, 5];
const [first3, second3, ...other] = numbers2;
console.log(first3, second3, other)

const userObject2 = {
    userName: 'John',
    userAge: 25,
    friends: {
        amount: 10
    }
};

const {userName, ...otherData} = userObject2;
console.log(otherData)

// Оператор Spread
const numbers3 = [1, 2, 3]
const numbers4 = [4, 5, 6]
const newNumbers = [0, ...numbers3, 3.5, ...numbers4, 7]
console.log(newNumbers)
