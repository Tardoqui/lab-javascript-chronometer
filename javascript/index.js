const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  minDecElement.innerText = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(minutes)[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  secDecElement.innerText = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(seconds)[1];
}

// ==> BONUS
function printMilliseconds() {
  let milliSeconds = chronometer.getMilliSeconds();
  milDecElement.innerText = chronometer.computeTwoDigitNumber(milliSeconds)[0];
  milUniElement.innerText = chronometer.computeTwoDigitNumber(milliSeconds)[1];
}

function printSplit() {
  
  let linha = document.createElement('li');

  linha.innerText = chronometer.split();

  splitsElement.appendChild(linha);
}

function clearSplits() {
  
}

function setStopBtn() {
  chronometer.stop();
  btnLeftElement.innerText = 'START';
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');

  btnRightElement.innerText = 'RESET'
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');

}

function setSplitBtn() {
  printSplit();

  
  
}

function setStartBtn() {
  chronometer.start(printTime);

  btnLeftElement.innerText = 'STOP';
  btnLeftElement.classList.toggle('start')
  btnLeftElement.classList.toggle('stop')



  btnRightElement.innerText = 'SPLIT';
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
}

function setResetBtn() {
  chronometer.reset();
  
  minDecElement.innerText = '0';
  minUniElement.innerText = '0';
  secDecElement.innerText = '0';
  secUniElement.innerText = '0';
  
  splitsElement.innerText = '';

 


}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if ( btnLeftElement.innerText === 'START'){
    setStartBtn();
  }else {
    setStopBtn();
  }
  
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  
  if ( btnRightElement.innerText === 'RESET' ){
    setResetBtn();
  }else {
    setSplitBtn();
  }
});
