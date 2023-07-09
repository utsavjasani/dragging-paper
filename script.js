class Paper {
    constructor() {
      this.holdingpaper = false;
      this.prevmouseX = 0;
      this.prevmouseY = 0;
      this.mouseX = 0;
      this.mouseY = 0;
      this.velocityX = 0;
      this.velocityY = 0;
      this.currentpaperX = 0;
      this.currentpaperY = 0;
    }
  
    initialize(paper) {
      paper.addEventListener('mousedown', (e) => {
        this.holdingpaper = true;
        paper.style.zIndex = highestZ;
        highestZ += 1;
        if (e.button === 0) {
          this.prevmouseX = this.mouseX;
          this.prevmouseY = this.mouseY;
          console.log(this.prevmouseX);
          console.log(this.prevmouseY);
        }
      });
  
      document.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
  
        this.velocityX = this.mouseX - this.prevmouseX;
        this.velocityY = this.mouseY - this.prevmouseY;
  
        if (this.holdingpaper) {
          this.currentpaperX += this.velocityX;
          this.currentpaperY += this.velocityY;
  
          this.prevmouseX = this.mouseX;
          this.prevmouseY = this.mouseY;
  
          paper.style.transform = `translateX(${this.currentpaperX}px) translateY(${this.currentpaperY}px)`;
        }
      });
  
      window.addEventListener('mouseup', (e) => {
        console.log('mouse button is released');
        this.holdingpaper = false;
      });
    }
  }
  
  const paperElements = Array.from(document.querySelectorAll('.paper'));
  
  let highestZ = 1;
  
  paperElements.forEach((paper) => {
    const paperInstance = new Paper();
    paperInstance.initialize(paper);
  });
  