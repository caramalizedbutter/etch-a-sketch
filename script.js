//default values
let chosenColor="#FFFFFF",supposedChosenColor="#FFFFFF";
let isMouseDown=false;

//input grid
document.querySelector("#inputGrid").addEventListener("click", function(){
    let n=parseInt(document.querySelector("#gridInput").value.trim());
    if(!isNaN(n) && n>0 && n<=100 && Number.isInteger(n)){
        createGrid(n);
    }
    else{
        alert("Please enter a valid whole number between 1 and 100");
    }
});

//choose color from color input.
document.querySelector("#colorPicker").addEventListener("input", function(){
    supposedChosenColor=this.value;
});

//apply chosen color
document.querySelector("#chooseColor").addEventListener("click", function(){
    chosenColor=supposedChosenColor;
});

//Mouse movement capture for fixed color without darkening
document.querySelector("#sketchContainer").addEventListener("mousedown", () => isMouseDown=true );
document.querySelector("#sketchContainer").addEventListener("mouseup", () => isMouseDown=false );
document.querySelector("#sketchContainer").addEventListener("mousemove", function(event){
    if(isMouseDown && event.target.classList.contains("box")){
        event.target.style.backgroundColor=chosenColor;
    }
});

//reset button
document.querySelector("#reset").addEventListener("click", function(){
    document.querySelector("#sketchContainer").innerHTML="";
    chosenColor = "#FFFFFF"; // Reset chosen color
    supposedChosenColor = "#FFFFFF"; // Reset color picker value
    document.querySelector("#colorPicker").value = "#FFFFFF";
    createGrid(16);
});

//function to create the grid
function createGrid(n){
    let sketchContainer=document.querySelector("#sketchContainer");
    sketchContainer.innerHTML="";
    let w=sketchContainer.clientWidth;
    let boxSize=w/n;
    let num=n*n;
    for(let i=0;i<num;i++){
        let box=document.createElement("div");
        box.classList.add("box");
        box.style.width=`${boxSize}px`;
        box.style.height=`${boxSize}px`;
        box.style.backgroundColor="#FFFFFF";
        sketchContainer.appendChild(box);
    }
}

//by default
createGrid(16);

