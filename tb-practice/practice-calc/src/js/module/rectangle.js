const rectangle = {
  option: "Прямоугольник",
  create: function () {
    return function (container, result) {
      let width = document.createElement("input");
      width.type = "number";
      width.placeholder = "Ширина";

      let height = document.createElement("input");
      height.placeholder = "Высота";
      height.type = "number";

      let s = document.createElement("button");
      s.textContent = "Площадь";
      s.addEventListener("click", function () {
        result.textContent = width.value * height.value;
      });

      let p = document.createElement("button");
      p.textContent = "Периметр";
      p.addEventListener("click", function () {
        result.textContent = (+width.value + +height.value) * 2;
      });

      container.append(width, height, s, p);
    };
  },
};
export { rectangle };
