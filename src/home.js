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
import { useEffect, useRef } from 'react';

export default function Home() {
    const centerImgRef = useRef(null);

    useEffect(() => {
        const centerImg = centerImgRef.current;
        if (!centerImg) return;

        const GAP = () => 0;
        const PADDING = () => Math.max(8, Math.min(window.innerWidth * 0.02, 24));

        function updateLayout() {
            if (!centerImg.complete || centerImg.naturalWidth === 0) return;

            const gap = GAP();
            const padding = PADDING();
            const availableH = window.innerHeight - padding * 2;
            const availableW = window.innerWidth - padding * 2;

            const cellSize = availableH / 3;

            const centerNaturalW = centerImg.naturalWidth;
            const centerNaturalH = centerImg.naturalHeight;
            const centerW = (centerNaturalW / centerNaturalH) * availableH;

            function gridWidth(cols) {
                return cellSize * cols;
            }

            function totalWidth(cols) {
                return gridWidth(cols) * 2 + centerW;
            }

            const grids = document.querySelectorAll('.home-side-grid');

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

                    grid.querySelectorAll('.grid-img').forEach(img => {
                        img.style.width = `${cellSize}px`;
                        img.style.height = `${cellSize}px`;
                    });
                }
            });

            const centerEl = centerImg.parentElement;
            centerEl.style.height = `${availableH}px`;
        }

        centerImg.addEventListener('load', updateLayout);
        window.addEventListener('resize', updateLayout);
        updateLayout(); // run immediately in case image is already cached

        return () => {
            centerImg.removeEventListener('load', updateLayout);
            window.removeEventListener('resize', updateLayout);
        };
    }, []);

    return (
        <Page>
            <div className="home">

                <div className="home-side-grid cols-2" id="grid-left">
                    <img className="grid-img" src={BWOne} alt="" />
                    <img className="grid-img" src={BWTwo} alt="" />
                    <img className="grid-img" src={BWThree} alt="" />
                    <img className="grid-img" src={BWFour} alt="" />
                    <img className="grid-img" src={BWFive} alt="" />
                    <img className="grid-img" src={BWSix} alt="" />
                </div>

                <div className="home-center-image">
                    <img ref={centerImgRef} src={FunkyFace} alt="Home cover" />
                </div>

                <div className ="home-side-grid cols-2" id="grid-right">
                    <img className="grid-img" src={BWSeven} alt="" />
                    <img className="grid-img" src={BWEight} alt="" />
                    <img className="grid-img" src={BWNine} alt="" />
                    <img className="grid-img" src={BWTen} alt="" />
                    <img className="grid-img" src={BWEleven} alt="" />
                    <img className="grid-img" src={BWTwelve} alt="" />
                </div>

            </div>
        </Page>
    );
}


