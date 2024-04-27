//Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите список общих делителей этих двух чисел.
const commonDivisors = {
  option: "Общие делители",
  create: function () {
    return function (contain, result) {
      let input1 = document.createElement("input");
      input1.type = "number";
      let input2 = document.createElement("input");
      input2.type = "number";
      let btn = document.createElement("button");
      btn.textContent = "Получить";
      btn.addEventListener("click", function () {
        let arr1 = [];
        let arr2 = [];
        let arrRes = [];
        let num1 = +input1.value;
        let num2 = +input2.value;
        for (let i = num1; i >= 1; i--) {
          if (num1 % i === 0) arr1.push(i);
        }
        for (let i = num2; i >= 1; i--) {
          if (num2 % i === 0) arr2.push(i);
        }
        for (const elem1 of arr1) {
          for (const elem2 of arr2) {
            if (elem1 === elem2) {
              arrRes.push(elem1);
            }
          }
        }

        result.textContent = arrRes.reverse().join(" ");
      });
      contain.append(input1, input2, btn);
    };
  },
};

export { commonDivisors };
