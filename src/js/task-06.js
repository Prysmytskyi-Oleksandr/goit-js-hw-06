
const inputRef = document.querySelector('#validation-input');

const onBlur = (event) => {

    const input = event.currentTarget;  
    const validLengthInput = Number(input.dataset.length);
    

    if (input.value.length === validLengthInput) {
      
        input.classList.add("valid");
        input.classList.remove("invalid");
    }
    else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}

inputRef.addEventListener('blur', onBlur);