// set the timer increment to every second once the page has loaded
//Manually increment and decrement the counter using the plus and minus buttons
document.addEventListener('DOMContentLoaded', function() {
    let timer = document.getElementById('counter');
    let count = 0;
    let timerInterval;
  
    // Function to start the timer
    function startTimer() {
      timerInterval = setInterval(() => {
        count++;
        timer.textContent = count;
      }, 1000);
    }
  
    // Function to pause the timer
    function pauseTimer() {
      clearInterval(timerInterval);
    }
  
    // Function to resume the timer
    function resumeTimer() {
      startTimer();
    }
  
    // Start the timer on page load
    startTimer();
  
    // Event listener for plus button
    document.getElementById('plus').addEventListener('click', function() {
      count++;
      timer.textContent = count;
    });
  
    // Event listener for minus button
    document.getElementById('minus').addEventListener('click', function() {
      count--;
      timer.textContent = count;
    });
  
    // Event listener for like button
    document.getElementById('heart').addEventListener('click', function() {
      let likeList = document.querySelector('.likes');
      if (!likeList.querySelector(`[data-num="${count}"]`)) {
        let like = document.createElement('li');
        like.setAttribute('data-num', count);
        like.textContent = `${count} has been liked 1 time`;
        likeList.appendChild(like);
      } else {
        let existingLike = likeList.querySelector(`[data-num="${count}"]`);
        let currentLikes = parseInt(existingLike.textContent.split(' ')[3]);
        currentLikes++;
        existingLike.textContent = `${count} has been liked ${currentLikes} times`;
      }
    });
  
    // Event listener for pause button
    document.getElementById('pause').addEventListener('click', function() {
      if (this.textContent === 'pause') {
        pauseTimer();
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('heart').disabled = true;
        this.textContent = 'resume';
      } else {
        resumeTimer();
        document.getElementById('plus').disabled = false;
        document.getElementById('minus').disabled = false;
        document.getElementById('heart').disabled = false;
        this.textContent = 'pause';
      }
    });
  
    // Event listener for submit button (comment functionality)
    document.getElementById('comment-form').addEventListener('submit', function(event) {
      event.preventDefault();
      let commentInput = document.getElementById('comment-input');
      let commentText = commentInput.value.trim();
      if (commentText !== '') {
        let commentList = document.getElementById('list');
        let newComment = document.createElement('p');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = '';
      }
    });
  });