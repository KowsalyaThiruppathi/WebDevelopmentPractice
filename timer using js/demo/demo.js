
    var change=document.getElementsByClassName("box")[0];
    change.addEventListener("click",function()
    {
      if(document.getElementsByClassName("span")[0].style.color == "red")
      {
        document.getElementsByClassName("span")[0].style.color="blue";
      }
      else if(document.getElementsByClassName("span")[0].style.color == "blue")
      {
        document.getElementsByClassName("span")[0].style.color="red";
      }
      
      
    });