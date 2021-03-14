class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
  
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
   display(){
        strokeWeight(4);
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        var offset = this.chain.pointB
        //line(pointA.x, pointA.y, this.chain.offsetX, this.chain.offsetY);
        line(pointA.x, pointA.y, 400-(-offset.x), pointB.y);
    }
}
