 const togglerbtn = document.querySelector(".passToggler button")
 const passwordinput = document.querySelector(".passToggler input")
 const passToggler = () =>{
    
    if(passwordinput.type == 'password'){
        passwordinput.type = 'text';
         togglerbtn.innerHTML = '<i class="bi bi-eye"></i>'
    }
    else{
        passwordinput.type = 'password';
        togglerbtn.innerHTML = '<i class="bi bi-eye-slash"></i></span>'
    }
 }
 togglerbtn.addEventListener('click', passToggler);
   
 const showbtn = () => {
    if (passwordinput.value.length >= 1) {
        togglerbtn.classList.add('show');
    } else {
        togglerbtn.classList.remove('show');
    }
 }
 passwordinput.addEventListener('keyup',showbtn )
