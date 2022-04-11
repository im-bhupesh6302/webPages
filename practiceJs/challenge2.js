 names = [];
function addName(){
    var name=document.getElementById("name").value;
    if(name == null || name == ""){
        alert("Name should not be empty");
    }
    if(name != ""){
        names.push(name);
        displayNames();
        document.getElementById("name").value="";
        document.getElementById("name").focus();
    }
}

function removeName(){
    if(names.length == 0){
        alert("No elements to remove");
    }
    names.pop();
    displayNames();
}

function displayNames(){
    var result="";
    for(let i=0;i<names.length;i++){
        result=result+"<br>"+names[i];
    }
    document.getElementById("result").innerHTML=result;
}

function focusName(){
    document.getElementById("name").focus();
}