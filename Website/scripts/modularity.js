/** Initialize header */
const headerDiv = document.createElement("div");
headerDiv.className = "header";

const linksDiv = document.createElement("div");
linksDiv.id = "links";

const menuLink = document.createElement("a");
menuLink.href = "menu.html";
menuLink.innerHTML = "Meny";

const infoLink = document.createElement("a");
infoLink.href = "info.html";
infoLink.innerHTML = "Info/kontakt";

const homepageLink = document.createElement("img");
homepageLink.id = "logo";
homepageLink.src = "images/Phuyenlogo.png";
homepageLink.alt = "Logo";

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
phoneParagraph.innerHTML = "Telefonummer: 73 52 99 50";
const creditParagraph = document.createElement("p");
creditParagraph.className = "footerText";
creditParagraph.innerHTML =
  "Nettside laget av: Aksel, Eiril, Erik, Jens og Klara Wüstenberg, ved NTNU Trondheim (2021)";

footerDiv.append(phoneParagraph);
footerDiv.appendChild(addressParagraph);
footerDiv.append(creditParagraph);

document.body.appendChild(footerDiv);
