const pifagor = {
  option: "Пифагорова 3ка",
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
      btn.textContent = "Проверить";
      btn.addEventListener("click", function () {
        let a = +input1.value;
        let b = +input2.value;
        let c = +input3.value;
        if (a ** 2 + b ** 2 === c ** 2) {
          result.textContent = "Является";
        } else if (a ** 2 + c ** 2 === b ** 2) {
          result.textContent = "Является";
        } else if (c ** 2 + b ** 2 === a ** 2) {
          result.textContent = "Является";
        } else {
          result.textContent = "Не является";
        }
      });
      contain.append(input1, input2, input3, btn);
    };
  },
};

export { pifagor };
