  (() => {
    console.log('fired!');

    let audioEl = document.querySelector('audio'),
        pauseButton = document.querySelector('#pause'),
        playButton = document.querySelector('#play'),
        loadButton = document.querySelector('#loadMore');

    function pauseAudio() {
      audioEl.pause();
    }

    function playAudio() {
      audioEl.play();
    }

    function logEnded() {
      console.log("done!");
    }

    function loadAudioTrack() {
      //set audio source
      audioEl.src = "audio/STP_Interstate_Love_Song.mp3"

      //load and play
      audioEl.load();
      audioEl.play();
    }

    audioEl.addEventListener("ended", logEnded);
    pauseButton.addEventListener("click", pauseAudio);
    playButton.addEventListener("click", playAudio);
    loadButton.addEventListener("click", loadAudioTrack);
})();
