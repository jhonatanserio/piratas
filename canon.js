class CANNON{
constructor(x,y,width,height,angle){
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.angle=angle;
    this.canon_image=loadImage("./assets/canon.png")
    this.canonbase_image=loadImage("./assets/cannonBase.png")
}
display(){
  push()
  translate(this.x,this.y)
  rotate(this.angle)
  imageMode(CENTER)
  image.this(this.canonbase_image,70,25,200,200)
}
}