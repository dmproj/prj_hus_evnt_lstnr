// Get the button element and input elements
const button = document.querySelector('#myButton');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

// Initialize a variable to hold the timeout ID
let timeoutId;

// Add event listener to button element
button.addEventListener('click', () => {
  // Clear any previously set timeouts
  clearTimeout(timeoutId);

  // Set a new timeout to delay the fetch request by 1 second
  timeoutId = setTimeout(() => {
    // Send GET request to SWAPI
    fetch('https://swapi.dev/api/people/', {
      method: 'GET'
    })
    .then(response => response.text()) // convert response to text
    .then(data => {
      // Display the response data as HTML
      console.log(data)
      // const output = document.querySelector('#output');
      // output.innerHTML = data;
    })
    .catch(error => console.error(error));
  }, 1000); // Delay of 1 second (1000 milliseconds)
});

// Add event listener to input elements to clear the timeout when they are changed
input1.addEventListener('input', () => {
  clearTimeout(timeoutId);
});

input2.addEventListener('input', () => {
  clearTimeout(timeoutId);
});
