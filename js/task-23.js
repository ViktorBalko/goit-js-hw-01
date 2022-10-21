//        задача#23B1
// Все операторы, которые мы рассматривали до этого, были бинарными.
//   Т.е.они содержали два операнда: левый и правый.Логическое «НЕ» - это унарный оператор,
//     выполняющий операцию над одним операндом справа.

// Оператор! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его
// на противоположный true -> false или false -> true.


function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange;       // Change this line

  return isNotInRange;
}
//  isInRange = true;
//  isNotInRange = !isInRange; // !isInRange -> !true -> false
