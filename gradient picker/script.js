let body = document.querySelector('body');
let firstColor = document.querySelector('#first');
let secondColor = document.querySelector('#second');
let thirdColor = document.querySelector('#third');
let result = document.querySelector('p.color-value');

changeBackground = () => {
  body.style.background = `linear-gradient(-90deg, ${firstColor.value}, ${secondColor.value}, ${thirdColor.value})`;
  result.textContent = `${body.style.background};`
}
firstColor.addEventListener("input", changeBackground);
secondColor.addEventListener("input", changeBackground);
thirdColor.addEventListener("input", changeBackground);
