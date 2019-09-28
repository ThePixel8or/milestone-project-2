let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let strict = false;
let noise = true;
let on = false;
let win;


const turnCounter = document.querySelector("#turn");
const buttonPad1 = document.querySelector("#button1");
const buttonPad2 = document.querySelector("#button2");
const buttonPad3 = document.querySelector("#button3");
const buttonPad4 = document.querySelector("#button4");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

strictButton.addEventListener('click', (event) => {
  if (strictButton.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});

onButton.addEventListener('click', (event) => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = "-";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor();
    clearInterval(intervalId);
  }
});

startButton.addEventListener('click', (event) => {
  if (on || win) {
    play();
  }
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++;
    }, 200);
  }
}

function one() {
  if (noise) {
    let audio = document.getElementById("plySound1");
    audio.play();
  }
  noise = true;
  buttonPad1.style.backgroundColor = "#ff0000";
}

function two() {
  if (noise) {
    let audio = document.getElementById("plySound2");
    audio.play();
  }
  noise = true;
  buttonPad2.style.backgroundColor = "#0055ff";
}

function three() {
  if (noise) {
    let audio = document.getElementById("plySound3");
    audio.play();
  }
  noise = true;
  buttonPad3.style.backgroundColor = "#00cc00";
}

function four() {
  if (noise) {
    let audio = document.getElementById("plySound4");
    audio.play();
  }
  noise = true;
  buttonPad4.style.backgroundColor = "#ffff33";
}

function clearColor() {
  buttonPad1.style.backgroundColor = "#990000";
  buttonPad2.style.backgroundColor = "#003399";
  buttonPad3.style.backgroundColor = "#006600";
  buttonPad4.style.backgroundColor = "#b3b300";
}

function flashColor() {
  buttonPad1.style.backgroundColor = "#ff0000";
  buttonPad2.style.backgroundColor = "#0055ff";
  buttonPad3.style.backgroundColor = "#00cc00";
  buttonPad4.style.backgroundColor = "#ffff33";
}

buttonPad1.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(1);
    check();
    one();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

buttonPad2.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(2);
    check();
    two();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

buttonPad3.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(3);
    check();
    three();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

buttonPad4.addEventListener('click', (event) => {
  if (on) {
    playerOrder.push(4);
    check();
    four();
    if(!win) {
      setTimeout(() => {
        clearColor();
      }, 300);
    }
  }
})

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

  if (playerOrder.length == 5 && good) {
    winGame();
  }

  if (good == false) {
    flashColor();
    turnCounter.innerHTML = "Wrong NO!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      clearColor();

      if (strict) {
        play();
      } else {
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        intervalId = setInterval(gameTurn, 800);
      }
    }, 800);

    noise = false;
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    turnCounter.innerHTML = turn;
    intervalId = setInterval(gameTurn, 800);
  }

}

function winGame() {
  flashColor();
  turnCounter.innerHTML = "YOU WIN!";
  on = false;
  win = true;
}






