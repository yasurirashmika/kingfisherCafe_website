
let price1 = 0;
let price2 = 0;
let price3 = 0;
let price4 = 0;
let price5 = 0;
let price6 = 0;
let price7 = 0;
let price8 = 0;
let price9 = 0;
let price10 = 0;
let price11 = 0;
let price12 = 0;

let q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12;

let total =0.00;


function mycart(item){
    q1 = document.getElementById("que1").value;
    q2 = document.getElementById("que2").value;
    q3 = document.getElementById("que3").value;
    q4 = document.getElementById("que4").value;
    q5 = document.getElementById("que5").value;
    q6 = document.getElementById("que6").value;
    q7 = document.getElementById("que7").value;
    q8 = document.getElementById("que8").value;
    q9 = document.getElementById("que9").value;
    q10 = document.getElementById("que10").value;
    q11 = document.getElementById("que11").value;
    q12 = document.getElementById("que12").value;



    
    if(item == "food1"){
        price1= 830*q1;
        document.getElementById("food1").disabled = true;
    

    }
    else if(item == "food2"){
        price2=800*q2;
        document.getElementById("food2").disabled = true;
    }
    else if(item == "food3"){
        price3=30*q3;
        
        document.getElementById("food3").disabled = true;
    }
    else if(item == "food4"){
        price4=40*q4;
        
        document.getElementById("food4").disabled = true;
    }
    else if(item == "food5"){
        price5=50*q5;
        
        document.getElementById("food5").disabled = true;
    }
    else if(item == "food6"){
        price6=60*q6;
        
        document.getElementById("food6").disabled = true;
    }
    else if(item == "food7"){
        price7=70*q7;
        
        document.getElementById("food7").disabled = true;
    }
    else if(item == "food8"){
        price8=70*q8;
        
        document.getElementById("food8").disabled = true;
    }
    else if(item == "food9"){
        price9=70*q9;
        
        document.getElementById("food9").disabled = true;
    }
    else if(item == "food10"){
        price10=70*q10;
        
        document.getElementById("food10").disabled = true;
    }
    else if(item == "food11"){
        price11=70*q11;
        
        document.getElementById("food11").disabled = true;
    }
    else if(item == "food12"){
        price10=70*q12;
        
        document.getElementById("food12").disabled = true;
    }
    else{
        price1=price2=price3=price4=price5=price6=price7=price8=price9=price11=price12=0;
    }

    total = price1+price2+price3+price4+price5+price6+price7+price8+price9+price10+price11+price12;

    document.getElementById("demo1").value= price1;
    document.getElementById("demo2").value= price2;
    document.getElementById("demo3").value= price3;
    document.getElementById("demo4").value= price4;
    document.getElementById("demo5").value= price5;
    document.getElementById("demo6").value= price6;
    document.getElementById("demo7").value= price7;
    document.getElementById("demo8").value= price8;
    document.getElementById("demo9").value= price9;
    document.getElementById("demo10").value= price10;
    document.getElementById("demo11").value= price11;
    document.getElementById("demo12").value= price12;
    document.getElementById("demo8").value= total;


}

function world(){
    document.getElementById("food1").disabled = false;
    document.getElementById("food2").disabled = false;
    document.getElementById("food3").disabled = false;
    document.getElementById("food4").disabled = false;
    document.getElementById("food5").disabled = false;
    document.getElementById("food6").disabled = false;
    document.getElementById("food7").disabled = false;
    document.getElementById("food8").disabled = false;
    document.getElementById("food9").disabled = false;
    document.getElementById("food10").disabled = false;
    document.getElementById("food11").disabled = false;
    document.getElementById("food12").disabled = false;

}


