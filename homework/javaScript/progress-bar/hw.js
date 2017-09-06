// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  // 1. The Numeric Display
  // Your first priority will be to show the current value left on the clock. Every time the countdown value updates, the numeric display will need to update as well. The function you'll be writing to implement this is drawNumericDisplay(timerValue).

  drawNumericDisplay: function(timerValue){
    // set numeric display to current value of timer
    let numericDisplay = document.getElementById ("numeric-display");

    // assign timerValue
    numericDisplay.textContent = timerValue;
    
    // at 10 seconds, change color to red, increase size by 5% per second, round to 2 decimals
    if (timerValue <= 10) {
      numericDisplay.style.color = "red";

      // increase font size by 5% every second starting when switches to 10 and round to 2 decimals 
      let newSize = (1.5 * Math.pow(1.05, 11-timerValue)).toFixed(2);

      // tell code to use new size
      numericDisplay.style.fontSize = newSize + "em";
    }
  },

  drawProgressBars: function(timerValue){
    // 2. The Progress Bar
    // The progress bar is a rectangle (with class progress-bar) inside the element with id progress-bars. As the timer counts down from 100 to 0, the progress bar should expand its width from 0% to 100% of the width of its parent element, the progress-bars component. The function responsible for implementing this is drawProgressBars(timerValue).
  
    // calculate how much time has elapsed
    let timeElapsed = 100 - timerValue;
    // set width to change as time elapses
    document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + "%";
  },

  drawLitFuses: function(timerValue){
    // 3. The Lit Fuse
    // This one's a little cutesy. Similar to to the progress bar, the lengths of the .burnt and .unburnt divs will need to change over time as the counter runs down. Specifically. .unburnt will need to go from 98% of the width of the component (since the .flame div also takes up some space) to 0% of the width as the timer runs down, while .burnt does the reverse. The function responsible for implementing this is drawLitFuses(timerValue).


    // calculate unburnt percent
    let unburntPercent = timerValue;

    // calculate burnt percent
    let burntPercent = 100 - unburntPercent;

    // tell "burnt" portion to increase in width
    document.getElementsByClassName('burnt')[0].style.width = burntPercent*.98 + "%";

    // tell "unburnt" portion to decrease in width
    document.getElementsByClassName('unburnt')[0].style.width = unburntPercent*.98 + "%";
  },


  drawCrawlers: function(timerValue){
    // 4. The Crawler
    // If you thought the last one was cutesy, hoo boy. The crawler will make its way from left to right across the screen, at a rate of 10 pixels per second. Additionally, as the crawler makes its way across the screen, it should move back and forth (i.e. up and down) by 10 px with each step. The function responsible for implementing this behavior is drawCrawlers(timerValue).
  
    // calculate uncrawled percent
    let uncrawledPercent = timerValue;
 
    // calculate crawled percent
    let crawledPercent = 100 - uncrawledPercent;

    let timeLapsed = 100 - timerValue;

    // tell crawler to move 10 pixels per second
    document.getElementsByClassName('crawler')[0].style.marginLeft = timeLapsed * 10 + "px";

    // if time elapsed is odd, move up and if time elapsed is even move down - both by 10px

    if (timeLapsed % 2 === 0){
      document.getElementsByClassName('crawler')[0].style.marginTop = 10 + "px";
    }
    else {document.getElementsByClassName('crawler')[0].style.marginTop = 0 + "px";
  }
  }
};
