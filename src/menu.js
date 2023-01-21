import { gameLoop1, startGameLoop, stopGameLoop, resetLoop } from "./loop";
export function createMenu(){
    console.log("hello world1");
    const body=document.querySelector("body");
    body.innerHTML="";
    const title= document.createElement("p");
    title.setAttribute("class","title");
    title.innerText="PHYSICS-SIM";

    //first simulation 
    const simulation1=document.createElement("div");
    simulation1.setAttribute("class","sim sim1");
    simulation1.innerHTML="<p>Cars Colliding</p><p>click me </p>";

    body.appendChild(title);
    body.appendChild(simulation1);

    const project1=document.querySelector(".sim1");
    project1.addEventListener("click", ()=>{
        
        createProject1();
    })
}

export function createProject1(){
    const body=document.querySelector("body");
    body.innerHTML="";
    body.innerHTML="<div class='btns'><button class='go-back'>Go Back to menu</button><button class='start-game'>Start Simulation</button><button class='stop-game'>Stop Simulation</button><button class='reset-game'>Reset Simulation</button></div>";

    const canvas=document.createElement("canvas");
    canvas.setAttribute("class","cvs");
    body.appendChild(canvas);

    let button_start=document.querySelector(".start-game");
    let button_reset=document.querySelector(".reset-game");
    let button_stop=document.querySelector(".stop-game");
    let is_clicked=false;
    let velocity= document.createElement("input");
    let velocity_display=document.createElement("p");
    velocity_display.setAttribute("class","vel-d");
    velocity.setAttribute("type","range");
    velocity.setAttribute("min","-30");
    velocity.setAttribute("max","30");
    velocity.value=1;
    velocity.setAttribute("class","slider");
    velocity_display.innerText=`${velocity.value}m/s`;
    velocity.oninput = function() {
        velocity_display.innerHTML = `${this.value}m/s`;
    }
    
    body.appendChild(velocity_display);
    body.appendChild(velocity)
    button_start.addEventListener("click",()=>{
        is_clicked?{}:startGameLoop();
        is_clicked=true;
    });

    button_stop.addEventListener("click",()=>{
        stopGameLoop();
        is_clicked=false;
    });
    button_reset.addEventListener("click",()=>{
        resetLoop();
        
    });
    const exitButton=document.querySelector(".go-back");
    exitButton.addEventListener("click", ()=>{
        is_clicked?(stopGameLoop(),resetLoop()):{};
        createMenu();
        
    });
}