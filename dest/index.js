"use strict";
function makeDraggable(elementId) {
    const element = document.getElementById(elementId);
    const header = element.querySelector('.header');
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
    let highestZIndex = 1;
    const setZIndex = () => {
        highestZIndex++;
        element.style.zIndex = highestZIndex.toString();
    };
    header.addEventListener('mousedown', (event) => {
        isDragging = true;
        setZIndex();
        const boundingRect = element.getBoundingClientRect();
        offsetX = event.clientX - boundingRect.left;
        offsetY = event.clientY - boundingRect.top;
        console.log(`clientX ${event.clientX} left ${boundingRect.left} offsetx is ${offsetX}`);
        console.log(`clientY ${event.clientY} top ${boundingRect.top} offsety is ${offsetY}`);
    });
    document.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const x = event.clientX + offsetX;
            const y = event.clientY + offsetY;
            element.style.left = x + 'px';
            element.style.top = y + 'px';
            console.log(`clientX is ${event.clientX} y is ${offsetX}`);
            console.log(`clientY is ${event.clientY} y is ${offsetY}`);
        }
    });
    document.addEventListener('mouseup', () => {
        isDragging = false;
        offsetX = 0;
        offsetY = 0;
    });
}
makeDraggable('wrapper');
makeDraggable('wrapper2');
makeDraggable('terminal');
