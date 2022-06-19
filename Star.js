class Star{
  constructor(){
  this.x=random(-width,width);
  this.y=random(-height,height);
  this.z=random(width);
  }
  show(){
    stroke(255);
    strokeWeight(4);
   
    
    let sx=map(this.x/this.z,0,1,0,width);
    let sy=map(this.y/this.z,0,1,0,height);  
    let r=map(this.z,0,width,3,0);
     
    this.z=this.z-speed;
    if(this.z<1){
      this.z=random(width);
    }
    ellipse(sx,sy,r)   
  }
  
  
  
  
}