setTimeout(function() {
    // Hide the preloader
    document.getElementById('preloader').style.display = 'none';
    
    // Show the content with a fade-in effect
    document.querySelector('.content').style.opacity = '1';
  }, 4000); // 3000 milliseconds = 3 seconds