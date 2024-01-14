const OPENAI_API_KEY = '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'; // Replace with your actual API key
const chatDisplay = document.getElementById('chat-display');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value;
    displayMessage('user', userMessage);
    userInput.value = '';

    // Display loading indicator
    displayMessage('bot', '...');

    // Call OpenAI API to get the model's response
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            prompt: userMessage,
            max_tokens: 150
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const botMessage = data.choices[0].text.trim();

        // Simulate a delay before displaying the bot's message
        setTimeout(() => {
            displayMessage('bot', botMessage);
        }, 1000); // Adjust the delay time as needed
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('bot', 'Sorry, an error occurred while processing your request.');
    });
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatDisplay.appendChild(messageElement);
}
