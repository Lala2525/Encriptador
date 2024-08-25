document.getElementById("campo").addEventListener("input", function () {
  const textarea = document.getElementById("campo");
  const error = document.getElementById("error");
  const value = textarea.value;

  // Expresión regular para detectar mayúsculas o caracteres especiales
  const invalidCharRegex = /[A-Z!@#$%^&*()_+={}\[\]|\\:";'<>?,./`~]/;

  if (invalidCharRegex.test(value)) {
    error.style.display = "inline";
  } else {
    error.style.display = "none";
  }
});

function encriptar() {
  const texto = document.getElementById("campo").value;
  const textoEncriptado = btoa(texto);

  const invalidCharRegex = /[A-Z!@#$%^&*()_+={}\[\]|\\:";'<>?,./`~]/;
  if (invalidCharRegex.test(texto)) {
    alert("!Solo letras minúsculas y sin acentos");
    return;
  }

  document.getElementById("hijo2").classList.remove("card-sin-datos");
  document.getElementById("hijo2").classList.add("card-con-datos");

  document.getElementById("sin-datos").style.display = "none";
  document.getElementById("con-datos").style.display = "";
  document.getElementById("resultado-datos").textContent = textoEncriptado;
}

function desencriptar() {
  const texto = document.getElementById("campo").value;
  const textoDesencriptado = atob(texto);

  if (invalidCharRegex.test(texto)) {
    alert("!Solo letras minúsculas y sin acentos");
    return;
  }

  document.getElementById("hijo2").classList.remove("card-sin-datos");
  document.getElementById("hijo2").classList.add("card-con-datos");

  document.getElementById("sin-datos").style.display = "none";
  document.getElementById("con-datos").style.display = "";
  document.getElementById("resultado-datos").textContent = textoDesencriptado;
}
