let calcInp = document.querySelector(".textView");

function insert(num) {
  calcInp.value = calcInp.value + num;
}

function clean() {
  calcInp.value = "";
}

function back() {
  let exp = calcInp.value;
  calcInp.value = exp.substring(0, exp.length - 1);
}

function equal() {
  let exp = calcInp.value;
  if (exp) {
    calcInp.value = eval(exp);
  }
}
