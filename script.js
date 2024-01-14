const OPENAI_API_KEY = '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'; // Replace with your actual API key
const chatDisplay = document.getElementById('chat-display');
const userInput = document.getElementById('user-input');

function sendMessage() {
    const userMessage = userInput.value;
    displayMessage('user', userMessage);
    userInput.value = '';

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
    .then(response => response.json())
    .then(data => {
        const botMessage = data.choices[0].text.trim();
        displayMessage('bot', botMessage);
    })
    .catch(error => console.error('Error:', error));
}

function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    chatDisplay.appendChild(messageElement);
}
