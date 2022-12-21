// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import Image1 from "../assets/travel-1.jpg"
import Image2 from "../assets/travel-2.jpg"
import Image3 from "../assets/travel-3.jpg"

function loadImages(){
    const elem1 = document.getElementById("image1");
    const elem2 = document.getElementById("image2");
    const elem3 = document.getElementById("image3");
    elem1.src = Image1;
    elem2.src = Image2;
    elem3.src = Image3;
}

loadImages();