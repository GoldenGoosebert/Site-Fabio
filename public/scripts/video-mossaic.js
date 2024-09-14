document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll(".video-mosaic video");

  videos.forEach((video) => {
    // Event listener for mouse hover
    video.addEventListener("mouseenter", () => {
      video.currentTime = 0; // Start video from the beginning
      video.play(); // Play the video when hovered
    });

    // Event listener for mouse leave
    video.addEventListener("mouseleave", () => {
      video.pause(); // Pause the video when mouse leaves
      video.currentTime = 0; // Reset to the beginning
    });

    // Loop the video based on custom time duration
    const loopDuration = 5; // Define how long in seconds before the video loops
    setInterval(() => {
      if (video.currentTime >= loopDuration) {
        video.currentTime = 0; // Reset the video time
      }
    }, 1000); // Check every second
  });
});
