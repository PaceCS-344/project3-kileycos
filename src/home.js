import Page from "./page";
import Button from "./button";
import './styles.css';
import BWOne from './images/BW - (1,1).jpg';
import BWTwo from './images/BW - (1,2).jpg';
import BWThree from './images/BW - (1,3).jpg';
import BWFour from './images/BW - (2,1).jpg';
import BWFive from './images/BW - (2,2).jpg';
import BWSix from './images/BW - (2,3).jpg';
import BWSeven from './images/BW - (3,1).jpg';
import BWEight from './images/BW - (3,2).jpg';
import BWNine from './images/BW - (3,3).jpg';
import BWTen from './images/BW - (4,1).jpg';
import BWEleven from './images/BW - (4,2).jpg';
import BWTwelve from './images/BW - (4,3).jpg';
import FunkyFace from './images/Funky.jpg';

export default function Home() {
    return (
        <Page>
            <h1> wtf is happening</h1>
            <div class="home">

                <div class="home-side-grid cols-2" id="grid-left">
                    <img class="grid-img" src={BWOne} alt="" />
                    <img class="grid-img" src={BWTwo} alt="" />
                    <img class="grid-img" src={BWThree} alt="" />
                    <img class="grid-img" src={BWFour} alt="" />
                    <img class="grid-img" src={BWFive} alt="" />
                    <img class="grid-img" src={BWSix} alt="" />
                </div>

                <div class="home-center-image">
                    <img src={FunkyFace} alt="Home cover" />
                </div>

                <div class="home-side-grid cols-2" id="grid-right">
                    <img class="grid-img" src={BWSeven} alt="" />
                    <img class="grid-img" src={BWEight} alt="" />
                    <img class="grid-img" src={BWNine} alt="" />
                    <img class="grid-img" src={BWTen} alt="" />
                    <img class="grid-img" src={BWEleven} alt="" />
                    <img class="grid-img" src={BWTwelve} alt="" />
                </div>

            </div>
        </Page>
    );
}


const GAP = () => 0;
const PADDING = () => Math.max(8, Math.min(window.innerWidth * 0.02, 24));

function updateLayout() {
    const home = document.querySelector('.home');
    const centerImg = document.querySelector('.home-center-image img');
    const grids = document.querySelectorAll('.home-side-grid');

    const gap = GAP();
    const padding = PADDING();
    const availableH = window.innerHeight - padding * 2;
    const availableW = window.innerWidth - padding * 2;

    // Height of the grid = full available height
    // Each square cell = (availableH - gap) / 2  (2 rows with one gap between)
    const cellSize = (availableH) / 3;

    // Try cols-3, cols-2, cols-1 — pick the most that fits
    // Layout: [grid] gap [center] gap [grid]
    // Center width = image natural aspect ratio * availableH
    const centerNaturalW = centerImg.naturalWidth || centerImg.offsetWidth || 400;
    const centerNaturalH = centerImg.naturalHeight || centerImg.offsetHeight || 600;
    const centerW = (centerNaturalW / centerNaturalH) * availableH;

    function gridWidth(cols) {
        return cellSize * cols;
    }

    function totalWidth(cols) {
        return gridWidth(cols) * 2 + centerW + gap * 2;
    }

    let cols = 0;
    if (totalWidth(2) <= availableW) cols = 2;
    else if (totalWidth(1) <= availableW) cols = 1;

    grids.forEach(grid => {
        if (cols === 0) {
            grid.classList.add('hidden');
            grid.classList.remove('cols-1', 'cols-2');
        } else {
            grid.classList.remove('hidden', 'cols-1', 'cols-2');
            grid.classList.add(`cols-${cols}`);

            const gw = gridWidth(cols);
            grid.style.width = `${gw}px`;
            grid.style.height = `${availableH}px`;
            grid.style.gap = `${gap}px`;

            // Make each cell explicitly square
            grid.querySelectorAll('.grid-img').forEach(img => {
                img.style.width = `${cellSize}px`;
                img.style.height = `${cellSize}px`;
            });
        }
    });

    // Size center image to fill available height
    const centerEl = document.querySelector('.home-center-image');
    centerEl.style.height = `${availableH}px`;
}

// Run on load and resize, and once images are loaded for natural dimensions
window.addEventListener('resize', updateLayout);
window.addEventListener('load', updateLayout);

const centerImg = document.querySelector('.home-center-image img');
if (centerImg.complete) {
    updateLayout();
} else {
    centerImg.addEventListener('load', updateLayout);
}
