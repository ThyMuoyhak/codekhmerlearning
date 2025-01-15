const texts = [
    'cout << "សូមស្វាគមន៍មកកាន់ CodeKhmerLearning";', 
    'cout << "រីករាយក្នុងការរៀនសរសេរកូដ";'
];
let currentText = 0;
let charIndex = 0;
const typewriterElement = document.getElementById('typewriter');

function typeText() {
    if (charIndex < texts[currentText].length) {
        typewriterElement.textContent += texts[currentText].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        // Wait for a while before switching text
        setTimeout(() => {
            currentText = (currentText + 1) % texts.length;
            charIndex = 0;
            typewriterElement.textContent = ''; // Clear the previous text
            typeText(); // Start typing the next text
        }, 1500);
    }
}

// Start typing
typeText();