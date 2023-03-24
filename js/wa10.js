const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arrNames = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */
const arrAlt = ['Closeup of a human eye','A pinting of sand', 'Painting of flowers','A image of hieroglyphs','A picture of a moth']
/* Looping through images */
for(const image of arrNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `/img/wa10/${image}`);
    newImage.setAttribute('alt', arrAlt[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
    })
}

/* Wiring up the Darken/Lighten button */
