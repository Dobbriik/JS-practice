import { circle } from "/src/js/module/circle.js";
import { rectangle } from "/src/js/module/rectangle.js";
import { square } from "/src/js/module/square.js";
// console.log(square);
// console.log(rectangle);

const funcs = {
  rectangle,
  square,
  circle,
};

for (const key in funcs) {
  console.log(funcs[key].option);
}

let contain = document.querySelector(".container");

let result = document.querySelector("#result");

let select = document.querySelector("#select");

for (const key in funcs) {
  let option = document.createElement("option");
  option.value = key;
  option.textContent = funcs[key].option;
  select.appendChild(option);
}

select.addEventListener("change", function () {
  contain.innerHTML = "";

  let nameFunc = funcs[this.value].create();

  nameFunc(contain, result);
});
