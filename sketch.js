let spritesheet;
let spritesheet2;
let spritesheet10;
let spritesheet101;
let imgenemy;

var mip = false;

let spritedata;
let spritedata2;
let spritedata3;
let spritedata10;
let spritedata101;
let spritedatagg;
let spritedata4;

let animation = [];
let animation2 = [];
let animation3 = [];
let animation10 = [];
let animation101 = [];
let animationgg = [];
let animationstay = [];
// let bgm = [];

var bow;
var bowstr;
var idl;
var die;
var stay;
var attack;
var enemy;
var enemies = [];

var enemydie;
var enemydies = [];

var fzxs14;

var roadrolls = [];
var road;
var roadmud;
var rail;
var blastroad;
var typeroad = [];
var numberenemies = [];
var roadimg;
var roadsign;
var roadsign2;
var roadbridge;
var roadblast;


var bgimg = [];
var bg001;
var bg002;
var bg003;
var bg004;
var bg005;
var bg006;
var bg007;
var bg0071;

var soundbow;
var soundattack;

var bgm1;
var bgm2;
var bgm3;
var bgm4;
var bgm5;
var bgm6;
var delay;
var endingm;

var logo;
var arrw;
var arrws = [];

// var frm;
var frm2;
var frmc;
var frms = [];
var arrowspeed = 12;
var bowforce = false;

var afrms = [];
var attackforce = false;

var xx1;
var xx2;
var xx3;
var xx4;
var xx5;
var xx6;
var xx7;
var xx8;
var xx9;
var xx10;

var yy;
var xspeed = 0;
var espeed = 0.4;
var pspeed = 0;
var bspeed = 0;
let rx;
let ry;
var rd;

var loading = true;
var discpt = false;
let ie = 1;
let huitou = false;
var storyvisible = false;
var timer;

var dis1;

var scripttext;
var st = [];
var sindex = 0;
var scriptimer = [];

var prlx = [];

var stagecounter;
var deadcounter;

var ttimer;

var heart;
var hearts = [];
var heartnumber;
var hn = [];

var vid;

var drops  = [];

// var sourceText = "9:30 pm, Xi'er Qi, 21 hours after the catastrophic black out. I was forced to leave. But no transports, no taxis, the only lights are from the city centre in distance...";

function preload() {

  spritesheet = loadImage('adventurer-bow-Sheet.png');
  spritesheet2 = loadImage('adventurer-1.3-Sheet.png');
  spritesheet10 = loadImage('axe bandit run.png');
  spritesheet101 = loadImage('Axe Bandit Die.png');
  imgenemy = loadImage('enemy.png');
  
  spritedata = loadJSON('bow.json');  
  spritedata2 = loadJSON('idl.json');
  spritedata3 = loadJSON('attack.json');
  spritedata10 = loadJSON('enemy1.json');
  spritedata101 = loadJSON('enemydie.json');
  spritedatagg = loadJSON('die.json');
  spritedata4 = loadJSON('stay.json');
  
  scripttext = loadJSON('gamescript.json');
  
  road = loadImage('road 1.jpg');
  rail = loadImage('railroad.jpg');
  roadmud = loadImage('mudroad.jpg');
  blastroad = loadImage('blastroad.jpg');
  
  roadsign = loadImage('huoying.png');
  roadsign2 = loadImage('xierqizhan.png');
  roadbridge = loadImage('bg bridge.png');
  roadblast = loadImage('afterblast.png');
  
  heart = loadImage('heart.png');
  
  bg001 = loadImage('bg 0.png');
  bg002 = loadImage('bg.png');
  bg003 = loadImage('bg 2.png');
  bg004 = loadImage('bg 3.png');
  bg005 = loadImage('bg 4.png');
  bg006 = loadImage('bg 5.png');
  bg007 = loadImage('bg 5.png');
  bg0071 = loadImage('door.png');
  
  soundbow = loadSound('soundbow.wav');
  soundattack = loadSound('soundattack.wav');
  endingm = loadSound('blackbird.mp3');
  
//   bgm1 = loadSound('C.wav');
//   bgm2 = loadSound('E.wav');
//   bgm3 = loadSound('A.wav');
//   bgm4 = loadSound('A+.wav');
  bgm5 = loadSound('That night.mp3');
  bgm6 = loadSound('rain.mp3');
  
  logo = loadImage('your_text.png');
  
  fzxs14 = loadFont('super-legend-boy.otf');
}


function setup() {
  frameRate(120);

  // createCanvas(screen.width, screen.height, P2D);
  createCanvas(640, 480, P2D);
  
  
  bgimg = [bg001, bg002, bg003, bg004, bg005, bg006, bg007];
  
  // bgm = [bgm1, bgm1, bgm2, bgm3, bgm4];
  bgm5.loop();
  
  hearts = [heart, heart, heart, heart];
  
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
  // console.log(animation);
    bow = new Sprite(animation, width/4, height/2, 0.1);
  
  let frames2 = spritedata2.frames;
  for (let i = 0; i < frames2.length; i++) {
    let pos2 = frames2[i].position;
    let img2 = spritesheet2.get(pos2.x, pos2.y, pos2.w, pos2.h);
    animation2.push(img2);
  }
  idl = new Sprite(animation2, width/4, height/2, 0.15);
  // console.log(animation2);
  
  let framesgg = spritedatagg.frames;
  for (let i = 0; i < framesgg.length; i++) {
    let posgg = framesgg[i].position;
    let imggg = spritesheet2.get(posgg.x, posgg.y, posgg.w, posgg.h);
    animationgg.push(imggg);
  }
  die = new Ending(animationgg, width/4, height/2);
  
  let framestay = spritedata4.frames;
  for (let i = 0; i < framestay.length; i++) {
    let postay = framestay[i].position;
    let imgstay = spritesheet2.get(postay.x, postay.y, postay.w, postay.h);
    animationstay.push(imgstay);
  }
  stay = new Sprite(animationstay, width/4, height/2, 0.05);
  
  let frames3 = spritedata3.frames;
  for (let i = 0; i < frames3.length; i++) {
    let pos3 = frames3[i].position;
    let img3 = spritesheet2.get(pos3.x, pos3.y, pos3.w, pos3.h);
    animation3.push(img3);
  }
  attack = new Sprite(animation3, width/4, height/2, 0.2);
  
  let frames10 = spritedata10.frames;
  for (let i = 0; i < frames10.length; i++) {
    let pos10 = frames10[i].position;
    let img10 = spritesheet10.get(pos10.x, pos10.y, pos10.w, pos10.h);
    animation10.push(img10);
  }  
  
  let frames101 = spritedata101.frames;
  for (let i = 0; i < frames101.length; i++) {
    let pos101 = frames101[i].position;
    let img101 = spritesheet101.get(pos101.x, pos101.y, pos101.w, pos101.h);
    animation101.push(img101);
  }
  
  let scripttexts = scripttext.scripts;
  for (let i = 0; i < scripttexts.length; i++) {
    let str = scripttexts[i].Str;
    st.push(str);
    // console.log(st);
    // console.log(st.length);
    let prl = scripttexts[i].Parallex;
    prlx.push(prl);
    let stimer = scripttexts[i].Timer;
    scriptimer.push(stimer);
    let typer = scripttexts[i].Typeroad;
    typeroad.push(typer);
    let numberenemy = scripttexts[i].Enemyn;
    numberenemies.push(numberenemy);
  }
  
  for (let i = 0; i < numberenemies[0]; i++) {
  enemies[i] = new Sp (animation10, random(width, width*3), height/2-random(15,25), random(0.1, 0.4));
  }
  // console.log(prlx[sindex]);

// xx1 = 0;
// xx2 = width/3;
// xx3 = width/3*2;
// xx4 = width;
// xx5 = width + width/3;
  
  deadcounter = scripttexts[0].Enemyn;
  
  xx6 = width - 150;
  xx7 = 0;
  xx8 = width;
  xx9 = 0;
  xx10 = width;
  yy = height/4*2.1;
  rd = 0;
  heartnumber = 4;
  // hn = 0;

  for (let i = 0; i < 5; i++) {
    let xx = width/3*i;
    let roadroll = new Road (xx, yy, width/3, 50);
    roadrolls.push(roadroll);
  }
  

  
// enemydies[0] = new Noloop(animation101, 100, 100);

  vid = createVideo(['wxnw.mp4']);
  vid.hide();
  // vid.size(width, height);
  // bgm[0].loop();
  delay = new p5.Delay();
  
  for(var i=0; i<200; i++){
		drops[i] = new Drop();
  }

  
}

function draw() {
  background(0);
  
  
  imageMode(CORNER);
  
  
  // console.log("s" + prlx[sindex]);
  
  if(loading) {
    
    if(discpt == false) {
      imageMode(CENTER);
      image(logo, width/2, height/2 - 100, 300, 100);
      fill(255, 255, 255, ie);
      if(huitou == false) {
        ie = ie + 5;
      } else if (huitou) {
        ie = ie - 5;
      }
    
      if(ie <= 0 || ie >= 255) {
      huitou = !huitou;
      }

      textAlign(CENTER);
      textSize(16);
      textFont(fzxs14);
      text('Press to start', width/2, height/2 +100);
    
      push();
      translate(width/4, 0);
      idl.show();
      idl.animate();
      pop();
      
      if (mip) {
        discpt = true;
        timer = frameCount;   
        // console.log("a" + timer);
      } 
      
    }
    else {
      imageMode(CENTER);
      storyvisible = true;
      dis1 = new Storyboard(2.5, timer, idl, sindex, scriptimer[sindex]);
      dis1.charani();
      dis1.textdisplay();    
    }

  } else {
    
  imageMode(CORNER);
  image(bgimg[sindex], 0, -10, 640, 480);
    
//   xx1 = xx1 - xspeed;
//   xx2 = xx2 - xspeed;
//   xx3 = xx3 - xspeed;
//   xx4 = xx4 - xspeed;
//   xx5 = xx5 - xspeed;
  

  
//   if (xx1 < -width/3*2) {
//   xx1 = width;
//   }
  
//   if (xx2 < -width/3*2) {
//   xx2 = width;
//   }
  
//   if (xx3 < -width/3*2) {
//   xx3 = width;
//   }
  
//   if (xx4 < -width/3*2) {
//   xx4 = width;
//   }
//   if (xx5 < -width/3*2) {
//   xx5 = width;
//   }
    

  
//   push();
//   translate(xx1,yy);
//   image(road, 0, 0, width/3,50);
//   pop();
  
//   push();
//   translate(xx2,yy);
//   image(road, 0, 0, width/3,50);
//   pop();
  
//   push();
//   translate(xx3,yy);
//   image(road, 0, 0, width/3,50);
//   pop();

//   push();
//   translate(xx4,yy);
//   image(road, 0, 0, width/3,50);
//   pop();
  
//   push();
//   translate(xx5,yy);
//   image(road, 0, 0, width/3,50);
//   pop();


  // console.log("x" + xx6);
  if(typeroad[sindex] === 'mud') {
    
    roadimg = roadmud;
    for (let i = 0; i < roadrolls.length; i++) {
    roadrolls[i].roll(roadimg, xspeed);
    }

  } else if(typeroad[sindex] === 'city') {
  
    roadimg = road;
    for (let i = 0; i < roadrolls.length; i++) {
    roadrolls[i].roll(roadimg, xspeed);
    }
  } else if(typeroad[sindex] === 'subway') {
  
    roadimg = rail;
    for (let i = 0; i < roadrolls.length; i++) {
      push();
      translate(rd,rd);
      roadrolls[i].roll(roadimg, xspeed);
      pop();
    }
    xx7 = xx7 - xspeed;
    xx8 = xx8 - xspeed;
    if(xx7 < -640) {
       xx7 = width;
       }
    if(xx8 < -640) {
       xx8 = width;
       }
    push();
      translate(xx7+rd,yy-52+rd);
      image(roadbridge, 0, 0, 640, 228);
    pop();
    push();
      translate(xx8+rd,yy-52+rd);
      image(roadbridge, 0, 0, 640, 228);
    pop();
    
    // }
  } else if(typeroad[sindex] === 'subway2') {
    roadimg = blastroad;
    for (let i = 0; i < roadrolls.length; i++) {
    roadrolls[i].roll(roadimg, xspeed);
    }
    xx9 = xx9 - pspeed;
    xx10 = xx10 - pspeed;
    if(xx9 < -640) {
       xx9 = width;
       }
    if(xx10 < -640) {
       xx10 = width;
       }
    push();
      translate(xx9,yy-100);
      image(roadblast, 0, -5, 640, 114);
    pop();
    push();
      translate(xx10,yy-100);
      image(roadblast, 0, -5, 640, 114);
    pop();
  }
  // }
  // stroke(255);
  // noFill();
  // rect(20, 20, 96, 10)
  if(prlx[sindex] == '1') {
    xx6 = xx6 - pspeed;
    if (xx6 < -105) {
      xx6 = width + 105;
    }
    push();
    translate(xx6,yy);
    image(roadsign, 0, -40, 104,30);
    pop();
  } else if(prlx[sindex] == '2') {
    xx6 = xx6 - pspeed;
    if (xx6 < -105) {
      xx6 = width + 105;
    }
    push();
    translate(xx6,yy);
    image(roadsign2, 0, -40, 104,30);
    pop();
  }
    
  
  // image(animation[f % animation.length], width/2, height/2);
  if (mouseIsPressed) {
    xspeed = 0;
    espeed = 0.3;
    pspeed = 0;
    bspeed = 0;
    // frms = []; 
    // frmc = 0;
    // let ffrr = frms[frms.length-1];
    let frm = frameCount;
    frms.push(frm);
    
    // console.log(frms[0]);
    // console.log(frms.length);
    frmc = (frms[frms.length-1] - frms[0]);
    // console.log(frmc);
    // console.log(frmc);
    

    
    if (mouseX < windowWidth/2) {
      bowstr = new Strength();
      bowstr.pll(frms.length);
    
      if(frmc > 48) {
      //        arrw = new Arrow(width/3, height/2 + 20, 12);
      // arrws.push(arrw);
        bowforce = true;
       }
      

      
      bow.show();
      bow.animate();

      // console.log(floor(frameCount % 30));
      
    } else if (mouseX > windowWidth/2) {
      attack.show();
      attack.animate();
      
   
 if(frmc > 24) {
        attackforce = true;
       }


      
    }
  } else
  {
    xspeed = 0.6;
    espeed = 0.75;
    pspeed = 0.1;
    bspeed = 0.12;
    idl.show();
    idl.animate();  
    bowforce = false;
    frms = [];
}
  
  
  for (let i = 0; i < enemies.length; i++) {  
    
    if (enemies[i].x < 0 - 50) {
      enemies.splice(i, 1);
      enemies.push(new Sp (animation10, random(width, width*3), height/2-random(15,25), random(0.1, 0.4)));
      // if (enemies[i].x < (width/4+30) && enemies[i].x > (width/4+10)) {
      // enemies[i].show(animation101);
      // enemies[i].animate(espeed);
      // } else if (enemies[i].x < (width/4)) {
      //   enemies[i].show(animation10);
      //   enemies[i].animate(espeed);
      // } else if (mouseIsPressed && mouseX<width/2) {
        // c
      // }

    } else {
      enemies[i].show(animation10);
      enemies[i].animate(espeed);
    }
  }
//   display arrow
  for (var i = 0; i < arrws.length; i++) {
    arrws[i].show();
    arrws[i].move();
    if (arrws[i].x > width*2/3) {
        arrws[i].del();
        }
//     collision detact for bow attack
    for(var j = 0; j < enemies.length; j++ ) {
      
      if (arrws[i].hits(enemies[j])) {
        // console.log("hit");
        rx = enemies[j].x;
        ry = enemies[j].y;  
        enemies[j].pop();
        arrws[i].del();
        enemydies.push(new Noloop (animation101, rx, ry)); 
        
        ttimer = frameCount;
        // console.log("b" + ttimer);
      }
    }
  }
  
//     collision detect for sward attack
  for (var j = 0; j < enemies.length; j++) {
    if (attackforce == true && enemies[j].x < width/3 - 45) {
        rx = enemies[j].x;
        ry = enemies[j].y;  
        enemies[j].pop();
        enemydies.push(new Noloop (animation101, rx, ry)); 
        ttimer = frameCount;
        
      }
  }
  // console.log("ene" + enemies.length);
  // console.log("h" + hn.length);
  
  for (var j = 0; j < enemies.length; j++) {
    hn.push(1);
    if (enemies[j].x < width/3 +20 && enemies[j].x > width/3 - 20) {
        hn[j] = 1;
        }
    if (hn[j] == 1 && enemies[j].x < width/3 - 60) {
      hearts.pop();
      hn[j] = 0;
      }
    
    // console.log("hn" + hn);
  }
  
  
  
  for(var j = 0; j < enemydies.length; j++ ) {
    enemydies[j].show(); 
  }
  
  // console.log("e" + enemydies.length);
  
  fill(200);
  noStroke();
  textSize(16);
  textFont(fzxs14);
  text(enemydies.length, 60, 30);
  image(imgenemy, 20, 20);
  stagecounter = enemydies.length;

    
    for(let i = 0; i < hearts.length; i++) {
  image(hearts[i], width - 60 - 20*i, 25, 30, 30);
    }
    

  
  
  // console.log("s" + stagecounter);
  // console.log("d" + deadcounter);
    // console.log("123" + sindex);
    

    if (stagecounter >= deadcounter && sindex <= 4) {
      
      if ((frameCount - ttimer) > 180 && sindex == 3) {
        rd = random(-4,4);
      }
      
      if ((frameCount - ttimer) > 300) {
        clr();
      }
      
  } else if (sindex == 5) {
      bgm5.stop();
      for(var i=0; i<drops.length; i++){
		drops[i].show();
		drops[i].move();
      }

    if (stagecounter >= deadcounter) {   
        if ((frameCount - ttimer) > 1200) {
          clr2();
      }
    }
  } else if (sindex == 6) {
      fill(0);
      rect(0, 0, width, height);
      image(vid, width/4, 0, width, height);
      // image(bg0071, width/2 - 45, height/2 - 55, 60, 67);
    xx6 = xx6 - pspeed;
    if (xx6 < width/2) {
      xx6 = width/2;
    }

      if ((frameCount - ttimer) > 300) {
          image(bg0071, width/4*3-30, height/2-40, 60, 67);
      }
    
    for(var i=0; i<drops.length; i++){
		drops[i].show();
		drops[i].move();
    }
    
    if(endingm.isPlaying() == false) {
     vid.stop();
     stay.show();
     stay.animate();
   } else {
       textAlign(CENTER);
  textSize(12);
  textFont(fzxs14);
  fill(255);
  text('Production', width/4, height/2 - 80);
  text('TAO', width/4, height/2 - 60);
  text('Sprites', width/4, height/2 - 20);
  text('rvros', width/4, height/2);
  text('Music', width/4, height/2 + 40);
  text('ChiptX', width/4, height/2 + 60);
  text('©2019 WXNW', width/4, height/2 + 100);
   }
      // idl.show();
      // idl.animate();

      // vidLoad();
        

    }
  
  // image(animation101[0], 100, 100);
  // image(animation101[0], 100, 200);

  
  for (var i = enemies.length-1; i >= 0 ; i--) {
    if (enemies[i].toDel) {
    enemies.splice(i, 1);
    }
  }
  
  for (var i = arrws.length-1; i >= 0 ; i--) {
    if (arrws[i].toDel) {
    arrws.splice(i, 1);
    }
  }
  // horses.show();
  // horses.animate();

  }
  // image(animation[frameCount % animation.length], 0, 0);
  
  if(hearts.length <= 0) {
     gg();
  }
}

  
function seIn() {
    setInterval(doIt, 1600);
}

function cIn() {
    setInterval(doIt, 1600);
}

function doIt() {

}

function mouseReleased() {
  mip = false;
  // frms.splice(0,frms.length);
  
  bow.index = 0;
  // console.log('aaa' + bow.index); 
// frms = [];
  soundattack.stop();
  
  
  

//   set animation to the first frame
if(mouseX < windowWidth/2) {
  if (bowforce == true) {
  soundbow.play();
  // frm2 = frameCount;
  arrw = new Arrow(width/3, height/2 + 20, arrowspeed);
  arrws.push(arrw);
  // bowforce = false;
  // frms = [];
     
  }
  
} else if (mouseX > windowWidth/2) {
  
  if (attackforce == true) {
    // soundattack.play();
    // 
    // console.log(attackforce);
  }
  attack.index = 0;
  // frms = [];
}
    
  
// }
  // console.log(frm2);
  if (sindex == 4) {
      delay.process(bgm5, 0.2, .5, 10000);
      // bgm5.play();
  }
  // else {
  //   // bgm[sindex-1].stop();
  // }
}

function mousePressed() {
  if(sindex == 5) {
    bgm6.loop();
     }
 if (sindex == 6) {
  vid.loop();
  endingm.play();
     }
}

function clr() {
    // bgm[sindex].stop();
    loading = true;
  // bgm[sindex].stop();
    sindex ++;
  // bgm[sindex].loop();
    // console.log("index" + sindex);
    timer = frameCount;
    stagecounter = 0;
  var dc = deadcounter;
  var enemynumber = numberenemies[sindex];
    deadcounter = dc + enemynumber;
  // console.log("dc" + dc);
  // console.log("number" + numberenemies[sindex]);
  // console.log(deadcounter);
  
    for (let i = 0; i < numberenemies[sindex]; i++) {
  enemies[i] = new Sp (animation10, random(width, width*3), height/2-random(15,25), random(0.1, 0.4));
  }
  
  
}

function clr2() {
    // bgm[sindex].stop();
    loading = false;
  // bgm[sindex].stop();
    sindex ++;
  // bgm[sindex].loop();
    // console.log("index" + sindex);
    timer = frameCount;
    stagecounter = 0;
  var dc = deadcounter;
  var enemynumber = numberenemies[sindex];
    deadcounter = dc + enemynumber;
  // console.log("dc" + dc);
  // console.log("number" + numberenemies[sindex]);
  // console.log(deadcounter);
  
  //   for (let i = 0; i < numberenemies[sindex]; i++) {
  // enemies[i] = new Sp (animation10, random(width, width*3), height/2-random(15,25), random(0.1, 0.4));
  // }
  
  
}

function gg() {
  fill(0);
  rect(0, 0, width, height);
  
  // push();
  // translate(0, 0);
  die.show();
  textAlign(CENTER);
  textSize(16);
  textFont(fzxs14);
  fill(255);
  text('GAME OVER', width/2, height/2 + 20);
  if (mouseIsPressed) {
    // setup();
    // draw();
    window.location.href = window.location.href;
  }
  // pop();
  
}

function vidLoad() {
  vid.loop();
  // vid.volume(0);
}

function Drop(){
//display drops
	this.x = random(0,width);
	this.y = random(-10, height);
	this.d = 2;
	this.h = random(2, 10);
	this.col= map(this.h, 2, 10, 100, 255);
	
	this.show = function(){
		noStroke();
		fill(this.col,100);
		ellipse(this.x, this.y, this.d, this.h);
	}

//move object
	this.vel = 0;
	this.grv = map(this.h,2,10,3,10);
	this.off = map(this.h,2,10,height/2,height);

	this.move = function(){
		this.y += this.vel;
		this.vel = this.grv;
		if(this.y > this.off){
			this.y = -10;
		}
	}
}

function mousePressed() {
mip = true;
}