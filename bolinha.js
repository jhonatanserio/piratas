//bolinha de canhão
class CannonBoll{
constructor(x,y,){
var options={
  restituction:0.8,
  friction:1.0,
  density:1.0,
  isStatic:true
}
this.r=40
this.body=Bodies.circle(x,y,this.r,options);
this.image=loadImage("./assets/cannonball.png");
World.add(world,this.body);
}
shoot(){
  var newAngle=cannon.angle-28
  newAngle=newAngle*(3.14/180)
  var velocity=p5.Vector.fromAngle(cannon.angle)
  velocity.mult(0.2)
  Matter.Body.setStatic(this.body,false)
  Matter.Body.setVelocity(this.body,{x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)})
}
display(){
 var ange=this.body.angle
 var mcpose=this.body.position
 push()
 translate(mcpose.x,mcpose.y)
 rotate(angle)
 imageMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop()
}
}