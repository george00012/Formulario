const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('contraseña').value;
    const genero = document.getElementById('genero').value;
    const intereses = document.getElementById('intereses').value;

    if (!nombre || !email || !contraseña || !genero || !intereses.trim().length) {
        document.querySelector(".intereses").innerHTML = `Por favor, rellene todos los campos del formulario.`;
    }

});