let gameLoopInterval;

//create objects with all the needed info to inicialize;
function Block(x,y,width,height,velocity,acceleration,mass){
    this.x=x;
    this.y=y;
    this.mass=mass;
    this.height=height;
    this.width=width;
    this.velocity=velocity;
    this.acceleration=acceleration;
}
let block1=new Block(10,10,10,10,2,0,10);
let block2=new Block(200,10,10,10,0,0,10);
export function gameLoop1(velocity_slider,canvas,ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    block1.velocity=velocity_slider.value;
    block1.x+=block1.velocity/3;

    //collision detection
    if(block1.x+block1.width>=block2.x){
        block2.x=block1.x+block1.width;
    }

    block1.y=canvas.height-block1.height;
    block2.y=canvas.height-block2.height;
    ctx.fillRect(block1.x, block1.y, block1.width, block1.height);
    ctx.fillRect(block2.x, block2.y, block2.width, block2.height);

    console.log("loop");
}


export function startGameLoop(){
    const canvas = document.querySelector(".cvs");
    const ctx = canvas.getContext("2d");
    const velocity_slider=document.querySelector(".slider");
    
    gameLoopInterval= setInterval(()=>gameLoop1(velocity_slider,canvas,ctx),20)
    console.log("loop-start");
}

export function stopGameLoop(){

    clearInterval(gameLoopInterval);
    
    console.log("loop-stop");
}

export function resetLoop(){
    //change the objects to default values; found a bug that needs fixing, when reset is pressed it doesnt work
    block1.x=10;
    block1.y=10;
    block2.x=200;
    block2.y=10;
}