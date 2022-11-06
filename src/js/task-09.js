

const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const bgColorSpanEl = document.querySelector('.color');

const onChangeColorBody = (event) => {

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const color = getRandomHexColor(event);
console.log(color);

  
bodyEl.style.backgroundColor = color;  
  bgColorSpanEl.innerHTML = color;
  // bgColorSpanEl.insertAdjacentHTML("beforeend", `${color}`);
  // bgColorSpanEl.textContent = color;

}
  
buttonEl.addEventListener('click', onChangeColorBody);



