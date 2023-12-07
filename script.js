document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const keyOutput = document.getElementById('keyOutput');

    generateBtn.addEventListener('click', function () {
        const randomKey = generateRandomKey();
        keyOutput.value = randomKey;
        generateBtn.style.display = 'none';
        keyOutput.style.height = '150px'; // Adjust the height as needed
        keyOutput.style.marginTop = '0'; // Remove the top margin
    });

    function generateRandomKey() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const keyLength = 20;
        let randomKey = 'Creal - ' + '';

        for (let i = 0; i < keyLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomKey += characters.charAt(randomIndex);
        }

        return randomKey;
    }
});
