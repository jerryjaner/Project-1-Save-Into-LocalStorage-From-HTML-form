// variable
const tweetList = document.getElementById('tweet-list');

// Event Listeners
  eventListeners();

  function eventListeners(){
      // Form submission
        document.querySelector('#form').addEventListener('submit', newTweet);
  }

// Function
function newTweet(e){
    e.preventDefault();

    // Read the textarea value
    const tweet = document.getElementById('tweet').value;

    // create the remove button
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    // create an <li> element
    const li = document.createElement('li');
    li.textContent = tweet; 
   

    // Add the remove button to each tweet
    li.appendChild(removeBtn);

    //add to the list
    tweetList.appendChild(li);

}