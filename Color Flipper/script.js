const button = document.getElementById("btn") 
const colorText = document.getElementById("color") 
const wrap = document.getElementById("wrap") 

//represent colors in hexa decimal format 
const hex = [0,1,2,3,4,5,6,7,8,9, 'A' , 'B' , 'C' , 'D' , 'E' , 'F'] 

button.addEventListener('click' , changeBg) 

function changeBg(){
    let color = '#' 
    //loop to concat color 
    for(let i = 1 ; i<= 6 ; i++){
        color = color + randomHex() 
    } 

    //changing bg color to wrap 
    wrap.style.backgroundColor = color 
    colorText.innerHTML = color  
}

//generate random hex number 
function randomHex() {
    let n  = Math.floor(Math.random()*16) 
    return hex[n] 
}
