// Validación del formulario de contacto

const formContacto = document.getElementById("form-contacto");
const msgContacto = document.getElementById("msg-contacto");

formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validar campos vacíos
    if (nombre === "" || email === "" || mensaje === "") {
        msgContacto.textContent = "Por favor completá todos los campos.";
        msgContacto.style.color = "red";
        return;
    }

    // Validar email
    if (!email.includes("@") || email.length < 5) {
        msgContacto.textContent = "Ingresá un email válido.";
        msgContacto.style.color = "red";
        return;
    }

    // Todo correcto
    msgContacto.textContent = `¡Gracias ${nombre}! Tu mensaje fue recibido correctamente.`;
    msgContacto.style.color = "green";

    // Limpiar formulario
    formContacto.reset();
});