// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///

//.  When the 'START' button is clicked,
// a.  and the stopwatch is not currently running,
// i. the stopwatch will begin running.
// ii. the numbers of minutes, seconds, and (tens of) milliseconds elapsed
//will show up in the browser, updated once every 10 milliseconds, in
//the format `MM:SS:ss` (e.g. `100:01:34`, `05:01:10`).
// 1 millisecond is 1/1,000 seconds

//Stopwatch holds the actual business logic and data of the stopwatch: (a) maintaining a 'state' (i.e. running vs not running), (b) managing the 'time' on the stopwatch, and performing basic actions like starting and stopping the timer, and (c) keeping track of and creating 'lap' records.

const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); 
      // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  // default values
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  
  // DO NOT EDIT ABOVE THIS LINE

  // set clock to properly run
  advanceTenMillisecs: function(){
   this.millisecs += 10;
   if (this.millisecs > 999) {
     this.millisecs = this.millisecs - 1000;
     this.secs++;
   }
   if (this.secs > 59) {
     this.secs = this.secs - 60;
     this.mins++;
   }
  },

  reset: function(){
   this.mins = 0;
   this.secs = 0;
   this.millisecs = 0;
   this.laps = [];
  },

  start: function(){
    if (this.isRunning = false) {
      this.isRunning = true;
      //kickstart the ticking of the clock
      this.tickClock();
    }
  },

  stop: function(){
   this.isRunning = false;
  },

  // lap is an empty array
  // we need to set function to save current time on clock lap button is clicked

  lap: function(){
    if (this.isRunning = true) {
      this.laps.push({
        // this creates object to be pushed to array. use colons and commas to separate
        mins: this.mins,
        secs: this.secs,
        millisecs: this.millisecs
      });
    }
  }
};

/// User Interface ///
//ViewEngine is responsible for showing the data managed by Stopwatch in the browser by changing the time display and the lap list. ViewHelpers holds helper methods used by ViewEngine as part of its work.
// this is where most jquery will be used

const ViewEngine = {

  //updateTimeDisplay is a function that takes mins, secs, and millisecs as parameters and updates the current time 
  updateTimeDisplay: function(mins, secs, millisecs){
    $("#mins").innerHTML = ViewHelpers.zeroFill(mins, 2);   
    $("#secs").innerHTML = ViewHelpers.zeroFill(secs, 2);
    $("#millisecs").innerHTML = ViewHelpers.zeroFill(millisecs/10, 2); 
  },

  //updateLapListDisplay is a function that takes laps as a parameter
  updateLapListDisplay: function(laps){
    // set variable to equal laps from stopwatch
    let $laps = Stopwatch.laps;
    // set variable to equal lap-list ID from HTML
    let $lapList = $("#lap-list");
    //set text within lapList to a string
    $lapList.innerHTML = ""; 
    // run loop to save current time to respective lap
    //ASK should we be using `` notation here
    for (let i = 0; i < laps.length; i++) {
      lapList.innerHTML += `${"<li>"} + ${ViewHelpers.zeroFill(laps[i].mins, 2)} + ${":"} + ${ViewHelpers.zeroFill(laps[i].secs, 2)} + ${":"} + ${ViewHelpers.zeroFill(laps[i].millisecs/10, 2)} + ${"</li>"};`

      // lapList.innerHTML += "$<li>" + ViewHelpers.zeroFill(laps[i].mins, 2) + ":" + ViewHelpers.zeroFill(laps[i].secs, 2) + ":" + ViewHelpers.zeroFill(laps[i].millisecs/10, 2) + "$</li>";
    }


//ViewHelpers holds helper methods used by ViewEngine as part of its work.

const ViewHelpers = {
  //zeroFill pads a number with zeros to change "1" to "0001", etc
  zeroFill: function(number, length){
    // change numbers to strings so you can get length
    let lengthString = number.toString();

    let numZeroes = Math.max(length - lengthString.length, 0);
    //create for loop to add 0
    for (let i = 0; i < (length - lengthString.length); i++) {
      // adds a 0 
    lengthString = "0" + lengthString;
    } 
      return lengthString;
  },
};

/// Top-Level Application Code ///
// AppController, as the name suggests, sits on top of and controls the application as a whole -- it handles UI events and moves data from one component to another. Its methods will get attached as event handlers to different elements in the DOM (which is why they have names like handleClickStart, handleClickStop, etc).


const AppController = {
  handleClockTick: function(){
    // this function updates the clock using the updateTimeDisplay from above
    ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },

  //turns clock on if it's not on already
  handleClickStart: function() {
    // if clock isn't on already, start it
   if (Stopwatch.isRunning = false) {
     Stopwatch.start();
   }
  },

  handleClickLap: function(){
    if (Stopwatch.isRunning = true) {
      Stopwatch.lap();
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
    }
  },

    //stops clock when running
    handleClickStopReset: function() {
      if (Stopwatch.isRunning = true) {
        Stopwatch.stop();
      }
      //if not running, update
      else {
        Stopwatch.reset();
        ViewEngine.updateTimeDisplay(0, 0, 0);
        ViewEngine.updateLapListDisplay(Stopwatch.laps);
      }
    },
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
    
  $("#start").onClick = AppController.handleClickStart;

  $("#stop").onClick = AppController.handleClickStopReset;
  $("#lap").onClick = AppController.handleClickLap;

    // document.getElementById("start").onClick = AppController.handleClickStart;

    // document.getElementById("lap").onClick = AppController.handleClickLap;

    // document.getElementById("stop").onClick = AppController.handleClickStopReset;


  }
  
}};

