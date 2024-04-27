//Сделайте калькулятор, который будет находить площадь круга и длину окружности.
const circle = {
  option: "Круг",
  create: function () {
    return function (container, result) {
      let input1 = document.createElement("input");
      input1.type = "number";
      input1.placeholder = "Радиус";
      let btn1 = document.createElement("button");
      btn1.textContent = "Площадь";
      btn1.addEventListener("click", function () {
        let res = input1.value ** 2 * 3.14;
        result.textContent = res.toFixed(2);
      });
      let btn2 = document.createElement("button");
      btn2.addEventListener("click", function () {
        let res = input1.value * 2 * 3.14;
        result.textContent = res.toFixed(2);
      });
      btn2.textContent = "Длина окр.";

      container.append(input1, btn1, btn2);
    };
  },
};

export { circle };
