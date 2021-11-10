const zoomBackground = document.createElement("div");
zoomBackground.classList.add("zoom-background");
document.body.appendChild(zoomBackground);

const images = document.getElementsByTagName("img");
for(i = 0; i < images.length; i++) {
    if (images[i].id != "logo") {
        images[i].addEventListener("click", zoomIn);
    }
}

function zoomIn(event) {
    const clickedImage = event.currentTarget;
    
    const zoomedImage = document.createElement("img");
    zoomedImage.src = clickedImage.src;
    zoomedImage.classList.add("zoomed-image");
    zoomedImage.id = clickedImage.id + "-zoom";
    zoomedImage.addEventListener("click", zoomOut);

    zoomBackground.style.display = "flex";
    
    zoomBackground.appendChild(zoomedImage);

    for (i = 1; i <= 1.5; i+= 0.1) {
        zoomedImage.style.transform = "scale(" + String(i) + ")";
    }
}

function zoomOut(event) {
    const zoomedImage = event.currentTarget;
    zoomBackground.style.display = "none";
    zoomBackground.removeChild(zoomedImage);
}

