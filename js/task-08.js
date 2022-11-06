
const formEl = document.querySelector('.login-form');
const result = {};

const onSubmit = (event) => {
    event.preventDefault();
    
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert('Всі поля мають бути заповнені');
           
    }
   
    result.email = email.value;
    result.password = password.value;
    console.log(result);
    
    //     const formData = new FormData(event.currentTarget);
    //      console.log(formData);
    //      formData.forEach((email, password) => {        
    //       console.log(password);
    //       console.log(email);
    // })

     
    formEl.reset();
}

formEl.addEventListener('submit', onSubmit);

