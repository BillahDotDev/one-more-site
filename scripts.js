// Gallery Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
});

document.getElementById('prev').addEventListener('click', function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
});

function updateSlider() {
    const offset = -currentSlide * 100;
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.transform = `translateX(${offset}%)`;
    }
}

// Form Validation
function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('form-response').textContent =
            'Thank you for your message! We will get back to you soon.';
        document.getElementById('form-response').style.color = 'green';
        document.getElementById('contact-form').reset(); // Reset form after submission
    } else {
        document.getElementById('form-response').textContent =
            'Please fill out all fields.';
        document.getElementById('form-response').style.color = 'red';
    }
}
