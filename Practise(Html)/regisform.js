const regisform = document.getElementById('regisform');
const email = document.getElementById('email');
const nameInput = document.getElementById('name'.trim);
const password = document.getElementById('password');
const gender = document.getElementById('gender');
const nameError = document.getElementById('error');

nameInput.addEventListener('input', ()=>{
    validateName();
});

regisform.addEventListener('submit',(event)=>{
    if(!validateName());
    event.preventDefault;
});

function validateName(){
    if(nameInput === ''){
        nameError.textContent = 'Please enter your name!';
        return false;
    }
    else if((!/^[a-zA-Z\s]+$/.test(name))){
        nameError.textContent = 'Please enter a valid name!!';
        return false;
    }
    else{
        return true;
    }
}