const videoThumbnail = document.querySelector('.video-thumbnail');
const popup = document.getElementById('popup');
const youtubeVideo = document.getElementById('youtube-video');
const closeBtn = document.querySelector('.close');

// When the thumbnail is clicked
videoThumbnail.addEventListener('click', () => {
    popup.classList.add('active');
    youtubeVideo.src = "https://www.youtube.com/embed/eq1WX1C3p_A?autoplay=1";  // Correct YouTube embed link
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
    youtubeVideo.src = ""; // Stop the video by resetting the src
});

// Close the popup when clicking outside the popup content
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.classList.remove('active');
        youtubeVideo.src = ""; // Stop the video
    }
});