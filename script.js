const readline = require("readline");

// Setup readline for keyboard input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for countdown seconds
rl.question("Enter countdown time in seconds: ", (input) => {
  let time = Number(input);

  if (isNaN(time) || time <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log(Countdown starts from ${time} seconds...);
  console.log('Press "s" to stop the countdown.');

  // Start Countdown (setInterval)
  const timer = setInterval(() => {
    console.log(Time left: ${time} seconds);
    time--;

    if (time < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  // Use setTimeout repeatedly to check key input
  const checkStopKey = () => {
    rl.on("line", (key) => {
      if (key.trim().toLowerCase() === "s") {
        clearInterval(timer);
        console.log("Countdown stopped by user.");
        rl.close();
      }
    });
  };

  // Delay the input check slightly (setTimeout)
  setTimeout(checkStopKey, 200);
});