const image = document.getElementById('image');
const btnPantalla = document.getElementById('btnPantalla')

function playSonic() {
    image.className = 'visible'
}

btnPantalla.addEventListener('click', playSonic)

