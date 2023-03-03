const alertBtn = document.getElementById("alert-btn");
const confirmBtn = document.getElementById("confirm-btn");
const promptBtn = document.getElementById("prompt-btn");
const saferPromptBtn = document.getElementById("safer-prompt-btn");
const confirmOutput = document.getElementById("confirm-output");

alertBtn.addEventListener("click", () => {
  alert("Button clicked!");
});

confirmBtn.addEventListener("click", () => {
  const result = confirm("Are you sure?");
  confirmOutput.innerHTML = `Confirm Result: ${result}`;
});

promptBtn.addEventListener("click", () => {
  const result = prompt("Please enter your name");
  if (result) {
    confirmOutput.innerHTML = `Prompt Result: ${result}`;
  } else {
    confirmOutput.innerHTML = `User didn't enter anything`;
  }
});

saferPromptBtn.addEventListener("click", () => {
  const result = prompt("Please enter your name");
  if (result) {
    let cleanResult = DOMPurify.sanitize(result);
    confirmOutput.innerHTML = `Prompt Result: ${cleanResult}`;
  } else {
    confirmOutput.innerHTML = `User didn't enter anything`;
  }
});
