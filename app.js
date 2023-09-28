let x=0;
let y=0;
let gameActive = true;
let circle = document.querySelectorAll('div')[0];
let area=document.querySelector('.area')
const circleWidth = circle.offsetWidth;
const circleHeight = circle.offsetHeight;
const areaWidth = area.offsetWidth;
const areaHeight = area.offsetWidth;




function isItemInsideArea() {
    return (
        x + circleWidth <= areaWidth && y + circleHeight <= areaHeight
    );
}
document.body.onkeydown=function(e){

  if(gameActive){
    if(e.keyCode===39){
        x+=10;   
    }
        else if(e.keyCode==37){
            x-=10;
        }
    
        else if(e.keyCode===40){     
            y+=10;     
        }
        else if(e.keyCode===38){      
                y-=10;        
        }
    
        circle.style.left=`${x}px`;
        circle.style.top=`${y}px`;
    
        if (!isItemInsideArea()) {
            gameActive = false;
            alert('you was losed')
            setTimeout(() => {
                gameActive = true;
               location.reload();
                resetItemPosition();
            }, 3000);
        }
  }
}

function resetItemPosition() {
    x = 0;
    y = 0;
    item.style.left = x+'px';
    item.style.top = y+'px';
}

