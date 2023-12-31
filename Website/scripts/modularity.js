/**Set sticky header on scroll. Inspiration from https://www.w3schools.com/howto/howto_js_sticky_header.asp*/
function setStickyHeader() {
  var header = document.getElementById("header");

  if (window.scrollY > 0) {
    header.classList.add("sticky"); // add sticky CSS class which fixes position and pushes to the front
    document.body.style.paddingTop = String(header.offsetHeight) + "px"; // pad body with height of header to avoid jumps when scrolling
  } else {
    header.classList.remove("sticky");
    document.body.style.paddingTop = 0;
  }
}

/** Initialize header */
const headerDiv = document.createElement("div");
headerDiv.className = "header";
headerDiv.id = "header";

const linksDiv = document.createElement("div");
linksDiv.id = "links";

const menuLink = document.createElement("a");
menuLink.href = "menu.html";
menuLink.id = "menuLink";
menuLink.innerHTML = "Meny";

const infoLink = document.createElement("a");
infoLink.href = "info.html";
infoLink.innerHTML = "Info";

const logo = document.createElement("img");
const homepageLink = document.createElement("a");
homepageLink.href = "homepage.html";
homepageLink.id = "homepageLink";
logo.id = "logo";
logo.src = "images/Phuyenlogo.png";
logo.alt = "Logo";
homepageLink.appendChild(logo);

const imagesLink = document.createElement("a");
imagesLink.href = "images.html";
imagesLink.innerHTML = "Bilder";

const aboutLink = document.createElement("a");
aboutLink.href = "about.html";
aboutLink.innerHTML = "Om oss";

linksDiv.appendChild(menuLink);
linksDiv.appendChild(infoLink);
linksDiv.appendChild(homepageLink);
linksDiv.appendChild(aboutLink);
linksDiv.appendChild(imagesLink);

headerDiv.appendChild(linksDiv);

document.body.prepend(headerDiv);

/**Initialize footer */
const footerDiv = document.createElement("div");
footerDiv.className = "footer";

const addressParagraph = document.createElement("p");
addressParagraph.className = "footerText";
addressParagraph.innerHTML = "Besøksadresse: Repslagerveita 2, 7012 Trondheim";
const phoneParagraph = document.createElement("p");
phoneParagraph.className = "footerText";
phoneParagraph.innerHTML = "Telefonummer: ";
const number = document.createElement("a");
number.className = "doclinks";
number.href = "tel:0047 73 52 99 50";
number.innerHTML = "73 52 99 50";
const creditParagraph = document.createElement("p");
creditParagraph.className = "footerText";
creditParagraph.innerHTML =
  "Nettside laget av: Aksel Lessum, Eiril Ugulen, Erik Gule Paulsen, Jens Waage og Klara Wüstenberg, ved NTNU Trondheim (2021)";

phoneParagraph.append(number);
footerDiv.append(phoneParagraph);
footerDiv.appendChild(addressParagraph);
footerDiv.append(creditParagraph);

document.body.appendChild(footerDiv);

window.addEventListener("scroll", setStickyHeader); // dynamically set header to be sticky

