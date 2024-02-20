const terminal = document.getElementById('terminal');

function printOutput(message: string) {
    const output = document.createElement('p');
    output.innerHTML = message;
    terminal.appendChild(output);
    terminal.scrollTop = terminal.scrollHeight;
}

function handleCommand(command: string) {
    switch (command) {
        case 'help':
            printOutput('Available commands: help, cat, ls');
            break;
        case 'cat':
            printOutput('Displaying contents of file...');
            break;
        case 'ls':
            printOutput('Listing directory contents...');
            break;
        default:
            printOutput(`Command not found: ${command}`);
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const input = (event.target as HTMLInputElement).value.trim();
        printOutput(`<span class="prompt">$ ${input}</span>`);
        handleCommand(input);
        (event.target as HTMLInputElement).value = '';
    }
});
