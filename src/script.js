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