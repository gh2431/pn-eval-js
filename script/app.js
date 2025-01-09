var image = document.querySelector('image1');
var images = ['image1.png', 'image2.webp', 'image3.webp'];
var i = 0;

function suivant() {
if (i >= images.length - 1) i = -1;
i++;
return setIng();
}

function setIng() {
    return images.setAttribute('src', 'images/' + images[i]);
}