// Задание 1
function showEvenNumbers() {
  let a = +prompt("Введите число a:");
  let b = +prompt("Введите число b:");

  if (isNaN(a) || isNaN(b)) {
    alert("Неверный ввод чисел");
    return;
  }

  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

showEvenNumbers();

// Задание 2
let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

// Задание 3
let number;

do {
  number = prompt("Введите число больше 10:");
  if (number === null) break;
} while (Number(number) <= 10 && number !== null);

// Задание 4
function min(a, b) {
  return a < b ? a : b;
}

alert(min(4, 7)); // 4

// Задание 5
const ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

// Задание 6
const checkAge = age => (age > 18) || confirm('Родители разрешили?');