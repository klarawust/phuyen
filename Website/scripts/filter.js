
hovedretterDiv = document.getElementById("Hovedretter");
underDivs = hovedretterDiv.getElementsByTagName("div");
menu = document.getElementById("menu")  
vegetarCheck = document.getElementById("vegetarCheck");


function check(){
    if (vegetarCheck.checked == true){
        var displayStyle = "none";
    }  else {
        var displayStyle = "inherit"
    }
    document.getElementById("Forretter").style.display = displayStyle;
        document.getElementById("Husetsspesialiteter").style.display = displayStyle;
        document.getElementById("Desserter(hvetegluten)").style.display = displayStyle;
        document.getElementById("VarmDrikke").style.display = displayStyle;
        document.getElementById("Barnemeny").style.display = displayStyle;

        for (i = 0; i < underDivs.length; i++){
            if (underDivs[i].id != "Vegetarretter"){
                underDivs[i].style.display = displayStyle;
            }
        }
}