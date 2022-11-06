const amountItemsEl = document.querySelectorAll('li.item');
console.log('Number of categories:', amountItemsEl.length);


amountItemsEl.forEach(elem => {
    console.log('Category:', elem.firstElementChild.textContent);
    console.log('Elements:', elem.lastElementChild.children.length);
    
});