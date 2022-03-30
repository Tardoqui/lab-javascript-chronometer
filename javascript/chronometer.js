class Chronometer {
  constructor() {
    this.intervalId = null;
    this.currentTime = 0;
  }

  start(callback) {
   
    this.intervalId = setInterval(() => {
     this.currentTime ++;
     if (callback){
       callback();
     }
    },10)
    
  }

  getMinutes() {
    return Math.floor(Math.floor(this.currentTime/100) / 60);

  }

  getSeconds() {
    return Math.floor(this.currentTime/100) - this.getMinutes() * 60;
  }

  getMilliSeconds() {
    return this.currentTime - this.getSeconds()*100;
    
  }

  computeTwoDigitNumber(value) {
    
    if (value.toString().length === 1){
      return `0${value}`
    }
    else if (value.toString().length === 2){
      return`${value}`
    }
  
  }

  stop() {
    clearInterval(this.intervalId); 
    
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());

    let seconds = this.computeTwoDigitNumber(this.getSeconds());

    let milliSeconds = this.computeTwoDigitNumber(this.getMilliSeconds());
    
    return `${minutes}:${seconds}:${milliSeconds}`;
    
  }
} 
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
