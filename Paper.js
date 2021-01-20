class Paper{
    constructor(x,y,radius)
    {
    var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2,
   }
    
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.body=Bodies.circle(this.x,this.y,(this.radius-20)/2,options);
    
    this.image=loadImage("paper.png")
    
    World.add(world,this.body);
    }
    
    display()
    {
    
    var paperpos=this.body.position;
    push();
    translate(paperpos.x,paperpos.y);
    
    imageMode(CENTER);
    image(this.image,0,0,70,70);
    pop()
    
    }
    
    }