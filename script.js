// Smooth scroll to section when clicking on navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Testimonial carousel
const testimonialContainer = document.querySelector('.testimonial-carousel');
const testimonials = document.querySelectorAll('.testimonial');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.style.display = 'block';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }
  showTestimonial(currentIndex);
});

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = testimonials.length - 1;
  }
  showTestimonial(currentIndex);
});
