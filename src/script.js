// Smooth scrolling to the product section
document.getElementById('produkLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute('href'); // Get the target ID from the href
    const targetElement = document.querySelector(targetId); // Select the target element
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY; // Get the target position
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth' // Add smooth scrolling effect
    });
});

const text = "Beauty Booquet";
const typingEffectElement = document.getElementById("typing-effect");
let index = 0;
let typingDirection = 1; // 1 for typing, -1 for deleting

function type() {
    // Clear the content before starting the typing animation
    if (index === 0 && typingDirection === -1) {
        typingEffectElement.innerHTML = '';
    }
    
    if (typingDirection === 1) {
        if (index < text.length) {
            typingEffectElement.innerHTML += text.charAt(index);
            index++;
        } else {
            typingDirection = -1; // Start deleting
        }
    } else {
        if (index > 0) {
            typingEffectElement.innerHTML = typingEffectElement.innerHTML.slice(0, -1);
            index--;
        } else {
            typingDirection = 1; // Start typing again
        }
    }
    setTimeout(type, typingDirection === 1 ? 500 : 50); // Set typing and deleting speed
}
type();

function smoothScrollTo(targetElement, duration) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) { // Ease-in-out function
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Event listeners for both produkLink and locationLink
document.getElementById('produkLink').addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    smoothScrollTo(targetElement, 1000); // 1000 ms for 1 second duration
});

document.getElementById('locationLink').addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    smoothScrollTo(targetElement, 1000); // 1000 ms for 1 second duration
});
