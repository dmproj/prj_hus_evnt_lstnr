// Get the input elements
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

// Initialize a variable to hold the timeout ID
let timeoutId; 

// Add event listener to input elements
input1.addEventListener('input', (event) => {
  console.log(timeoutId)
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    sendFetchRequest(event);
  }, 1000); // Delay of 1 second (1000 milliseconds)
});

// input2.addEventListener('input', () => {
//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(() => {
//     sendFetchRequest();
//   }, 1000); // Delay of 1 second (1000 milliseconds)
// });

// Function to send fetch request with input values
function sendFetchRequest(event) {
  console.log(event.target)
  const value1 = event.target.value;
  // const value2 = input2.value;
  
  // Send fetch request with input values
  fetch(`https://swapi.dev/api/people/?search=${value1}`, {
    method: 'GET'
  })
  .then(response => response.text())
  .then(data => {
    // Update the output container with the fetched data
    const outputContainer = document.querySelector('#output');
    outputContainer.innerHTML = data;
  })
  .catch(error => console.error(error));
}
