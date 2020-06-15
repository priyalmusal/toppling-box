class Ground {
//properties 
constructor(x,y,width,hight){
 var ground_option= {
isStatic : true 
 }
 this.body = Bodies.rectangle (x,y,width,hight,ground_option);
 this.width=width;
 this.height=hight;
 World.add(world,this.body);
}
display(){
var pos = this.body.position;
rectMode(CENTER);
fill ("brown");
rect(pos.x,pos.y, this.width, this.height);

}
}

