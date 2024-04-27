//Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.

const leastCommonMultiple = {
  option: "Наименьшее кратное",
  create: function () {
    return function (contain, result) {
      let input1 = document.createElement("input");
      input1.type = "number";
      let input2 = document.createElement("input");
      input2.type = "number";
      let btn = document.createElement("button");
      btn.textContent = "Получить";
      btn.addEventListener("click", function () {
        let num1 = +input1.value;
        let num2 = +input2.value;
        let res = 0;
        for (let i = 1; i < Infinity; i++) {
          if (i % num1 === 0 && i % num2 === 0) {
            result.textContent = i;
            i = Infinity;
          }
        }
      });
      contain.append(input1, input2, btn);
    };
  },
};

export { leastCommonMultiple };
