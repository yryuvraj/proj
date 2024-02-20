"use strict";
// import { Terminal } from 'xterm';
// function format(string) {
//     return string.replace(/\n/g, '\r\n');
// }
// const ABOUT = format(`
// I am soooo clueless about stuff
// most of the time, but I try to learn.
// `);
// const CONTACT = format(`
// Email:   yrathi66@gmail.com
// Github:  https://github.com/yryuvraj
// Linkedin: https://www.linkedin.com/in/yuvraj-rathi/
// `);
// const README = format(`
// Welcome to my website. This is my first project using TypeScript.
// `);
// const files = {
//     'about.txt': ABOUT,
//     'contact.txt': CONTACT,
//     'README.md': README,
// };
// function ls(args) {
//     if (args.includes('-1')) {
//         term.writeln(Object.keys(files).join('\r\n'));
//     } else {
//         term.writeln(Object.keys(files).join('\n'));
//     }
// }
// function help() {
//     term.writeln(`Commands:\r\n* ${Object.keys(commands).join('\r\n* ')}`);
// }
// function cat(args) {
//     if (args.length !== 1) {
//         term.writeln(`requires 1 argument, provided ${args.length}`);
//         return;
//     }
//     if (!files[args[0]]) {
//         term.writeln(`file not found: ${args[0]}`);
//         return;
//     }
//     term.write(files[args[0]]);
// }
// const commands = {
//     cat,
//     ls,
//     help,
// };
// const PROMPT = `$ `;
// const PROMPT_LENGTH = PROMPT.replace(/\u001b\[[\d;]+m/g, '').length;
// let term;
// function initializeTerminal() {
//     term = new Terminal({
//         cols: 80,
//         rows: 15,
//         fontSize: 15,
//         fontFamily: 'Inconsolata,Menlo,Chicago,Geneva',
//         cursorBlink: true,
//         theme: {
//             selection: '#000',
//             foreground: '#333',
//             cursor: '#333',
//             background: '#FFF',
//         },
//     });
//     term.registerLinkMatcher(/https:\/\/\w+\.[^\s]*/, (event, uri) => window.open(uri, '_blank'));
//     term.open(document.querySelector('#terminal > .modeless-dialog'));
//     term.write(`\r${PROMPT}`);
//     window.scrollTo(0, 0);
//     let history = [];
//     let pointer = 0;
//     let command = '';
//     term.onData(event => {
//         switch (event) {
//             case '\r': // Enter
//                 execute(command);
//             case '\u0003': // Ctrl+C
//                 command = '';
//                 pointer = history.length;
//                 term.write(`\r\n${PROMPT}`);
//                 break;
//             case '\u0010': // Ctrl+P
//                 pointer = Math.max(pointer - 1, 0);
//                 term.write('\x1b[2K');
//                 term.write(`\r${PROMPT}`);
//                 term.write(history[pointer] || '')
//                 command = history[pointer] || '';
//                 break;
//             case '\u000e': // Ctrl+N
//                 pointer = Math.min(pointer + 1, history.length);
//                 term.write('\x1b[2K');
//                 term.write(`\r${PROMPT}`);
//                 term.write(history[pointer] || '')
//                 command = history[pointer] || '';
//                 break;
//             case '\u007F': // Backspace (DEL)
//                 if (term._core.buffer.x > PROMPT_LENGTH) {
//                     command = command.slice(0, -1);
//                     term.write('\b \b');
//                 }
//                 break;
//             case '\u0015': // Ctrl+U
//                 command = '';
//                 term.write('\x1b[2K');
//                 term.write(`\r${PROMPT}`);
//                 break;
//             case '\f': // Ctrl+L
//                 term.clear();
//                 break;
//             default: // Print all other characters for demo
//                 if (event.charCodeAt(0) < 30 || event.charCodeAt(0) > 128) {
//                     break;
//                 }
//                 command += event;
//                 term.write(event);
//         }
//     });
// }
// function execute(command) {
//     history.push(command);
//     term.writeln('\r');
//     let tokens = command.split(' ');
//     if (commands[tokens[0]]) {
//         commands[tokens[0]](tokens.slice(1));
//     } else {
//         term.writeln(`shell: command not found: ${command}. Try 'help' to get started.`);
//     }
// }
// document.addEventListener('DOMContentLoaded', initializeTerminal);
