document.addEventListener("DOMContentLoaded", function () {
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");

  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() == "") {
      mostrarAlerta();
    } else {
      console.log("mensaje", e.target.value);
    }
  }
});

function mostrarAlerta() {
  const error = document.createElement("P");
  error.textContent = "Ha surgido un imprevisto";
  error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

  formulario.appendChild(error);
}
