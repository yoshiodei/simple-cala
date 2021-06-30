let screen = document.querySelector('#screen');

let button = document.querySelector('.button__row');


button.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.value === "c")
    screen.value = "";
    else if(e.target.value === "=")
    screen.value = eval(screen.value);    
    else if(e.target.value === "<")
    screen.value = screen.value.substr(0,screen.value.length-1); 
    else if(e.target.type === "button")
    screen.value += e.target.value;    
});


