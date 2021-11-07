
const menuDropdown = document.createElement("div");
menuDropdown.className = "dropDown"
const dropdown1 = document.createElement("a")
dropdown1.href = ".footer"
dropdown1.innerHTML = "Footer"
const dropdown2 = document.createElement("a")
dropdown2.href = ".footer"
dropdown2.innerHTML = "Footer"
const dropdown3 = document.createElement("a")
dropdown3.href = ".footer"
dropdown3.innerHTML = "Footer"
menuLink.appendChild(menuDropdown)
menuDropdown.appendChild(dropdown1)
menuDropdown.appendChild(dropdown2)
menuDropdown.appendChild(dropdown3)

menuLink.onmouseover = function(){
    menuLink.style.backgroundColor = "lightgrey";
    menuDropdown.style.display = "block";
}