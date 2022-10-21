const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg"];

/* Declaring the alternative text for each image file */
const altArray = ["blue eye", "wave thingy", "purple flowers", "Egyptian hieroglyphics", "schmitterling"];

/* Looping through images */

for (let i = 0; i < 4; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArray[i]);
    newImage.setAttribute('alt', altArray[i]);
    thumbBar.appendChild(newImage); 
    newImage.addEventListener('click', newImageInst => {
        displayedImage.src = newImageInst.target.src;
        displayedImage.alt = newImageInst.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClassName = btn.getAttribute('class');
    if (btnClassName === "dark"){
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, .5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.TextContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});
