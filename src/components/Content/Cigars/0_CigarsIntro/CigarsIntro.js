import React from "react";
import wallpaper from './Cigars_Wallpaper.jpg';
import st from '../../../X_Generals/GeneralCSS/CigarsIntro.module.css';
import {NavLink} from "react-router-dom";

const CigarsIntro = () => {
    return (
        <div className={st.main}>
            <img className={st.wallpaper} src={wallpaper} alt='IMG'/>
            <p className={st.introText}>Premium cigars come in many different shapes, sizes, strength, flavors, and
                packaging choices. Here at
                CigarStore we have a wide variety of brands from some of the best names in the game including
                Montecristo, Romeo y Julieta, Arturo Fuente, Tatuaje, Macanudo, and more. Whether you are a beginner or
                a seasoned
                aficionado, there's something for every smoker available. This is the ideal spot to fill your humidor
                with the finest and indulge in luxury cigar smoking at its best!</p>
            <p className={st.secondText}>Go to shopping.</p>
            <div>
                <ul><NavLink to='/cigars/montecristo'>- Montecristo</NavLink></ul>
                <ul><NavLink to='/cigars/arturofuente'>- Arturo Fuente</NavLink></ul>
                <ul><NavLink to='/cigars/macanudo'>- Macanudo</NavLink></ul>
                <ul><NavLink to='/cigars/lagloriacubana'>- La Gloria Cubana</NavLink></ul>
                <ul><NavLink to='/cigars/elreydelmundo'>- El Rey del Mundo</NavLink></ul>
                <ul><NavLink to='/cigars/romeoyjulieta'>- Romeo y Julieta</NavLink></ul>
                <ul><NavLink to='/cigars/hupmann'>- H. Upmann</NavLink></ul>
                <ul><NavLink to='/cigars/tatuaje'>- Tatuaje</NavLink></ul>
            </div>
        </div>
    )
}

export default CigarsIntro;