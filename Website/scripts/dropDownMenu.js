
const menuDropdown = document.createElement("div");
menuDropdown.id = "dropDown"
const dropdown1 = document.createElement("a")
dropdown1.href = "menu.html#Husetsspesialiteter"
dropdown1.innerHTML = "Spesialiteter"
const dropdown2 = document.createElement("a")
dropdown2.href = "menu.html#Forretter"
dropdown2.innerHTML = "Forretter"
const dropdown3 = document.createElement("a")
dropdown3.href = "menu.html#Hovedretter"
dropdown3.innerHTML = "Hovedretter"
const dropdown4 = document.createElement("a")
dropdown4.href = "menu.html#Barnemeny"
dropdown4.innerHTML = "Barnemeny"
const dropdown5 = document.createElement("a")
dropdown5.href = "menu.html#Desserter(hvetegluten)"
dropdown5.innerHTML = "Desserter"
const dropdown6 = document.createElement("a")
dropdown6.href = "menu.html#VarmDrikke"
dropdown6.innerHTML = "Varm Drikke"
menuLink.appendChild(menuDropdown)
menuDropdown.appendChild(dropdown1)
menuDropdown.appendChild(dropdown2)
menuDropdown.appendChild(dropdown3)
menuDropdown.appendChild(dropdown4)
menuDropdown.appendChild(dropdown5)
menuDropdown.appendChild(dropdown6)

menuLink.onmouseover = function(){
    menuDropdown.style.display = "block";
}
headerDiv.onmouseleave = function(){
    menuDropdown.style.display = "none";
}

/*Kode hentet fra stack overflow, brukes for å offsette det at headeren dekker over for referansen*/
/*https://stackoverflow.com/questions/17534661/make-anchor-link-go-some-pixels-above-where-its-linked-to*/
window.addEventListener("hashchange", function () {
    /**Header offsetHeight is used to dynamically move scroll position to where header does not cover content */
    window.scrollTo(window.scrollX, window.scrollY - this.document.getElementById("header").offsetHeight);
});