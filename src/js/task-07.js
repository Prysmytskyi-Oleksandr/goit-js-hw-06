const sizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");


const onGetValueInput = (event) => {
    console.log(event.currentTarget.value);
    const size = Number(event.currentTarget.value);
    textRef.style.fontSize = `${size}px`;
}

sizeControlRef.addEventListener("input", onGetValueInput);



