const form = document.querySelector('.section-right__content');

form.addEventListener('submit', function(e){
    e.preventDefault();
});

function limparDados(){
    const email = document.getElementById('email').value = '';

    const senha = document.getElementById('password').value = '';

    const lembrar = document.getElementById('remember').checked = false;
}

function pegaDados(){
    const email = document.getElementById('email').value;

    const senha = document.getElementById('password').value;

    const lembrar = document.getElementById('remember').checked;

    const usuario = {
        email: email,
        senha: senha,
        lembrar: lembrar
    }

    console.log(usuario);

    limparDados()
}