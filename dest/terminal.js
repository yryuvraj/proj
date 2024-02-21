"use strict";
const outputElement = document.getElementById("output");
const inputfield = document.getElementById("inputfield");
function inputfieldcontainer() {
    inputfield.innerHTML = `
    <label for="input">mehul@mehul:~$ </label>
    <input type="text" id="input" autofocus>
    `;
    const inputElement = document.getElementById("input");
    inputElement.focus();
}
inputfield.addEventListener('keydown', (event) => {
    const inputElement = event.target;
    if (event.key === 'Enter') {
        if (inputElement.value.trim() === 'help') {
            const text = [
                "<p> Commands available : </p>",
                "<p> > cat</p>",
                "<p> > ls</p>",
                "<p> > help</p>"
            ];
            text.forEach((text, index) => {
                setTimeout(() => {
                    outputElement.innerHTML += text;
                }, index * 200);
            });
        }
        else if (inputElement.value.trim() === 'ls') {
            outputElement.innerHTML = "file1.txt  file2.txt  README.md";
        }
        else {
            outputElement.innerHTML = "Wrong Command : use `help` to know more";
        }
        inputElement.value = '';
    }
});
inputfieldcontainer();
