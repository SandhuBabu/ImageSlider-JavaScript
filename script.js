let img = document.getElementById("img");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
images = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9"];
let subStr = "http://127.0.0.1:5500/slider/";
let newSRC;



next.addEventListener("click", () => {
    let currentImagePath = img.src;
    let setPath = currentImagePath.replace(subStr, " ").replace(".jpg", " ");
    setPath = setPath.trim();

    for (let i = 0; i < images.length; i++) {
        if (setPath == images[images.length - 1]) {
            newSRC = images[0] + ".jpg";
            img.src = newSRC;
            break;
        }

        if (setPath == images[i]) {
            newSRC = images[i + 1] + ".jpg";
            img.src = newSRC;
            break;
        }
    }

});

prev.addEventListener("click", () => {
    let currentImagePath = img.src;
    let setPath = currentImagePath.replace(subStr, " ").replace(".jpg", " ");
    setPath = setPath.trim();

    if (setPath == images[0]) {
        newSRC = images[images.length - 1] + ".jpg";
        img.src = newSRC;
    } else {
        for (let i = images.length; i > 0; i--) {
            if(setPath == images[i]){
                newSRC = images[i-1] + ".jpg"
                img.src = newSRC;
                break;
            }
        }
    }
})

