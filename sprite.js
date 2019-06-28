// Daniel Shiffman
// http://youtube.com/thecodingtrain
// https://thecodingtrain.com/CodingChallenges/111-animated-sprite.html

// Horse Spritesheet from
// https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring

// Animated Sprite
// https://youtu.be/3noMeuufLZY

class Sprite {
  constructor(ani, x, y, speed) {
    this.x = x;
    this.y = y;
    this.animation = ani;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
    console.log(this.index);
  }


    show() {
    let index = floor(this.index) % this.len;    
    image(this.animation[index], this.x, this.y);
    // console.log(index);
  }


  
  animate() {
    this.index += this.speed;
    // this.x = width/2;

    // if (this.x > width) {
    //   this.x = -this.w;
    // }
  }
}