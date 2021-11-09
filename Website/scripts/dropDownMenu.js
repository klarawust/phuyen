
const menuDropdown = document.createElement("div");
menuDropdown.id = "dropDown"
const dropdown1 = document.createElement("a")
dropdown1.href = "#Husetsspesialiteter"
dropdown1.innerHTML = "Spesialiteter"
const dropdown2 = document.createElement("a")
dropdown2.href = "#Forretter"
dropdown2.innerHTML = "Forretter"
const dropdown3 = document.createElement("a")
dropdown3.href = "#Hovedretter"
dropdown3.innerHTML = "Hovedretter"
const dropdown4 = document.createElement("a")
dropdown4.href = "#Barnemeny"
dropdown4.innerHTML = "Barnemeny"
const dropdown5 = document.createElement("a")
dropdown5.href = "#Desserter(hvetegluten)"
dropdown5.innerHTML = "Desserter"
const dropdown6 = document.createElement("a")
dropdown6.href = "#VarmDrikke"
dropdown6.innerHTML = "Varm Drikke"
menuLink.appendChild(menuDropdown)
menuDropdown.appendChild(dropdown1)
menuDropdown.appendChild(dropdown2)
menuDropdown.appendChild(dropdown3)
menuDropdown.appendChild(dropdown4)
menuDropdown.appendChild(dropdown5)
menuDropdown.appendChild(dropdown6)

menuLink.onmouseover = function(){
    menuLink.style.backgroundColor = "lightgrey";
    menuDropdown.style.display = "block";
}
headerDiv.onmouseleave = function(){
    menuLink.style.backgroundColor = "inherit";
    menuDropdown.style.display = "none";
}