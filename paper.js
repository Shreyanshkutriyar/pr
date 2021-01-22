class Paper {  
    constructor(){
        var options = {
            restitution:0,
            friction:0,
            density:1.2,
            
        }
         this.radius = radius
        this.body = Bodies.circle(250,540, 20, options);
        this.width = 33;
        this.body = loadImage(paper.png)
	    World.add(world, this.body);
       
        
   }
   display(){
       var pos = this.body.position;
       var angle = this.body.angle;
    fill("white");
    rotate(angle);
    ImageMode(CENTER);
    Image(this.image,pos.x, pos.y,33,33);
   }
}
