// Data Management and Business Logic //
// CounterCollection is an object
// think of "lastCountId" instead as "lastCounterId"

const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    //calculating how many counters you have
    //pushes lastCountId to an array
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },

  // takes ID of counter and searches counter's array for that particular counter. Returns true once found. Then returns the count of that particular counter
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },

  // takes ID of counter and console.logs it when called 
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      return counter.count;
    }
  },

  // deletes a counter of certain ID
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI (user interface aka "what you see"//
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);
    // adds "increment" and "delete" buttons
    let newCounterComponent = document.createElement('div');
    newCounterComponent.className = "counter";
    newCounterComponent.innerHTML = 
    `<h3>Count: <span>0</span></h3> 
    <button class='increment'> +1 </button> 
    <button class='delete'> Delete </button>`;
    newCounterComponent.dataset.countId = newCountId;
    document.getElementById('counter-list').appendChild(newCounterComponent);
    newCounterComponent.getElementsByClassName("increment")[0].onclick=AppController.onClickIncrement;
    newCounterComponent.getElementsByClassName("delete")[0].onclick=AppController.onClickDelete;
  },

  //takes getCounterValue and puts it in the DOM
  //all this function does is DOM manipulation 
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`); 
    let val = CounterCollection.getCounterValue(countId);
    document.querySelector(`[data-count-id="${countId}"] span`).innerHTML = val;
  },
  removeCounterComponent: function(countId){             
    console.log(`remove counter component #${countId}`);

    let counterComponent = document.querySelector(`[data-count-id="${countId}"]`);
    console.log(counterComponent, counterComponent.parent);
    counterComponent.parentNode.removeChild(counterComponent);
    
    // DO THIS LAST
    console.log(`remove counter component #${countId}`);
    // Your Code Here
  }
};

// Top-Level Application Control //
// click handlers to create more stuff in top piece
const AppController = {
  onClickNewCounter: function(event){
    // calling object and function within object
    CounterCollection.createCounter();
    //calling the function and "Presenter" and using insertCounterComponent to tell console to log each new click
    Presenter.insertCounterComponent(CounterCollection.lastCountId);
    console.log(`click new counter (#${CounterCollection.lastCountId})`);
  },

//calling onClickIncrement function
  onClickIncrement: function(event){
    let countId = Number(event.target.parentNode.dataset.countId);
    console.log(`click increment #${countId}`);
    CounterCollection.incrementCounter(countId);
    Presenter.refreshCounterComponent(countId);
  },

  //DO THIS LAST!!!
  onClickDelete: function(event){       
    let countId = Number(event.target.parentNode.dataset.countId);
    console.log(`click delete #${countId}`);
    Presenter.removeCounterComponent(countId);
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};


