class LoadingBall {
    constructor(i, numBalls, centerX, centerY, loadingRadius){
        this.index = i;
        this.theta = TWO_PI/(numBalls*1.3) * i;
        this.centerX = centerX;
        this.centerY = centerY;
        this.loadingRadius = loadingRadius;
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        this.fillColor = [random(255), random(255), random(255), 180];
        this.counter = 0;
        this.paused = false;
        this.resetPaused = this.resetPaused.bind(this);
    }

    update(){
        if(!this.paused){
            this.x = Math.sin(this.theta) * this.loadingRadius + this.centerX;
            this.y = Math.cos(this.theta) * this.loadingRadius + this.centerY;
            this.theta+=0.01;
            this.counter++;
        }
        if(this.counter % 200 === 99){
            this.paused = true;
            setTimeout(this.resetPaused, 400);
        }

  
    }

    display(){
        fill(this.fillColor);
        stroke(220,220,220);
        strokeWeight(2);
        ellipse(this.x, this.y, this.radius * 2)
    }

    resetPaused(){
        this.paused = false;
    }
}