
const inputRef = document.querySelector('#name-input');
const message = document.querySelector('#name-output')



const onAddMessageInput = (name) => {
    console.log(name.currentTarget.value);

    if (name.currentTarget.value === '') { message.textContent = "Anonymous"; }
    else { message.textContent = name.currentTarget.value;}
    
    // name.currentTarget.value !== '' ? message.textContent = name.currentTarget.value : message.textContent = "Anonymous"
    
    // name.currentTarget.value === '' ? message.textContent = "Anonymous" : message.textContent = name.currentTarget.value
};

inputRef.addEventListener('input', onAddMessageInput);