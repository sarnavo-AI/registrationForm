$(document).ready(function() {
    document.getElementById('showPassword').addEventListener('click', function() {
        const passInput = document.getElementById('inputPassword');
        const passStatus = document.getElementById('showPassword');
    
        if(passInput.type == 'text') {
            passInput.type = 'password';
            passStatus.className = 'fa fa-eye';
        } else {
            passInput.type = 'text';
            passStatus.className = 'fa fa-eye-slash';
        }
    })
})