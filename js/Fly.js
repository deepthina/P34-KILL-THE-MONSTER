class Fly{
    constructor(bodyA, pointB){

        var options={
            bodyA :bodyA,
            pointB: pointB,
            stiffness :1.2,
            length:420
        }

       
        this.pointB=pointB;
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }

    display(){

        var posA = this.fly.bodyA.position;
        var posB = this.pointB;
        noStroke();     
        line(posA.x,posA.y, posB.x, posB.y);
    }
}