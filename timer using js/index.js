var timer;
var sec='00';
var min='0';
var minute='00';
var hours='00';
var hour='0';





function pause(){
    clearInterval(timer);
}

function play(){
    clearInterval(timer);
    timer=setInterval(()=>{
        document.getElementById("timer").innerHTML= hours+':'+minute+':'+sec;
        sec++;
        if(sec==60)
        {
            sec=0;
            min++;//min=61
        }
        if(sec<10)
        {
            sec='0'+sec;
        }
        if(min<10)
        {
            minute='0'+min;

        }
        else
        {
            minute=min;//minute=61

        }
        if(minute==60)
        {
            min=0;
            minute='00';//minute=0
            hour++;//hour=1
        }
        if(hour<10)
        {
            hours='0'+hour;
        } 
        else if(hour>23)
        {
            hours='00';
            hour=0;
        }
        else
        {
            hours=hour;
        }
        
    },0.5)
}

function reset(){
    clearInterval(timer);
    document.getElementById("timer").innerHTML='00:00:00';
    sec=0;
    min=0;
    minute='00';
    hours='00';
    hour=0;
}



