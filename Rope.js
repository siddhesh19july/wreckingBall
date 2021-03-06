class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }

        this.pointB=pointB
        this.rope1=Constraint.create(options)

        World.add(world,this.rope1);
    }

    display(){
        if(this.rope1.bodyA){
            var pointA = this.rope1.bodyA.position
            var pointb = this.pointB;
            push();
            strokeWeight(5)
            line(pointA.x,pointA.y,pointb.x,pointb.y);
            pop();

        }
    }
}