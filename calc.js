var input = document.querySelector("#your-input");
var buttons= document.querySelectorAll("button.number-button");
for( var i=0; i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function(event)
    {
        input.value = input.value + event.currentTarget.value;
    })
}
function calculate(){
 var a = input.value;
 var b = eval(a);
 document.getElementById("box").innerHTML = b;
}
function temperature(){
    var a = input.value;
    var f = parseFloat((a*9/5)+32);
    document.getElementById("box").innerHTML = f;
}
function square(){
    var a = input.value;
    var c = parseFloat(a*a);
    document.getElementById("box").innerHTML = c;
}
function factorial(){
    var a = input.value;
    var fact = 1;
    for(let i=1;i<=parseInt(a);i++)
    {
      fact = fact*i;  
    }
    document.getElementById("box").innerHTML = fact;
} 
function cube(){
    var a = input.value;
    var cube = parseInt(a*a*a);
    document.getElementById("box").innerHTML = cube;
}
function sqrt(){
    var a = input.value;
    var r = parseInt(Math.sqrt(a));
    document.getElementById("box").innerHTML = r;
}
function age()
{
    var a = input.value;
    const da = new Date();
    let year = da.getFullYear();
    var age = parseInt(year-a);
    document.getElementById("box").innerHTML = age;
}
function backSpace() {
            var bsp = document.getElementById("your-input").value;
            document.getElementById("your-input").value=bsp.substring(0,bsp.length -1);
        }