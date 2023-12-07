document.addEventListener('DOMContentLoaded', function () {
    const keyOutput = document.getElementById('keyOutput');

	function generateRandomKey(prefix = "Creal - ", keyLength = 32) {
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	  
		const randomBytes = crypto.getRandomValues(new Uint32Array(keyLength));
	  
		const randomKey = Array.from(randomBytes).map((byte) => characters[Math.floor(byte / (0xffffffff / characters.length))]).join("");
	  
		return prefix + randomKey;
	  }
	  

    function copyToClipboard() {
        const keyText = keyOutput.innerText;
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = keyText;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
        alert('Key copied to clipboard!');
    }

    // Generate a key when the page loads
    const initialKey = generateRandomKey();
    keyOutput.innerText = initialKey;
});
