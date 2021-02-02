class Hero{
    constructor(x, y, r){
        var options={
            density:1,
            frictionAir: 1
        }
        this.body = Bodies.circle(x, y, r/2,options);
        this.r=r;
        this.image = loadImage("images/Superhero-01.png");
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill("white");
        imageMode(CENTER);
        image(this.image, 0,0, this.r, this.r);
        pop();

        
    }
}