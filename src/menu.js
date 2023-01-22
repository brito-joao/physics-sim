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
    simulation1.innerHTML="<p>Conservation of momentum</p><p>click me </p>";

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

    let sliders=document.createElement("div");
    sliders.setAttribute("class","sliders");
    

    let velocity1=createAtributeElement("velocity1",1,-20,20);
    let mass1=createAtributeElement("mass1",1,0,20);
    let velocity2=createAtributeElement("velocity2",-1,-20,20);
    let mass2=createAtributeElement("mass2",1,0,20);
    sliders.appendChild(velocity1);
    sliders.appendChild(mass1);
    
    sliders.appendChild(velocity2);
    sliders.appendChild(mass2);
    body.appendChild(sliders);



    let velocity1Display=document.createElement("p");
    velocity1Display.innerText=`Velocity after inpact: ${0}`;
    velocity1Display.setAttribute("class","velocity1display");
    body.appendChild(velocity1Display);
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



function createAtributeElement(name,default_value,min_value,max_value){
    let element=document.createElement("div");
    element.setAttribute("class",`box`);
    
    let display_name=document.createElement("p");
    display_name.innerText=name;
    let display=document.createElement("input");
    let slider=document.createElement("input");

    display.setAttribute("class",`${name}`);
    slider.setAttribute("type","range");
    slider.setAttribute("min",`${min_value}`);
    slider.setAttribute("max",`${max_value}`);
    slider.value=default_value;
    slider.setAttribute("class",`${"slider"+name}`);
    display.value=default_value;
    slider.oninput = function() {
        display.value = this.value;
    }
    element.appendChild(display_name);
    element.appendChild(display);
    element.appendChild(slider);
    return element;
}