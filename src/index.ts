function makeDraggable(elementId: string) {
    const element = document.getElementById(elementId)!;
    const header = element.querySelector('.header') as HTMLElement;
    
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
  
    header.addEventListener('mousedown', (event: MouseEvent) => {
      isDragging = true;
      const boundingRect = element.getBoundingClientRect();
      offsetX = event.clientX - boundingRect.left;
      offsetY = event.clientY - boundingRect.top;
      console.log(`clientX ${event.clientX} left ${boundingRect.left}`);
      console.log(`clientY ${event.clientY} left ${boundingRect.top}`);
    });
  
    document.addEventListener('mousemove', (event: MouseEvent) => {
      if (isDragging) {
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        element.style.left = x + 'px';
        element.style.top = y + 'px';
        console.log(`x is ${x} y is ${y}`);
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  }
  
  makeDraggable('wrapper');
  makeDraggable('wrapper2');
  makeDraggable('terminal');

 


