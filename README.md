# Tic-Tac-Toe-Game
# 🎮 Tic-Tac-Toe Game (JavaScript)

A browser-based Tic-Tac-Toe game built using **vanilla JavaScript**, where two players (X and O) take turns and the game automatically detects the winner.

---

## 🚀 Features

* 🔁 Turn-based gameplay (**Player O starts first**)
* 🧠 Winner detection using predefined winning patterns
* 🚫 Prevents overwriting already clicked boxes
* 🔒 Disables board after a win
* 🔄 Reset and New Game functionality
* 📢 Displays winner message dynamically

---

## 🛠️ Tech Stack

* **HTML** – Game structure (buttons as boxes)
* **CSS** – Styling and layout
* **JavaScript** – Game logic and DOM manipulation

---

## 🧩 Core Logic Explained

### 🔹 Player Turns

* Controlled using a boolean variable:

```id="k0n8vf"
let turnO = true;
```

* `true` → Player O
* `false` → Player X

---

### 🔹 Winning Patterns

The game checks these combinations to determine the winner:

```id="vwt0tz"
const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];
```

---

### 🔹 Event Handling

Each box listens for a click event:

* Adds `"O"` or `"X"` based on turn
* Disables the clicked box
* Calls `checkWinner()`

---

### 🔹 Winner Detection

```id="m2wzbs"
if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
  if (pos1val === pos2val && pos2val === pos3val) {
    showWinner(pos1val);
  }
}
```

* Ensures boxes are not empty
* Checks if all 3 positions match

---

### 🔹 Reset Functionality

* Clears all boxes
* Enables all buttons
* Hides winner message

```id="gq9h0l"
const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
```

---

## 📂 Project Structure

```id="0xt7zt"
Tic-Tac-Toe/
│── index.html
│── style.css
│── script.js
```

## 🎯 How to Play

* Player **O** starts the game
* Players take turns clicking on boxes
* First to align 3 symbols (row, column, diagonal) wins
* After a win, the board is disabled
* Click **Reset** or **New Game** to play again

##  Screenshot📸:-
   ![image alt](https://github.com/shiivankiit/Tic-Tac-Toe-Game/blob/914d1d6e4b00259ff6e7763a2d8d4af419e7cab0/Screenshot%202026-04-25%20124514.png)
* 
## 💡 Future Improvements

* 🤖 Add AI (play vs computer)
* 🟰 Add draw detection
* 🎨 Add animations and better UI
* 📱 Improve mobile responsiveness
