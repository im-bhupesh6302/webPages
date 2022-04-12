function calculation(){
    const name=document.getElementById("name").value;
    const ph=document.getElementById("phnum").value;
    const add=document.getElementById("address").value;
    const type=document.getElementById("marr").value;
    const ex=document.getElementById("ex").value;
    let result="";
    let cost=0;
    if(type=="grand"){
         cost=150000;
    }
    else{
        cost=50000;
    }
    if(ex=="yes"){
        cost+=20000;
    }

    result = name+ "<br>" + ph + "<br>" +add + "<br>" + "your estimated cost is"+ "<br>" + cost;  
    document.getElementById("result").innerHTML=result;

}