// Принимает два массива и возвращает новый массив, состоящий из элементов,
// которые содержатся только в одном из переданных массивов
// [1,2,3], [1,2,4] -> [3,4]

function TwoArrays(arr1, arr2) {
    let newArr = []
    arr1.map((value) => {
        if (!(value in arr2)) {
            newArr.push(value)
        }
    })
    arr2.map((value) => {
        if (!(value in arr1)) {
            newArr.push(value)
        }
    })
    return newArr;
}

console.log(TwoArrays([1, 2, 3], [1, 2, 4]))
