const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const elementsList = ingredients.map(element => {
  const listEl = document.createElement('li');
  listEl.textContent = element;
  listEl.classList.add('item');

  return listEl;

})
console.log(elementsList);

list.append(...elementsList);



