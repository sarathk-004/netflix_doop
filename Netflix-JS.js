document.addEventListener('DOMContentLoaded', function () {
    // Plain JavaScript for handling unmute/mute button click
    var audioControlButton = document.getElementById('audio-control');
    var myMovie = document.getElementById('myMovie');
    var soundIcon = document.getElementById('audio-control');

    // Flag to determine whether the video should be automatically muted
    var autoMute = false;

    // Function to mute the video and update the icon
    function muteVideo() {
        myMovie.muted = true;
        soundIcon.src = 'muted-icon.png';
    }

    // Function to unmute the video and update the icon
    function unmuteVideo() {
        myMovie.muted = false;
        soundIcon.src = 'icons8-sound-50.png';
    }

    // Function to fade out the audio over time
    function fadeOutAudio() {
        var fadeDuration = 10; // Fade duration in seconds
        var fadeInterval = 50; // Interval for fading in milliseconds
        var steps = fadeDuration * 1000 / fadeInterval;
        var volumeStep = myMovie.volume / steps;

        var fadeOutInterval = setInterval(function () {
            if (myMovie.volume > 0) {
                myMovie.volume -= volumeStep;
            } else {
                // Stop the video and clear the interval when fading is complete
                myMovie.pause();
                clearInterval(fadeOutInterval);
            }
        }, fadeInterval);
    }

    // Event listener for scroll events
    document.addEventListener('scroll', function () {
        // Check if the user has scrolled past a certain point (adjust as needed)
        if (window.scrollY > 200) {
            autoMute = true;
            muteVideo();
            // Start fading out audio after 10 seconds
            setTimeout(fadeOutAudio, 10000);
        } else {
            autoMute = false;
            unmuteVideo();
        }
    });

    // Event listener for user interaction (play/pause events)
    myMovie.addEventListener('play', function () {
        // If the video is played by user interaction, unmute it
        if (!autoMute) {
            unmuteVideo();
        }
    });

    myMovie.addEventListener('pause', function () {
        // If the video is paused by user interaction, mute it
        if (!autoMute) {
            muteVideo();
        }
    });

    // Event listener for unmute/mute button click
    audioControlButton.addEventListener('click', function () {
        // Toggle the mute state based on user interaction
        myMovie.muted = !myMovie.muted;
        soundIcon.src = myMovie.muted ? 'muted-icon.png' : 'icons8-sound-50.png';
    });
});

// var liftMovie = document.getElementById('lift-movie').addEventListener('mouseover')
const image1 = document.getElementById('lift-movie');
const video1 = document.getElementById('lift-movie-clip');

// Add event listeners for mouseover and mouseout
image1.addEventListener('mouseover', () => {
  image1.style.display = 'none';
  video1.style.display = 'block';
  // Start playing the video
  video1.play();
});

video1.addEventListener('mouseout', () => {
  // On mouseout, hide the video and display the image
  video1.style.display = 'none';
  image1.style.display = 'block';
  video1.pause();
});

const image2 = document.getElementById('swat-movie');
const video2 = document.getElementById('swat-movie-clip');

// Add event listeners for mouseover and mouseout
image2.addEventListener('mouseover', () => {
  image2.style.display = 'none';
  video2.style.display = 'block';
  // Start playing the video
  video2.play();
});

video2.addEventListener('mouseout', () => {
  // On mouseout, hide the video and display the image
  video2.style.display = 'none';
  image2.style.display = 'block';
  video2.pause();
});


