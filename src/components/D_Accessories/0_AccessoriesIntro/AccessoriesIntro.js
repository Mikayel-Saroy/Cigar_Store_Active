import React from "react";
import wallpaper from './Accessories_Wallpaper.jpg';
import st from '../../X_Generals/GeneralCSS/CigarsIntro.module.css';
import {NavLink} from "react-router-dom";

const AccessoriesIntro = () => {
    return (
        <div className={st.main}>
            <img className={st.wallpaper} src={wallpaper} alt='IMG'/>
            <p className={st.introText}>Premium accessories - another perk of the cigar-smoking hobby. When visiting my
                favorite cigar stores, I always check the accessory section first, to add a new gadget to my
                collection.</p>
            <p className={st.secondText}>Go to shopping.</p>
            <div>
                <ul><NavLink to='/accessories/cigarcutters'>- Cigar Cutters</NavLink></ul>
                <ul><NavLink to='/accessories/cigarcases'>- Cigar Cases</NavLink></ul>
                <ul><NavLink to='/accessories/cigarlighters'>- Cigar Lighters</NavLink></ul>
                <ul><NavLink to='/accessories/cigarashtrays'>- Cigar Ashtrays</NavLink></ul>
            </div>
        </div>
    )
}

export default AccessoriesIntro;