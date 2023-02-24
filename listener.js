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
    // Get the values of the input fields
    const value1 = input1.value;
    const value2 = input2.value;

    // Send fetch request with input values
    fetch('http://example.com', {
      method: 'POST',
      body: JSON.stringify({ value1, value2 })
    })
    .then(response => response.json())
    .then(data => console.log(data))
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