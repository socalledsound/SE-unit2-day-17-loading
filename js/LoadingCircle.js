class LoadingCircle {
    constructor(){
        this.centerX = width/2;
        this.centerY = height/2;
        this.loadingRadius = width/2 - 100;
        this.numBalls = 50;
        this.balls = Array.from({length: this.numBalls}, (balls, i) => new LoadingBall(i, this.numBalls, this.centerX, this.centerY, this.loadingRadius));

    }

    update(){
        this.balls.forEach((ball) => {ball.update()})
    }

    display(){
        this.balls.forEach((ball) => {ball.display()})
    }




}