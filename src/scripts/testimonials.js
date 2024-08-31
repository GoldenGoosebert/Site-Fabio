
let currentIndex = 0; // Track the current testimonial index
const testimonials = document.querySelectorAll('.testimonial'); // Get all testimonials
const totalTestimonials = testimonials.length; // Get the total number of testimonials

function showTestimonial(index) {
  // Hide all testimonials
  testimonials.forEach((testimonial, idx) => {
    testimonial.classList.remove('active');
    testimonial.style.opacity = 0; // Hide all testimonials
  });

  // Show the selected testimonial
  testimonials[index].classList.add('active');
  testimonials[index].style.opacity = 1; // Show the active testimonial
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % totalTestimonials; // Cycle forward
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials; // Cycle backward
  showTestimonial(currentIndex);
}

// Initialize the first testimonial to be shown
showTestimonial(currentIndex);
