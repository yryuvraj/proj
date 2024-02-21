"use strict";
const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");
inputElement.addEventListener('keydown', (event) => {
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
