// Function to handle the "Yes, I would love to" button click
function acceptInvitation() {
    // Redirect to another page (places.html)
    location.href = "places.html";
}

// Function to handle the "No, I don't want to" button click
function rejectInvitation() {
    // Disable the original buttons
    document.querySelector('.invitation-button').disabled = true;
    document.querySelector('.no-button').disabled = true;

    // Create a new random button that will appear on the screen
    createRandomButton();
}

// Array of random phrases for the button
const randomPhrases = [
    "Are you really sure?",
    "Come on, don't be shy!",
    "You can't resist!",
    "Please say yes!",
    "I know you'll love it!",
    "One more chance?",
    "Don't you want a date with me?",
    "I promise it'll be fun!",
    "Come on, it's a date!",
    "Just say yes!"
];

// Function to create a random button that appears at random positions
function createRandomButton() {
    const randomButton = document.createElement('button');
    randomButton.classList.add('random-button');

    // Pick a random phrase from the array
    const randomText = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
    randomButton.innerHTML = randomText;

    // Set random position on the screen
    randomButton.style.left = `${Math.random() * (window.innerWidth - 150)}px`; // Random horizontal position
    randomButton.style.top = `${Math.random() * (window.innerHeight - 50)}px`;  // Random vertical position

    // Add the button to the body
    document.body.appendChild(randomButton);

    // Add event listener to the random button to allow the user to stop the randomness
    randomButton.addEventListener('click', () => {
        // Remove the random button once clicked
        randomButton.remove();

        // Enable the original buttons again
        document.querySelector('.invitation-button').disabled = false;
        document.querySelector('.no-button').disabled = false;
    });
}
// Function to handle place selection
function selectPlace(placeName) {
    // Show the budget input slider after a place is selected
    alert(`You selected: ${placeName}`);
    
    // Redirect to the celebration page after a place is selected
    window.location.href = "celebration.html";
}

// Function to update the budget value as the user slides
document.getElementById('budget-range').addEventListener('input', function() {
    document.getElementById('budget-value').textContent = this.value; // Update the display value
});

// Function to submit the selected budget
function submitBudget() {
    const budget = document.getElementById('budget-range').value;
    alert('Your selected budget is: $' + budget);
    
    // Redirect to the celebration page after submission
    window.location.href = "celebration.html";
}
