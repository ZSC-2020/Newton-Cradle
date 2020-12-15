class stand{
    constructor(x,y,width,height){
        var options={
    isStatic:true
        }
    
        this.x=x
        this.y=y
        this.w=width
        this.h=height
        this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
    translate(pos.x,pos.y)
    rectMode(CENTER)
    fill("green")
    rect(0,0,this.w,this.h)
    
        pop()
    }
    }