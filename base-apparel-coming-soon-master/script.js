


let errorMsg = document.getElementById('error-msg')
let errorSign = document.getElementById('error-sign')
let form = document.getElementById('form')

function submit() {
    let email = document.getElementById("email").value;
    if (email.includes('@')) {
         errorMsg.style.display = "none";
         errorSign.style.display = "none";
         email = "a";
        alert('successful')      
    } else {
        errorMsg.style.display = 'block';
        errorSign.style.display = 'block';
        form.style.border = "2px solid hsl(0, 93%, 68%)";

    }

    // alert(email)
    
}