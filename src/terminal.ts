const outputElement = document.getElementById("output") as HTMLDivElement;
const inputfield = document.getElementById("inputfield") as HTMLDivElement;

function inputfieldcontainer() {
    inputfield.innerHTML = `
    <label for="input">mehul@mehul:~$ </label>
    <input type="text" id="input" autofocus>
    `;
    const inputElement = document.getElementById("input") as HTMLInputElement;
    inputElement.focus();
}

inputfield.addEventListener('keydown', (event) => {
    const inputElement = event.target as HTMLInputElement;
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
            })
           
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