class Strength {
  
  pll(f) {
    // noStroke();
    
    if (f<=48) {
    // stroke(255);
    fill(8+f, 80+f*3, 78+f);
    rect(162, 230, f, 4);
    } else {
    stroke(56, 216, 126);
    // fill(56, 216, 126);
    rect(162+random(-2,2), 230+random(0), 48, 4);
    }
  }

}