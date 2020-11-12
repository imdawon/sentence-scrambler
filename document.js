// All DOM values we need to access later
let inputForm = document.getElementById('sentence-input');
let renderedText = document.getElementById('scrambled-text');

// When the randomize sentence button is clicked, run main function
document.getElementById('randomize-btn').addEventListener('click', function (e) {
    e.preventDefault();
    renderedText.textContent = main(inputForm.value);
});