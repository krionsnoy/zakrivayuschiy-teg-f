const memoryDialog = document.querySelector('#memory-dialog');
const saveButton = document.querySelector('.save-button');

saveButton.addEventListener('click', () => memoryDialog.showModal());
memoryDialog.addEventListener('close', () => saveButton.focus());
