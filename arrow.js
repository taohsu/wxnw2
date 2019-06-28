class Arrow {

  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.toDel = false;
  }
  show() {
    noStroke();
    fill(207, 235, 255);
    rect(this.x, this.y, 12, 2);   
  } 
  
  move() {
    this.x = this.x + this.speed;
  }
  
  hits(eny) {
    var d = dist(this.x, this.y, eny.x+80, eny.y+80);
    // 4.log(dist(this.x, this.y, eny.x, eny.y));
    // console.log(this.x, this.y);
    // console.log(eny.x, eny.y);
    // console.log(d);
    if (d < 50) {
    return true;
    } else {
      return false;
    }
  }
  
  del() {
    this.toDel = true;
  }
  
}
