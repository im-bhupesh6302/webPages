function validate(){
    const   bage=document.getElementById("bage").value;
    const gage = document.getElementById("gage").value;
    var result="";
    if(bage >= 18 && gage >=21){
        result="validMarriage";
        // document.getElementById("result").innerHTML=result;
    }
    else{
        result="invalidMarriage";
    }
    document.getElementById("result").innerHTML=result;
}
