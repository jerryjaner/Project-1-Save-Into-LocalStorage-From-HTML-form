// variable


// Event Listeners
  eventListeners();

  function eventListeners(){
      // Form submission
        document.querySelector('#form').addEventListener('submit', newTweet);
  }

// Function
function newTweet(e){
    e.preventDefault();
    console.log('Form submitted');
}