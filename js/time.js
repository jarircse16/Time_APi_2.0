
// Fetch Time Using Fetch

/*function fetchTime() {
    fetch('http://127.0.0.1/php_api/time_api.php?endpoint=time') // fetch the JSON encoded response
        .then(response => response.json())
        .then(data => {
            //this goes to the div tag in frontend when div id is time
            const timeElement = document.getElementById('time'); //parse the data from the array matching the string time.

            timeElement.innerHTML = `Current Time: ${data.time}`; // showing the data from the array that is in the RHS of time.
        })
        .catch(error => console.error('Error:', error)); // If no data found , show error!
}

fetchTime(); //initially calls the function
setInterval(fetchTime, 1000); // calls the function once per second
*/

// Fetch Time Using Axios
// Wrap your code in a function to ensure it runs after the page is loaded

document.addEventListener('DOMContentLoaded', function () {
    fetchTimeWithAxios();
});

function fetchTimeWithAxios() {
    axios.get('http://127.0.0.1/php_api/time_api.php', {
        params: {
            endpoint: 'time'
        }
    })
    .then(response => {
        // Check if the response contains the expected 'time' property
        if (response.data && response.data.time !== undefined) {
            const timeElement = document.getElementById('time');
            timeElement.innerHTML = `Current Time: ${response.data.time}`;
        } else {
            console.error('Error: Invalid response format');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
fetchTimeWithAxios(); //initially calls the function
setInterval(fetchTimeWithAxios, 1000); // calls the function once per second
