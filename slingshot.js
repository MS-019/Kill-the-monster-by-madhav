class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 12
        }
        this.slingshot = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.slingshot);
    }

    display(){
        if(this.slingshot.bodyA!=null)
        {var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    fly(){
        this.slingshot.bodyA=null;
    }
    
}