
class Character {
    constructor() {
        this.x = 500;
        this.y = 600 ;
        this.size = 60;
        this.missed = 1;
        this.jumping = false;
        this.falling = false;  
        
    }

    
    display(){
    
        fill(250/this.missed, 0, 0);
        // stroke(250/this.missed, 250/this.missed, 250/this.missed, 180);
        strokeWeight(2);
        ellipse(this.x,this.y,this.size);        
    }
    
    moveUp(){
        this.y-=20;
    }    
    
    checkWalls(walls){
        // console.log(walls)
        walls.forEach( (wall, i) => {

            const ballLeftEdge = this.x - (this.size/2);
            const ballRightEdge = this.x + (this.size/2);
            const boxLeftEdge = wall.x;
            const boxRightEdge = wall.x + wall.width;
            const ballTop = this.y - (this.size/2);
            const ballBottom = this.y + (this.size/2);
            const boxBottom = wall.y + wall.height;
            const boxTop = wall.y;


            if(ballRightEdge > boxLeftEdge && ballLeftEdge < boxRightEdge && 
                ballTop < boxTop && ballBottom > boxBottom ){
                    console.log('hit');
                    wall.height = 500;
                    wall.y -= 600;
                   wall.soundPlaying = true;
                  wall.direction = wall.direction * -3;
                  wall.sound.play();
                //   wall.setVolume(1.0);
                }


            // if((this.y - this.size/2) < wall.y  + wall.height &&
            // (this.y + this.size/2) > wall.y &&
            // (this.x - this.size/2) > wall.x  &&
            // (this.x + this.size/2) < wall.x + wall.width) {

            // }
        })
    }
}    
        // console.log(this.x, this.y);
        // console.log(wall.x, wall.y)

  
        
            // if(wall.soundPlaying){
            //     if(wall.y + wall.height - 50 < 0){
            //        wall.sound.setVolume(0);
            //     	wall.soundPlaying = false;
            //     } else {
            //     wall.sound
            //     } 
            // }
        
    
        

