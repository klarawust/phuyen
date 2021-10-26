/** Initialize header */
const headerDiv = document.createElement("div");
headerDiv.className = "header";

const linksDiv = document.createElement("div");
linksDiv.className = "links";

const menuLink = document.createElement("a");
menuLink.href = "menu.html";
menuLink.innerHTML = "Meny";

const infoLink = document.createElement("a");
infoLink.href = "info.html";
infoLink.innerHTML = "Info";

const homepageLink = document.createElement("a");
homepageLink.href = "homepage.html";
homepageLink.innerHTML = "Startside";

const imagesLink = document.createElement("a");
imagesLink.href = "images.html";
imagesLink.innerHTML = "Bilder";

const aboutLink = document.createElement("a");
aboutLink.href = "about.html";
aboutLink.innerHTML = "Om oss";

linksDiv.appendChild(menuLink);
linksDiv.appendChild(infoLink);
linksDiv.appendChild(homepageLink);
linksDiv.appendChild(imagesLink);
linksDiv.appendChild(aboutLink);

headerDiv.appendChild(linksDiv);

document.body.prepend(headerDiv);

/**Initialize footer */
const footerDiv = document.createElement("div");
footerDiv.className = "footer";

const addressParagraph = document.createElement("p");
addressParagraph.className = "footerText";
addressParagraph.innerHTML = "Besøksadresse: Repslagerveita 2";
const emailParagraph = document.createElement("p");
emailParagraph.className = "footerText";
emailParagraph.innerHTML = "Email: phu@yen.no";
const phoneParagraph = document.createElement("p");
phoneParagraph.className = "footerText";
phoneParagraph.innerHTML = "Telefonummer: 22 22 22 22";

footerDiv.appendChild(addressParagraph);
footerDiv.appendChild(emailParagraph);
footerDiv.append(phoneParagraph);

document.body.appendChild(footerDiv);