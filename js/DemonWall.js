
class DemonWall{
    constructor(x, width, baseColor, sound){
        this.x = x;
        this.y = random(-200,0);
        this.width = width;
        this.height = 40;
        this.baseColor = baseColor;
        this.direction = 1;
        this.sound = sound;
        this.soundPlaying = false;
        // this.freq=freq; 
        
        // this.osc = new p5.Oscillator;
        // this.osc.setType('sine');
        // this.osc.freq(this.freq);
        // this.osc.amp(0);
        // this.osc.start();
        
          console.log(this.sound);
    }

    display() {
        var coin = random(1000);
        if(coin > 500) {
          fill(this.baseColor)
      } else {
        stroke(220,220,220);
        strokeWeight(6);
      fill(random(255),random(255),random(255),random(30,100));
      }
      rect(this.x,this.y, this.width, this.height);
  }
  
    move(){
        this.y += wallSpeed * this.direction;
    }

    playSound(){

    }
    

}