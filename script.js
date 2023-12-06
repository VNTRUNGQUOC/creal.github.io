document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const keyOutput = document.getElementById('keyOutput');

    generateBtn.addEventListener('click', function () {
        const randomKey = generateRandomKey();
        keyOutput.value = randomKey;
    });

    function generateRandomKey() {
        // This is a simple example. In a real-world scenario, use a secure method to generate keys.
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const keyLength = 16;
        let randomKey = 'Creal - ' + '';

        for (let i = 0; i < keyLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomKey += characters.charAt(randomIndex);
        }

        return randomKey;
    }
});
