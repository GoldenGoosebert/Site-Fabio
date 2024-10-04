 document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll(".video-mosaic video");
  const videos2 = document.querySelectorAll(".video-mosaic-2 video");

  videos.forEach((video) => {
    // Event listener for mouse hover
    video.addEventListener("mouseenter", () => {
      video.currentTime = 0; // Start video from the beginning
      video.play(); // Play the video when hovered
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    const loopDuration = 5;
    setInterval(() => {
      if (video.currentTime >= loopDuration) {
        video.currentTime = 0;
      }
    }, 1000);
  });
  videos2.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      video.currentTime = 0;
      video.play();
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
    });

    const loopDuration = 5;
    setInterval(() => {
      if (video.currentTime >= loopDuration) {
        video.currentTime = 0;
      }
    }, 1000);
  });
});
