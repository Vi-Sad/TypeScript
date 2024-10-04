// Принимает число и возвращает его факториал

function Factorial(num) {
    let allNums = []
    for (let i = 1; i <= num; i++) {
        allNums.push(i)
    }
    return allNums.reduce((acc, ind) => acc * ind);
}

console.log(Factorial(5))