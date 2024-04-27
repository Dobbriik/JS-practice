import { circle } from "/src/js/module/circle.js";
import { commonDivisors } from "/src/js/module/common-divisors.js";
import { dividers } from "/src/js/module/dividers.js";
import { leastCommonMultiple } from "/src/js/module/least-common-multiple.js";
import { mostCommonDivisor } from "/src/js/module/most-common-divisor.js";
import { pifagor } from "/src/js/module/pifagor.js";
import { quadratic } from "/src/js/module/quadratic.js";
import { rectangle } from "/src/js/module/rectangle.js";
import { square } from "/src/js/module/square.js";
import { triangle } from "/src/js/module/triangle.js";

// console.log(square);
// console.log(rectangle);

const funcs = {
  rectangle,
  square,
  circle,
  triangle,
  quadratic,
  pifagor,
  dividers,
  commonDivisors,
  mostCommonDivisor,
  leastCommonMultiple,
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
  if (+this.value === 0) {
    contain.innerHTML = "";
  } else {
    contain.innerHTML = "";

    let nameFunc = funcs[this.value].create();

    nameFunc(contain, result);
  }
});

function test(num) {
  (function () {
    console.log(num);
  })();
  num = "lost";
}

test("asda");
