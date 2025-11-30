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