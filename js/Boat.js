class boat {
  constructor(x, y, w,h,boatposition) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h=h
    this.boatposition = boatposition

    var options = {
      restitution: 0.8,
      friction: 1,
      density: 1,
    };

    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w,this.h, options);
    World.add(world, this.body);

    this.Image = loadImage('../C27-Ta-v4--main/assets/boat.png')

   
  }

  display() {

    var pos = this.body.position
    var angle = this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    imageMode(CENTER)
    image(this.Image,0,this.boatposition,this.w,this.h)
    pop()
  }
}
