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
    body.innerHTML="<div class='btns'><button class='go-back'>Go Back to menu</button><button class='start-game'>Start Simulation</button><button class='stop-game'>Stop Simulation</button><button class='reset-game'>Reset Simulation</button><button class='switchmode'>Elastic/Inelastic</button></div>";

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
    let mass1=createAtributeElement("mass1",1,1,20);
    let velocity2=createAtributeElement("velocity2",-1,-20,20);
    let mass2=createAtributeElement("mass2",1,1,20);
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
    
    let momentum_text=addText(momentum_explanation);
    body.appendChild(momentum_text)
}



function createAtributeElement(name,default_value,min_value,max_value){
    let element=document.createElement("div");
    element.setAttribute("class",`box`);
    
    let display_name=document.createElement("p");
    display_name.innerText=name;
    let display=document.createElement("input");
    let slider=document.createElement("input");

    display.setAttribute("class",`${name}`);
    display.setAttribute("type","number");
    display.setAttribute("max",`${max_value}`);
    display.setAttribute("min",`${min_value}`);
    slider.setAttribute("type","range");
    slider.setAttribute("min",`${min_value}`);
    slider.setAttribute("max",`${max_value}`);
    slider.value=default_value;
    slider.setAttribute("class",`${"slider"+name}`);
    display.value=default_value;

    display.addEventListener("input",()=>{
        display.value>=max_value+1?display.value=max_value
        :display.value<=min_value-2?display.value=min_value
        :{};
    })
    

    slider.oninput = function() {
        display.value = this.value;
    }
    display.oninput = function() {
        slider.value = this.value;
    }
    element.appendChild(display_name);
    element.appendChild(display);
    element.appendChild(slider);
    return element;
}
let momentum_explanation="The law of momentum states that the momentum of an object will remain constant unless an external force is applied to it. This means that if an object is moving at a certain velocity and no force is acting upon it, it will continue to move at that velocity. However, if a force is applied, the momentum of the object will change. In terms of physics, momentum is defined as the product of an object's mass and velocity. Therefore, the law of momentum can also be stated as the conservation of momentum, which means that the total momentum of a closed system (one in which no external forces are acting) will remain constant over time. This principle is often used in physics to calculate the movement and behavior of objects in various situations, such as collisions and explosions.";
function addText(text){
    let element=document.createElement("div");
    element.setAttribute("class",`text`);

    element.innerText=text;
    return element;
}