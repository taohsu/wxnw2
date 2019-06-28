// Daniel Shiffman
// http://youtube.com/thecodingtrain
// https://thecodingtrain.com/CodingChallenges/111-animated-sprite.html

// Horse Spritesheet from
// https://opengameart.org/content/2d-platformer-art-assets-from-horse-of-spring

// Animated Sprite
// https://youtu.be/3noMeuufLZY

class Sp {
  constructor(ani, x, y, speed) {
    this.x = x;
    this.y = y;
    this.animation = ani;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
    this.toDel = false;
    // console.log(this.index);
  }


    show(im) {
    let index = floor(this.index) % this.len;  
    this.animation = im;
    image(this.animation[index], this.x, this.y);
    // console.log(index);
  }


  
  animate(espeed) {
    this.espeed = espeed;
    this.index += this.speed;
    this.x -= espeed;

    // if (this.x > width) {
    //   this.x = -this.w;
    // }
  }
  
  pop() {

    this.toDel = true;
  }

  

}