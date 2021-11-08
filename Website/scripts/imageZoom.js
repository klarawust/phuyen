function zoomIn(event) {
    const clickedImage = event.currentTarget;
    const zoomedImage = document.createElement("img");
    zoomedImage.src = clickedImage.src;
    zoomedImage.classList.add("zoomed-image");
    zoomedImage.id = clickedImage.id + "-zoom";
    const zoomBackground = document.createElement("div");
    zoomBackground.classList.add("zoom-background");
    zoomBackground.appendChild(zoomedImage);

    document.body.appendChild(zoomBackground);
    window.removeEventListener("scroll", setStickyHeader); // remove listener

    for (i = 1; i <= 1.5; i+= 0.1) {
        zoomedImage.style.transform = "scale(" + String(i) + ")";
    }
}

function zoomOut() {
    
}