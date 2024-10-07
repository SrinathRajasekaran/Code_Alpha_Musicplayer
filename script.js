const audio = document.getElementById('audio');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playPauseBtn = document.getElementById('play-pause');

let isPlaying = false;
let currentSongIndex = 0;

const songs = [
    {
        title: 'Despacito',
        artist: 'Artist 1',
        src: 'music/song1.mp3'
    },
    {
        title: 'leeona',
        artist: 'Artist 2',
        src: 'music/song2.mp3'
    },
    {
        title: 'colourout',
        artist: 'Artist 3',
        src: 'music/song3.mp3'
    }
];

// Load the song details
function loadSong(songIndex) {
    title.textContent = songs[songIndex].title;
    artist.textContent = songs[songIndex].artist;
    audio.src = songs[songIndex].src;
}

// Play or pause the music
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '▶️';
    } else {
        audio.play();
        playPauseBtn.textContent = '⏸';
    }
    isPlaying = !isPlaying;
}

// Next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = '⏸';
    isPlaying = true;
}

// Previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.textContent = '⏸';
    isPlaying = true;
}

// Automatically load the first song on page load
loadSong(currentSongIndex);

