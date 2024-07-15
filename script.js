document.addEventListener('DOMContentLoaded', function() {
    let currentSongIndex = -1;
    const audioPlayer = document.getElementById('audio-player');
    const nowPlaying = document.getElementById('now-playing');
    const playlistItems = document.querySelectorAll('#playlist li');

    function selectSong(index) {
        currentSongIndex = index;
        const song = playlistItems[currentSongIndex].getAttribute('data-src');
        audioPlayer.src = song;
        nowPlaying.textContent = 'Now playing: ' + playlistItems[currentSongIndex].textContent;
        audioPlayer.play();
    }

    function playNext() {
        if (currentSongIndex < playlistItems.length - 1) {
            selectSong(currentSongIndex + 1);
        }
    }

    function playPrev() {
        if (currentSongIndex > 0) {
            selectSong(currentSongIndex - 1);
        }
    }

    function stopSong() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        nowPlaying.textContent = 'Now playing: None';
    }

    document.getElementById('play').addEventListener('click', function() {
        if (currentSongIndex === -1 && playlistItems.length > 0) {
            selectSong(0);
        } else {
            audioPlayer.play();
        }
    });

    document.getElementById('pause').addEventListener('click', function() {
        audioPlayer.pause();
    });

    document.getElementById('stop').addEventListener('click', stopSong);

    document.getElementById('next').addEventListener('click', playNext);

    document.getElementById('prev').addEventListener('click', playPrev);

    playlistItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            selectSong(index);
        });
    });
});

