//Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.
const dividers = {
  option: "Делители",
  create: function () {
    return function (contain, result) {
      let input1 = document.createElement("input");
      input1.type = "number";
      let btn = document.createElement("button");
      btn.textContent = "Получить";
      let ul = document.createElement("ul");

      btn.addEventListener("click", function () {
        ul.innerHTML = "";
        let arr = [];
        let num = +input1.value;
        for (let i = num; i >= 1; i--) {
          if (num % i === 0) arr.push(i);
        }
        for (const elem of arr) {
          let li = document.createElement("li");
          li.textContent = elem;
          ul.appendChild(li);
        }
        result.parentNode.append(ul);
      });
      contain.append(input1, btn);
    };
  },
};

export { dividers };
