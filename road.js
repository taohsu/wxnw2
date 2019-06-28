class Road {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    // this.xspeed = xspeed;
    // this.img = img;
    this.h = h;
    this.w = w;
  }
  
  roll(img, xspeed) {
    this.x = this.x - xspeed;

    if (this.x < -width/3*2) {
    this.x = width;
    }
    
    push();
    translate(this.x,this.y);
    image(img, 0, 0, this.w, this.h);
    pop();
  }
  
}