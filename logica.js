// Función para encriptar el texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

// Agregar eventos a los botones
document.getElementById("encriptar").addEventListener("click", function() {
    let texto = document.getElementById("texto-encriptar/desencriptar").value;
    let resultado = encriptarTexto(texto);

    // Ocultar la imagen y el mensaje de "Ningún mensaje fue encontrado", mostrar el resultado
    document.querySelector(".candado").style.display = 'none';
    document.getElementById("mensaje-no-encontrado").style.display = 'none';
    document.getElementById("resultado").style.display = 'block';
    document.getElementById("resultado").textContent = resultado;
});

document.getElementById("desencriptar").addEventListener("click", function() {
    let texto = document.getElementById("texto-encriptar/desencriptar").value;
    let resultado = desencriptarTexto(texto);

    // Ocultar la imagen y el mensaje de "Ningún mensaje fue encontrado", mostrar el resultado
    document.querySelector(".candado").style.display = 'none';
    document.getElementById("mensaje-no-encontrado").style.display = 'none';
    document.getElementById("resultado").style.display = 'block';
    document.getElementById("resultado").textContent = resultado;
});
