function generateArray(size, min, max) {
    let arr = new Array(size)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // console.log(arr); 
    return arr;
}
// let array1 = generateArray(15, 1, 30);
// let array2 = generateArray(10, 100, 500);
// console.log(array1);
// console.log(array2.toString())
// console.log(generateArray(15, 1, 30));
// console.log(generateArray(10, 100, 500));
// document.write(generateArray(20, 10, 100));

function find(value, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}
let arr1 = generateArray(10, 5, 10);
console.log(arr1);
console.log(find(7, arr1));
