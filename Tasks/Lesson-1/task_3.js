// Принимает два массива и возвращает новый массив, состоящий из элементов,
// которые содержатся только в одном из переданных массивов

function TwoArrays(arr1, arr2) {
    let newArr
    if (Math.floor(Math.random() * (3 - 1) + 1) === 1) {
        newArr = arr1
    } else {
        newArr = arr2
    }
    return newArr;
}

console.log(TwoArrays([1, 2, 3], [4, 5, 6]))
