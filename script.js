var a=Math.ceil(Math.random()*100);
var count=0;
var t;
check=()=>{
    
    var b=parseInt(document.getElementById("num").value);
    
    if(a>b)
    {
    document.getElementById("res").textContent="Try it with a larger number";
    count++;
    }
    else if(a<b)
    {
    document.getElementById("res").textContent="Try it with a smaller number";
    count++;
    }
    else
    {
       
    document.getElementById("res").textContent="Congrats!! You have got the number in "+count+" tries";
   
    }

}