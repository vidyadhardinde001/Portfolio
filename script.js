document.addEventListener("DOMContentLoaded", function() {
    const profileIcon = document.getElementById("profileIcon");
    const summaryBox = document.getElementById("summaryBox");
  
    profileIcon.addEventListener("click", function() {
      if (summaryBox.style.display === "none" || summaryBox.style.display === "") {
        summaryBox.style.display = "block";
      } else {
        summaryBox.style.display = "none";
      }
    });
  
    // Optional: Hide the summary box if clicking outside of it
    document.addEventListener("click", function(event) {
      if (!summaryBox.contains(event.target) && event.target !== profileIcon) {
        summaryBox.style.display = "none";
      }
    });
  });

  
  // Pause and play video on hover
document.querySelectorAll('.blender-project video').forEach(video => {
    video.addEventListener('mouseover', function() {
      this.play();
    });
  
    video.addEventListener('mouseout', function() {
      this.pause();
    });
  });

  
  document.addEventListener("mousemove", function(event) {
    var bubble = document.querySelector(".cursor-bubble");
    bubble.style.display = "block";
    bubble.style.left = event.clientX + "px";
    bubble.style.top = event.clientY + "px";

    // Check if the cursor is over a clickable item (e.g., links or buttons)
    var clickableItems = document.querySelectorAll("a, button");
    for (var i = 0; i < clickableItems.length; i++) {
        var rect = clickableItems[i].getBoundingClientRect();
        if (
            event.clientX > rect.left &&
            event.clientX < rect.right &&
            event.clientY > rect.top &&
            event.clientY < rect.bottom
        ) {
            bubble.style.transform = "scale(1.5)"; // Scale the bubble
        } else {
            bubble.style.transform = "scale(1)"; // Reset to normal size
        }
    }
});

// Adjust bubble position on scroll
window.addEventListener("scroll", function() {
    var bubble = document.querySelector(".cursor-bubble");
    bubble.style.display = "none"; // Hide the bubble on scroll
});
