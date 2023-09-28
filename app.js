let x=0;
let y=0;

let circle = document.querySelectorAll('div')[0];
// let circle=document.querySelector('.circle');
document.body.onkeydown=function(e){

  
    if(e.keyCode===39){
    x+=10;
    circle.style.left=`${x}px`;
   
}
    else if(e.keyCode==37){
        
        x-=10;
        circle.style.left=`${x}px`;
    }

    else if(e.keyCode===40){
        
        y+=10;
        circle.style.top=`${y}px`;
    }
    else if(e.keyCode===38){
        
            y-=10;
            circle.style.top=`${y}px`;
        
    }
}

