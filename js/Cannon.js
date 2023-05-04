class Cannon {  
  constructor(x, y, width, height, angle) {     //180, 110, 100, 50,angle(positions,size,angle).
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }
  display() {
    // change the angle in the upward direction when the left arrow key was pressed
    if(keyIsDown(RIGHT_ARROW) && this.angle<0.35)
    {
      this.angle=this.angle+0.02;
    }

   //  changed the angle in the downward direction when the right arrow key was pressed
   if(keyIsDown(LEFT_ARROW) && this.angle>-2.45)
   {
     this.angle=this.angle-0.02;
   }
    fill("#676e6a");
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(-10, -20, this.width, this.height);
    pop();
    arc(this.x -30, this.y +90, 140, 200, PI, TWO_PI);//PI is the starting angle of the arc.TWO_PI is teh end of the arc
    noFill();                           
  }
}