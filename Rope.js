class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options= {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x : this.offsetX ,y : this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
  
    }
    display(){
        var startPoint = this.rope.bodyA.position;
        var endPointX = this.rope.bodyB.position.x + this.offsetX;
        var endPointY = this.rope.bodyB.position.y + this.offsetY;
        
      
        strokeWeight(3);
        line (startPoint.x,startPoint.y,endPointX,endPointY);
        
    }
  
  }