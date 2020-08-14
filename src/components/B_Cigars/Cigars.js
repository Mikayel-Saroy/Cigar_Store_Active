import React from 'react';
import st from "../X_Generals/GeneralCSS/Cigars.module.css";
import {NavLink, Route} from "react-router-dom";
import Montecristo from "./1_Montecristo/Montecristo";
import ArturoFuente from "./2_ArturoFuente/ArturoFuente";
import Macanudo from "./3_Macanudo/Macanudo";
import CigarsIntro from "./0_CigarsIntro/CigarsIntro";
import LaGloriaCubana from "./4_LaGloriaCubana/LaGloriaCubana";
import ElReydelMundo from "./5_ElReydelMundo/ElReydelMundo";
import RomeoYJulieta from "./6_RomeoYJulieta/RomeoYJulieta";
import HUpmann from "./7_HUpmann/HUpmann";
import Tatuaje from "./8_Tatuaje/Tatuaje";


const Cigars = (props) => {
    return (
        <div className={st.main}>
            <div className={st.nav}>
                <div className={st.navInner}>
                    <div>
                        <NavLink to='/cigars/montecristo' activeClassName={st.active}>Montecristo</NavLink>
                    </div>
                    <div>
                        <NavLink to='/cigars/arturofuente' activeClassName={st.active}>Arturo Fuente</NavLink>
                    </div>
                    <div>
                        <NavLink to='/cigars/macanudo' activeClassName={st.active}>Macanudo</NavLink>
                    </div>
                    <div>
                        <NavLink to='/cigars/lagloriacubana' activeClassName={st.active}>La Gloria Cubana</NavLink>
                    </div>
                    <div>
                        <NavLink to='/cigars/elreydelmundo' activeClassName={st.active}>El Rey del Mundo</NavLink>
                    </div>
                    <div>
                        <NavLink to='/cigars/romeoyjulieta' activeClassName={st.active}>Romeo y Julieta</NavLink>
                    </div>
                    <div>
                        <NavLink to='/cigars/hupmann' activeClassName={st.active}>H. Upmann</NavLink>
                    </div>
                    <div>
                        <NavLink to='/cigars/tatuaje' activeClassName={st.active}>Tatuaje</NavLink>
                    </div>
                </div>
            </div>
            <div className={st.list}>
                <Route render={() => <CigarsIntro/>} exact path='/cigars'/>
                <Route path='/cigars/montecristo'
                       render={() => <Montecristo montecristoData={props.cigarsData.montecristoData}
                                                  dispatch={props.dispatch}/>}/>
                <Route path='/cigars/arturofuente'
                       render={() => <ArturoFuente arturoFuenteData={props.cigarsData.arturoFuenteData}
                                                   dispatch={props.dispatch}/>}/>
                <Route path='/cigars/macanudo'
                       render={() => <Macanudo macanudoData={props.cigarsData.macanudoData}
                                               dispatch={props.dispatch}/>}/>
                <Route path='/cigars/lagloriacubana'
                       render={() => <LaGloriaCubana lagloriacubanaData={props.cigarsData.lagloriacubanaData}
                                                     dispatch={props.dispatch}/>}/>
                <Route path='/cigars/elreydelmundo'
                       render={() => <ElReydelMundo elreydelmundoData={props.cigarsData.elreydelmundoData}
                                                    dispatch={props.dispatch}/>}/>
                <Route path='/cigars/romeoyjulieta'
                       render={() => <RomeoYJulieta romeoyjulietaData={props.cigarsData.romeoyjulietaData}
                                                    dispatch={props.dispatch}/>}/>
                <Route path='/cigars/hupmann'
                       render={() => <HUpmann hupmannData={props.cigarsData.hupmannData}
                                              dispatch={props.dispatch}/>}/>
                <Route path='/cigars/tatuaje'
                       render={() => <Tatuaje tatuajeData={props.cigarsData.tatuajeData}
                                              dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
}

export default Cigars;
