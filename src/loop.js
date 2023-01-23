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
let block1=new Block(10,10,20,20,2,0,10);
let block2=new Block(200,10,20,20,0,0,10);
let has_collided=false;

export function gameLoop1(display1,mass_slider2,mass_slider1,velocity_slider1,velocity_slider2,canvas,ctx){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(2, 100, 1, 1);
    ctx.fillRect(2, 110, 10, 1);
    

    

    //collision detection
    if(((block1.x+block1.width>=block2.x && block1.x<=block2.x+block2.width) ) && has_collided==false){
        has_collided=true;

        //law of conservation of energy
        
        // my old wrong attempted formula: let velocity_after=(block1.mass*block1.velocity+block2.mass*block2.velocity)/(block1.mass+block2.mass);
        let final_velocity_block1 = (block1.velocity * (block1.mass - block2.mass) + 2 * block2.mass * block2.velocity) / (block1.mass + block2.mass);
        let final_velocity_block2 = (block2.velocity * (block2.mass - block1.mass) + 2 * block1.mass * block1.velocity) / (block1.mass + block2.mass);
        //2 vars up above made with chat
        
        block1.velocity=final_velocity_block1;
        block2.velocity=final_velocity_block2;
        
        
        //change the display 
        display1.innerText = `Velocity of block 1 after inpact: ${block1.velocity.toFixed(2)}`;
        //velocity_slider2.value=block2.velocity;
        //in collision, if velocity slider is changed, change;
        velocity_slider1.value = block1.velocity.toFixed(2);
        velocity_slider2.value = block2.velocity.toFixed(2);

        
    }else{
        
        if(!has_collided) {
            block1.velocity=velocity_slider1.value;
            block2.velocity=velocity_slider2.value;
            has_collided=false;
        }
    }

    
    
    block1.mass=mass_slider1.value;
    block2.mass=mass_slider2.value;


    block2.x+=block2.velocity/3;
    block1.x+=block1.velocity/3;
    block1.y=canvas.height-block1.height;
    block2.y=canvas.height-block2.height;

    
    ctx.fillRect(block1.x, block1.y, block1.width, block1.height);
    ctx.fillRect(block2.x, block2.y, block2.width, block2.height);

    console.log("loop");
}


export function startGameLoop(){
    const canvas = document.querySelector(".cvs");
    const ctx = canvas.getContext("2d");

    //add this to objects to shorten
    const velocity_slider1=document.querySelector(".velocity1");
    const velocity_slider2=document.querySelector(".velocity2");
    const mass_slider1=document.querySelector(".slidermass1");
    const mass_slider2=document.querySelector(".slidermass2");
    const display1=document.querySelector(".velocity1display");
    
    gameLoopInterval= setInterval(()=>gameLoop1(display1,mass_slider2,mass_slider1,velocity_slider1,velocity_slider2,canvas,ctx),20)
    console.log("loop-start");
}

export function stopGameLoop(){

    clearInterval(gameLoopInterval);
    
    console.log("loop-stop");
}

export function resetLoop(){
    //change the objects to default values; found a bug that needs fixing, when reset is pressed it doesnt work
    const velocity_slider1=document.querySelector(".velocity1");
    const velocity_slider2=document.querySelector(".velocity2");
    const mass_slider1=document.querySelector(".slidermass1");
    const mass_slider2=document.querySelector(".slidermass2");
    
    
    block1.x=10;
    block1.y=10;
    block2.x=200;
    block2.y=10;

    velocity_slider1.value=1;
    velocity_slider2.value=-1;
    mass_slider1.value=1;
    mass_slider2.value=1;
}