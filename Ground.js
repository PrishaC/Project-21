class Ground{
constructor(a,b,c,d){
var options = {
    isStatic:true
}
this.body = Bodies.rectangle(a,b,c,d,options)
this.width = c
this.height = d
World.add(world,this.body)
}
display(){
    var p = this.body.position
    push ()
    rectMode (CENTER)
    stroke("black")
    strokeWeight(1)
    fill ("yellow")
    rect(p.x,p.y,this.width,this.height)
    pop ()
}
}