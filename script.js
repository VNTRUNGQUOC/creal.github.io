$(document).ready(function() {
    const form = $('#chat-form');
    const chatHistory = $('#chat-history');

    form.submit(function(event) {
        event.preventDefault();
        const message = $('#message').val();
        $('#message').val(''); // Clear input

        displayMessage('user', message);

        fetch('/get_response', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                displayMessage('error', data.error);
            } else {
                displayMessage('bot', data.response);
            }
        })
        .catch(error => {
            displayMessage('error', 'Error communicating with chatbot.');
        });
    });

    function displayMessage(type, message) {
        chatHistory.append(`<li class="${type}">${message}</li>`);
        chatHistory.scrollTop(chatHistory[0].scrollHeight); // Scroll to bottom
    }
});
