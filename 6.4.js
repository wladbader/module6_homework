//6.4

//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

//Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

let a = Number(prompt("Введите первое число:"));
let b = Number(prompt("Введите второе число:"));

function countNums(num1, num2) {
  let currentNum = num1;

  const IntervalId = setInterval(() => {
    console.log(currentNum);

    if (currentNum != num2) {
      currentNum++;
    } else {
      clearInterval(IntervalId);
    }
  }, 1000);
}

countNums(a, b);
