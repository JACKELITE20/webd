var btn=document.querySelector(".submit");
btn.addEventListener("click",myfunc);
function myfunc(){
    var amt=document.querySelector(".amount").value;
    var cash=document.querySelector(".cash").value;
    amt=parseInt(amt);
    cash=parseInt(cash);
    var diff=cash-amt;
    console.log(amt);
    console.log(cash);
    console.log(diff);
    var arr=[0,0,0,0,0,0,0];
    if(!isNaN(amt) && !isNaN(cash) && amt<=cash){

        var one=document.querySelector(".two-thousand");
        var two=document.querySelector(".five-hundred");
        var three=document.querySelector(".hundred");
        var four=document.querySelector(".twenty");
        var five=document.querySelector(".ten");
        var six=document.querySelector(".five");
        var seven=document.querySelector(".one-rupee");
        
        arr[0]=Math.floor(diff/2000);
        arr[1]=Math.floor((diff%2000)/500);
        arr[2]=Math.floor(((diff%2000)%500)/100);
        arr[3]=Math.floor((((diff%2000)%500)%100)/20);
        arr[4]=Math.floor(((((diff%2000)%500)%100)%20)/10);
        arr[5]=Math.floor((((((diff%2000)%500)%100)%20)%10)/5);
        arr[6]=Math.floor(((((((diff%2000)%500)%100)%20)%10)%5)/1);
        one.innerText=arr[0];
        two.innerText=arr[1];
        three.innerText=arr[2];
        four.innerText=arr[3];
        five.innerText=arr[4];
        six.innerText=arr[5];
        seven.innerText=arr[6];
        
    }
    else{
        alert("Enter Valid Amount and Cash");
    }
}