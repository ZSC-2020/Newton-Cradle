class rope{
constructor(bodyA,pointB){
    var options={
 bodyA:bodyA,
 pointB:pointB,
 length:220
    }
    this.pointB=pointB
    this.bodyA=bodyA
this.rope=Constraint.create(options)
World.add(world,this.rope)
}

display(){
    if(this.rope.bodyA){
        push()
        stroke("blue")
strokeWeight(7)
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
pop()
    }
}
}
