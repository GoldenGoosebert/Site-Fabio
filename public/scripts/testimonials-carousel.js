 document.addEventListener("DOMContentLoaded", function () {
  let currentIndex = 0; 
  const testimonials = document.querySelectorAll(".testimonial"); 
  const totalTestimonials = testimonials.length; 
  const transitionDuration = 500; 
  const autoScrollInterval = 5000; 
  let autoScroll; 

  
  function showTestimonial(index) {
    
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove("active");
      testimonial.style.opacity = 0; 
    });

    
    setTimeout(() => {
      testimonials.forEach((testimonial) => {
        testimonial.style.display = "none";
      });

      testimonials[index].style.display = "block";
      setTimeout(() => {
        testimonials[index].style.opacity = 1; 
      }, 50);
    }, transitionDuration);
  }

  
  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
  }

  
  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentIndex);
  }

  
  function startAutoScroll() {
    autoScroll = setInterval(nextTestimonial, autoScrollInterval);
  }

  
  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  
  showTestimonial(currentIndex);
  startAutoScroll(); 

    document.querySelector(".prev-btn").addEventListener("click", function () {
      stopAutoScroll();     
      prevTestimonial();
      startAutoScroll(); 
  });

  document.querySelector(".next-btn").addEventListener("click", function () {
    stopAutoScroll(); 
    nextTestimonial();
    startAutoScroll(); 
  });
});

