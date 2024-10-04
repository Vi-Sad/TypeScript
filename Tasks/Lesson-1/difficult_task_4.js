// Составьте массив промежуточных сумм целых чисел в массиве (cumulativeSum([1,3,5,7]) => [1, 4, 9, 16])

function InterimAmount(array) {
    let sum = 0
    const arrayNew = []
    array.forEach((value) => {
        arrayNew.push(sum += value)
    });
    return arrayNew;
}

console.log(InterimAmount([1, 3, 5, 7]))