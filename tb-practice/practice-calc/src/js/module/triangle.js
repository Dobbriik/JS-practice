//Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
const triangle = {
  option: "Треугольник",
  create: function () {
    return function (container, result) {
      let input1 = document.createElement("input");
      input1.type = "number";
      input1.placeholder = "1Сторона";

      let input2 = document.createElement("input");
      input2.type = "number";
      input2.placeholder = "2Сторона";

      let input3 = document.createElement("input");
      input3.type = "number";
      input3.placeholder = "3Сторона";

      let btn1 = document.createElement("button");
      btn1.textContent = "Площадь";
      btn1.addEventListener("click", function () {
        let p = (+input1.value + +input2.value + +input3.value) / 2;
        let s = Math.sqrt(
          p * (p - input1.value) * (p - input2.value) * (p - input3.value),
        );
        result.textContent = s.toFixed(2);
        input1.value = "";
        input2.value = "";
        input3.value = "";
      });

      container.append(input1, input2, input3, btn1);
    };
  },
};

export { triangle };
