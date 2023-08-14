const playButton = document.getElementById('playButton');
const audioElement = document.getElementById('myAudio');

playButton.addEventListener('click', function() {
    audioElement.play();
});