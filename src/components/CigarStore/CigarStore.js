import React from "react";
import st from "./CigarStore.module.css";
import wallpaper from './CigarStore_Wallpaper.jpg';
import wallpaper_2 from './wallpaper_2.jpg';
import {NavLink} from "react-router-dom";

const CigarStore = () => {
    return (
        <div className={st.main}>
            <img src={wallpaper} alt='IMG'/>
            <p className={st.headline}>POWERED BY YOU</p>
            <p className={st.text}>CigarStore is a community of cigar loving fans and experts - with a belief that the
                site experience
                should be powered by you. Connect with your favorite cigar brands and manufactures, receive product tips
                on new cigar releases, and explore written and video cigar reviews.

                CigarStore’s online portfolio ranges from top cigar brands, exclusive cigar deals, 5 pack favorites,
                cigar accessories, and more! Shop with us today with total ease and confidence.</p>
            <img src={wallpaper_2} alt='IMG'/>
            <p className={st.headline2}>OUR PRODUCTS</p>
            <div className={st.wrapper}>
                <div>
                    <NavLink className={st.group} to='/cigars'>Cigars</NavLink>
                    <div className={st.products}>
                        <ul><NavLink to='/cigars/montecristo'>Montecristo</NavLink></ul>
                        <ul><NavLink to='/cigars/arturofuente'>Arturo Fuente</NavLink></ul>
                        <ul><NavLink to='/cigars/macanudo'>Macanudo</NavLink></ul>
                        <ul><NavLink to='/cigars/lagloriacubana'>La Gloria Cubana</NavLink></ul>
                        <ul><NavLink to='/cigars/elreydelmundo'>El Rey del Mundo</NavLink></ul>
                        <ul><NavLink to='/cigars/romeoyjulieta'>Romeo y Julieta</NavLink></ul>
                        <ul><NavLink to='/cigars/hupmann'>H. Upmann</NavLink></ul>
                        <ul><NavLink to='/cigars/tatuaje'>Tatuaje</NavLink></ul>
                    </div>
                </div>
                <div>
                    <NavLink className={st.group} to='/cigarillos'>Cigarillos</NavLink>
                    <div className={st.products}>
                        <ul><NavLink to='/cigarillos/swishersweets'>Swisher Sweets</NavLink></ul>
                        <ul><NavLink to='/cigarillos/djarumfiltered'>Djarum Filtered</NavLink></ul>
                        <ul><NavLink to='/cigarillos/whiteowl'>White Owl</NavLink></ul>
                        <ul><NavLink to='/cigarillos/cheyennefiltered'>Cheyenne Filtered</NavLink></ul>
                        <ul><NavLink to='/cigarillos/villiger'>Villiger</NavLink></ul>
                    </div>
                </div>
                <div>
                    <NavLink className={st.group} to='/accessories'>Accessories</NavLink>
                    <div className={st.products}>
                        <ul><NavLink to='/accessories/cigarcutters'>Cigar Cutters</NavLink></ul>
                        <ul><NavLink to='/accessories/cigarcases'>Cigar Cases</NavLink></ul>
                        <ul><NavLink to='/accessories/cigarlighters'>Cigar Lighters</NavLink></ul>
                        <ul><NavLink to='/accessories/cigarashtrays'>Cigar Ashtrays</NavLink></ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CigarStore;