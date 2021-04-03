class Drop {
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution: 0.1
        }
        this.drop = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.drop)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.drop.position;
        fill ("blue")
        ellipseMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        ellipse(pos.x,pos.y,this.radius,this.raduis);
    }

    update(){
        if (this.drop.position.y>height){
            Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
        }
    }
}
