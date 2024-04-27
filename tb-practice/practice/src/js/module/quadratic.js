//Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.
const quadratic = {
  option: "Уравнение квд.",
  create: function () {
    return function (contain, result) {
      let input1 = document.createElement("input");
      input1.type = "number";
      input1.placeholder = "a";
      let input2 = document.createElement("input");
      input2.type = "number";
      input2.placeholder = "b";
      let input3 = document.createElement("input");
      input3.type = "number";
      input3.placeholder = "c";
      let btn = document.createElement("button");
      btn.textContent = "Получить";
      btn.addEventListener("click", function () {
        let a = +input1.value;
        let b = +input2.value;
        let c = +input3.value;
        let d = b ** 2 - 4 * a * c;
        if (d < 0) {
          result.textContent = "Нет корней";
        } else if (d === 0) {
          result.textContent = `x = ${(-b / (2 * a)).toFixed(2)}`;
        } else if (d > 0) {
          let x1 = ((-b - Math.sqrt(d)) / (2 * a)).toFixed(2);
          let x2 = ((-b + Math.sqrt(d)) / (2 * a)).toFixed(2);
          result.textContent = `x1 = ${x1}, x2 = ${x2}`;
        }
      });
      contain.append(input1, input2, input3, btn);
    };
  },
};

export { quadratic };
