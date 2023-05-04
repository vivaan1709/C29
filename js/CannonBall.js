
// class CannonBall{
//     constructor(x,y,r)
//     {   
//         var options = {
//         isStatic : true
//         }
//         this.x = x;
//         this.y = y;
//         this.r = r; 
//         this.body = Bodies.circle(this.x,this,y,this.r,options);
//         World.add(world,this.body);
//     }
//      display()
//      {
//         var pos = this.body.position;
//         //push();
//         //translate(pos.x, pos.y);
//         fill("black");
//         ellipseMode(RADIUS);
//         ellipse(pos.x,pos.y ,this.radius);
//        // pop();
//      }



class CannonBall {
    constructor(x, y) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.r = 40;
      this.image = loadImage("assets/cannonball.png");
  //create a circle body
  //load the image
      this.body = Bodies.circle(this.x,this,y,this.r,options);
      World.add(world, this.body);
    }
  
    shoot() {
      
      //set the angle of ball to cannon
      //set static value to the body
      //set the velocity for the ball to make the ball to move
    }
  
    display() {
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r,this.r);
  //display the image
      pop();
  
      }
    }






