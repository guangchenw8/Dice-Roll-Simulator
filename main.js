// Dice Roll Simulator Demo

// HTML Element for Output
let outputEl = document.getElementById('output');

// Menu Button
document.getElementById('go-btn').addEventListener('click', goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById('menu').value;

  // Process Selection
  if (selection === 'roll-once') {
    rollOnce();
  } else if (selection === 'roll-five') {
    roll5Times();
  } else if (selection === 'roll-n') {
    rollNTimes();
  } else if (selection === 'snake-eyes') {
    snakeEyes();
  }
}

function rollOnce() {
  // Display Menu Title
  outputEl.innerHTML = '<h3>ROLL ONCE</h3>';

  // Random Dice Roll & Total
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  // Add Results to output element
  let pEl = document.createElement('p');
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  // Display Menu Title
  outputEl.innerHTML = '<h3>ROLL 5 TIMES</h3>';

  // Random Dice Roll
  for (let rollCount = 0; rollCount < 5; rollCount++) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Output dice results
    let pEl = document.createElement('p');
    pEl.innerHTML = `${die1}, ${die2} (sum:${total})`;
    outputEl.appendChild(pEl);
  }
}

function rollNTimes() {
  // Display Menu Title
  outputEl.innerHTML = "<h3>ROLL 'N' TIMES</h3>";
  let askForN = +prompt('Roll how many times?');

  // Random Dice Roll
  for (let rollCount = 0; rollCount < askForN; rollCount++) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    let total = die1 + die2;

    // Output dice results
    let pEl = document.createElement('p');
    pEl.innerHTML = `${die1}, ${die2} (sum:${total})`;
    outputEl.appendChild(pEl);
  }
}

function snakeEyes() {
  // Display Menu Title
  outputEl.innerHTML = '<h3>ROLL UNTIL SNAKE EYES</h3>';
  // Random Dice Roll & Total
  let total = 0;
  let rollCount = 0;

  while (total !== 2) {
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;
    total = die1 + die2;

    // Count the number of rolls
    rollCount++;

    // Add Results to output element

    let pEl = document.createElement('p');
    pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
  let pEl = document.createElement('p');
  outputEl.appendChild(pEl);
  pEl.innerHTML = `SNAKE EYES! It took ${rollCount} tries`;
}
