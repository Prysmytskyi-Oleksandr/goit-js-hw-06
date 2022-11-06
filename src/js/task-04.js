

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');



let counterValue = 0;

const onDecrementClick = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

const onIncrementClick = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);