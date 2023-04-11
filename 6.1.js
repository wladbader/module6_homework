//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = [1, 1, 4, 7, 4, 3, null, 'abc', 14];

function countEvenOdd(arr) {
    let countEven = 0, countOdd = 0, countZero = 0;

    arr.map(
        item => {
            if (+item == 0) {
                countZero += 1;
            } else if (+item % 2 == 0) {
                countEven += 1;
            } else {
                countOdd += 1;
            }
        }
    );

    return `
    Количество четных: ${countEven};
    Количество нечетных: ${countOdd};
    Количество нулевых: ${countZero};
    `;
}

console.log(countEvenOdd(arr));