// Array of colors to switch between
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF5'];

document.getElementById('color-button').addEventListener('click', function() {
    // Select a random color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
});
