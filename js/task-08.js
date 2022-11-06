
const formEl = document.querySelector('.login-form');

const onSubmit = (event) => {
    event.preventDefault();
    
const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
       return alert( 'Всі поля мають бути заповнені');
    }

    
    console.log(`{email: ${email.value} password: ${password.value}}`);

    formEl.reset();
}

formEl.addEventListener('submit', onSubmit);