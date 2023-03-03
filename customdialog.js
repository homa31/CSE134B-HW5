import { buttonEl, dialogEl, closeEl } from './alert-button-module.js';
import { confirmButtonEl, confirmDialogEl, confirmCancelEl, confirmOkEl} from './confirm-button-module.js';
import { promptButtonEl, promptDialogEl, promptCancelEl, promptOkEl, promptInputEl, promptOutputEl} from './prompt-button-module.js';
const confirmOutput = document.getElementById("confirm-output");

buttonEl.addEventListener('click', () => {
  dialogEl.showModal();
});

closeEl.addEventListener('click', () => {
  dialogEl.close();
});

confirmButtonEl.addEventListener('click', () => {
  confirmDialogEl.showModal();
});

confirmCancelEl.addEventListener('click', () => {
  confirmDialogEl.close();
  let result = false;
  confirmOutput.innerHTML = `Confirm Result: ${result}`;
});

confirmOkEl.addEventListener('click', () => {
  let result = true;
  confirmOutput.innerHTML = `Confirm Result: ${result}`;
  confirmDialogEl.close();
});

promptButtonEl.addEventListener('click', () => {
  promptDialogEl.showModal();
});

promptCancelEl.addEventListener('click', () => {
  promptDialogEl.innerHTML = `User did not enter anything`;
  promptDialogEl.close();
});

promptOkEl.addEventListener('click', () => {
  let result = promptInputEl.value;
  let cleanResult = DOMPurify.sanitize(result);
  confirmOutput.innerHTML = `Prompt Result: ${cleanResult}`;
  promptDialogEl.close();
});