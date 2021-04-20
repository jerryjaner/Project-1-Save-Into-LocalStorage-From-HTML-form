// variable
const tweetList = document.getElementById('tweet-list');

// Event Listeners
  eventListeners();

  function eventListeners(){
      // Form submission
      document.querySelector('#form').addEventListener('submit', newTweet);
      
      // Removed tweet from the list
      tweetList.addEventListener('click',removeTweet);

      //Document
      document.addEventListener('DOMContentLoaded',localStorageOnLoad);
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
    
    // add to local storage
    addTweetLocalStorage(tweet);
}

// Removes the tweet from the DOM
function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
       e.target.parentElement.remove();
    }

    // remove from storage
    removeTweetLocalStorage(e.target.parentElement.textContent);
  
}
// Adds the tweets into the local storage
function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromStorage();

    // Add the tweet into the array
    tweets.push(tweet);

    // convert tweet array into string 
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

function getTweetsFromStorage(){
    let tweets;
    const tweetsLS = localStorage.getItem('tweets'); 
    // get the values, if null returned then we create empty array
    if(tweetsLS === null){
        tweets =[];
    }
    else{
        tweets = JSON.parse(tweetsLS);
    }
    return tweets;
}
//  Prints local Storage tweeet  on load

function localStorageOnLoad(){
    let tweets = getTweetsFromStorage();

      // loop throught storage and then print the  value
      tweets.forEach(function(tweet){
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
    
        });
}

// removes thetweet from local storage
function removeTweetLocalStorage(tweet){
    // get tweets from storage
     let tweets = getTweetsFromStorage();

     // remove X from the tweet
     const tweetDelete = tweet.substring(0, tweet.length -1);
    
     // loop throught the tweets and remove the tweet that's equal
     tweets.forEach(function(tweetLS){
        if(tweetDelete === tweetLS){
            console.log('yes');
        }
     
     });

}