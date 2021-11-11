/**event handler when image is clicked */
function zoomIn(event) {
    const clickedImage = event.currentTarget;
    
    const zoomedImage = document.createElement("img");
    zoomedImage.src = clickedImage.src;
    zoomedImage.classList.add("zoomed-image");
    zoomedImage.id = clickedImage.id + "-zoom";

    zoomBackground.style.display = "flex";
    
    zoomBackground.appendChild(zoomedImage);

    zoomedImage.style.transform = "scale(1.5)"; // enhance image
}

/**Zoom out event handler triggered either by clicking on background or hitting escape*/
function zoomOut(event) {
    if (event.type == "click" || event.key == "Escape") {
        zoomBackground.style.display = "none"; // hide background
        zoomBackground.innerHTML = ""; // clear image
    }
}

/**Setup black opaque background when image is clicked */
const zoomBackground = document.createElement("div");
zoomBackground.classList.add("zoom-background");
zoomBackground.addEventListener("click", zoomOut);
document.body.appendChild(zoomBackground);
document.addEventListener("keydown", zoomOut)

/**Add zoomIn event handler to all images on page except logo in header*/
const images = document.getElementsByTagName("img");
for(i = 0; i < images.length; i++) {
    if (images[i].id != "logo") {
        images[i].addEventListener("click", zoomIn);
    }
}


