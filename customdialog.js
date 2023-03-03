import { buttonEl, dialogEl, closeEl } from './alert-button-module.js';
import { confirmButtonEl, confirmDialogEl, confirmCancelEl} from './confirm-button-module.js';
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
  let result = false
  confirmOutput.innerHTML = `Confirm Result: ${result}`;
});