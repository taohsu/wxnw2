class Noloop {
  constructor(ani, x, y) {
    this.x = x;
    this.y = y;
    this.animation = ani;
    this.index = 0;
  }
  
  show() {
    let index = floor(this.index) % 6;
      image(this.animation[index], this.x, this.y);
    // fill(255);
    // rect(100, 100, 100, 100)
    
    if (this.index < 5) {
    this.index += 0.1;
    }
    this.x -= xspeed;
    // console.log(this.index);
  }
}