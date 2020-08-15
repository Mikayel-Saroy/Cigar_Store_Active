import React from "react";
import st from '../../../X_Generals/GeneralCSS/CigarsIntro.module.css';
import wallpaper from './Cigarillo_Wallpaper.jpg';
import {NavLink} from "react-router-dom";

const CigarillosIntro = () => {
    return (
        <div className={st.main}>
            <img className={st.wallpaper} src={wallpaper} alt='IMG'/>
            <p className={st.introText}>Our selection of machine made cigars consists of some of the most widely-known
                names in the cigar game.
                These premium stogies are the perfect ‘everyday’ smoke, with affordable flavor that delivers every time.
                Machine made cigars come in all shapes and sizes, none of which will break the bank. This selection of
                household names are some of the smokes that wrote the book on practicality. Take them on the go, or
                light one up for a quick puff, whenever you please.</p>
            <p className={st.secondText}>Go to shopping.</p>
            <div>
                <ul><NavLink to='/cigarillos/swishersweets'>- Swisher Sweets</NavLink></ul>
                <ul><NavLink to='/cigarillos/djarumfiltered'>- Djarum Filtered</NavLink></ul>
                <ul><NavLink to='/cigarillos/whiteowl'>- White Owl</NavLink></ul>
                <ul><NavLink to='/cigarillos/cheyennefiltered'>- Cheyenne Filtered</NavLink></ul>
                <ul><NavLink to='/cigarillos/villiger'>- Villiger</NavLink></ul>
            </div>
        </div>
    );
}

export default CigarillosIntro;