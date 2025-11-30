//Boton para activar la opcion de aleatorio
const ramdonAction = document.getElementById('ramdonAction');
//Boton para activar la opcion de repetir
const repeatAction = document.getElementById('repeatAction');
//Span para el nombre de la cancion en el reproductor
const songNameElement = document.getElementById('songName');
//Span para el nombre del artista en el reproductor
const artistNameSongElement = document.getElementById('artistNameSong');
//Contenedor de la imagen de la cancion en el reproductor
const imgPlayerElement = document.getElementById('imgPlayer');
// contenedor lateral
const navbarLateral = document.getElementById("navbarLateral");
// Boton de accion abrir y cerrar menu
const headerToggle = document.getElementById("headerToggle");
//Boton para la navegacion al inicio
const navHome = document.getElementById('navHome');
//Boton para la navegacion a favoritos
const navFavoritos = document.getElementById('navFavoritos');

//Activar o desactivar la funcion de ramdon
ramdonAction.addEventListener('click', () => {
    ramdonAction.querySelector('svg').classList.toggle('activate-action');
})

//Activar o desactivar la funcion de repetir
repeatAction.addEventListener('click', () => {
    repeatAction.querySelector('svg').classList.toggle('activate-action');
})

//Funcion para darle play a una cancion
function playSong(e) {
    const parentAnchor = e.closest('.item-song');

    const songName = parentAnchor.querySelector('.info-song-container span:first-child').innerText;
    const artistName = parentAnchor.querySelector('.info-song-container span:last-child').innerText;
    const imgSrc = parentAnchor.querySelector('.portada-song-mini').getAttribute('src');

    songNameElement.innerText = songName;
    artistNameSongElement.innerText = artistName;
    imgPlayerElement.setAttribute('src', imgSrc);
}

// Cambiar la duracion de la cancion
function changeDuration(duration) {
    const totalDuration = document.getElementById('totalDuration');
    totalDuration.innerText = duration;
}

// Pasar a al siguiente cancion
function nextTrack() {
    songNameElement.innerText = "Nombre Cancion 11";
    imgPlayerElement.setAttribute('src', './img/imagen-song-11.png');
    changeDuration("04:11");
}

//Volver a la cancion anterior
function beforeTrack() {
    songNameElement.innerText = "Nombre cancion";
    imgPlayerElement.setAttribute('src', 'img/imagen-player-1.png');
    changeDuration("03:48");
}

// Pausar o despusar la cancion actual del reproductor
function playPause(button) {
    const img = button.querySelector('img');
    if (img.src.includes('pause-icon.svg')) {
        img.setAttribute('src', 'img/play-icon.svg');
    } else {
        img.setAttribute('src', 'img/pause-icon.svg');
    }
}

//Abrir o cerrar menu lateral de navegacion
headerToggle.addEventListener("click", function () {
    navbarLateral.classList.toggle("open-lateral");
    headerToggle.classList.toggle('open-lateral');

    const listItems = document.getElementsByClassName('navbar-lateral-list-item');
    for (const item of listItems) {
        item.classList.toggle("open-lateral");
    }

    const itemsText = document.getElementsByClassName('item-text');
    for (const item of itemsText) {
        item.classList.toggle("open-lateral");
    }
});

//Activar los contenedores de la pestaña de inicio
navHome.addEventListener('click', () => {
    songsContent.classList.add('show-content');
    albumesContent.classList.add('show-content');
    favoritesContent.classList.remove('show-content');
    albumDataContent.classList.remove('show-content');
})

//Activar el contenedor de la pestaña de favoritos
navFavoritos.addEventListener('click', () => {
    songsContent.classList.remove('show-content');
    albumesContent.classList.remove('show-content');
    favoritesContent.classList.add('show-content');
    albumDataContent.classList.remove('show-content');
})