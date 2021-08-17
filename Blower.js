class Blower{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        };

        this.body = Bodies.rectangle(x, y, width * 2/3, height, options);
        this.mouth = Bodies.rectangle(x + width * 1/2, y - width * 1/6 + 15, width* 1/3, width * 1/3, options);
        this.width = width;
        this.height = height;
        this.mouthd = width* 1/3;
        World.add(world, this.body);
        World.add(world, this.mouth);
    }

    display(){
        var pos = this.body.position;
        var pos2 = this.mouth.position;
        push();
        fill("sienna");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        rect(pos2.x, pos2.y, this.mouthd, this.mouthd);
        pop();
    }

}