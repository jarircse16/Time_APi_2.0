function fetchHello() {
    fetch('http://127.0.0.1/php_api/time_api.php?endpoint=hello')
        .then(response => response.json())
        .then(data => {
            console.log('Response:', data);  // Log the response to the console
            const messageElement = document.getElementById('result');

            // Check if data and message are defined
            if (data && data.message !== undefined) {
                messageElement.innerHTML = `Name: ${data.message}`;
            } else {
                messageElement.innerHTML = 'Error: Invalid response';
            }
        })
        .catch(error => console.error('Error:', error));
}

fetchHello();
