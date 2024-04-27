//Сделайте калькулятор, который будет находить площадь и периметр квадрата.
const square = {
  option: "Квадрат",
  create: function () {
    return function (container, result) {
      let input1 = document.createElement("input");
      input1.type = "number";
      input1.placeholder = "Сторона квадрата";
      let btn1 = document.createElement("button");
      btn1.textContent = "Площадь";
      btn1.addEventListener("click", function () {
        result.textContent = input1.value ** 2;
      });
      let btn2 = document.createElement("button");
      btn2.addEventListener("click", function () {
        result.textContent = input1.value * 2;
      });
      btn2.textContent = "Периметр";

      container.append(input1, btn1, btn2);
    };
  },
};

export { square };
