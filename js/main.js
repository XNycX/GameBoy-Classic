const image = document.getElementById('image');
const pantallaDiv = document.getElementById('btnPantalla')

function playSonic() {
    image.className += 'visible'
}

pantallaDiv.addEventListener('click', playSonic)

