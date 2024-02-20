"use strict";
function makeDraggable(elementId) {
    const element = document.getElementById(elementId);
    const header = element.querySelector('.header');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
    header.addEventListener('mousedown', (event) => {
        isDragging = true;
        const boundingRect = element.getBoundingClientRect();
        offsetX = event.clientX - boundingRect.left;
        offsetY = event.clientY - boundingRect.top;
    });
    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;
            element.style.left = x + 'px';
            element.style.top = y + 'px';
        }
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}
makeDraggable('wrapper');
makeDraggable('wrapper2');
