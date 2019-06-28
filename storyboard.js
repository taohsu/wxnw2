class Storyboard {
  constructor(speed, dura, ani, index, tm) {
    this.speed = speed;
    this.dura = dura;
    this.ani = ani;
    this.index = index;
    this.tm = tm;
  }
  
  charani() {
    push();
    translate(width/4, 0);
    this.ani.show();
    this.ani.animate();
    pop();
    
    // console.log('this' + this.index);
  }
  
  textdisplay() {
    fill(255);
    textSize(12);
    textAlign(LEFT, TOP);
    let tmr = frameCount - this.dura;
    // console.log(tmr);
    text(
    st[this.index].substring(0, tmr/this.speed),
    100, height/2 + 120, width - 200, height/4);
    
    if (tmr > this.tm && mouseIsPressed) {
      loading = false;
      // bgm[this.index].loop();

    }
  }
}