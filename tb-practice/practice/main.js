import { rectangle } from "/src/js/module/rectangle.js";
import { square } from "/src/js/module/square.js";
const funcs = {
  square,
  rectangle,
};

let contain = document.querySelector(".container");
let result = document.querySelector("#result");

let select = document.querySelector("#select");
for (const key in funcs) {
  let option = document.createElement("option");
  option.value = key;
  option.textContent = key;
  select.appendChild(option);
}
// console.log(select);
select.addEventListener("change", function () {
  contain.innerHTML = "";

  let nameFunc = funcs[this.value];
  if (nameFunc) {
    nameFunc(contain, result);
  }
});

// console.log(contain);
