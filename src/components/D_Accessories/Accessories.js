import React from 'react';
import st from "./../X_Generals/GeneralCSS/Cigars.module.css";
import AccessoriesIntro from "./0_AccessoriesIntro/AccessoriesIntro";
import {NavLink, Route} from "react-router-dom";
import CigarCutters from "./1_CigarCutters/CigarCutters";
import CigarCases from "./2_CigarCases/CigarCases";
import CigarLighters from "./3_CigarLighters/CigarLighters";
import CigarAshtrays from "./4_CigarAshtrays/CigarAshtrays";

const Accessories = (props) => {
    return (
        <div className={st.main}>
            <div className={st.nav}>
                <div className={st.navInner}>
                    <div>
                        <NavLink to='/accessories/cigarcutters' activeClassName={st.active}>Cigar Cutters</NavLink>
                    </div>
                    <div>
                        <NavLink to='/accessories/cigarcases' activeClassName={st.active}>Cigar Cases</NavLink>
                    </div>
                    <div>
                        <NavLink to='/accessories/cigarlighters' activeClassName={st.active}>Cigar Lighters</NavLink>
                    </div>
                    <div>
                        <NavLink to='/accessories/cigarashtrays' activeClassName={st.active}>Cigar Ashtrays</NavLink>
                    </div>
                </div>
            </div>
            <div className={st.list}>
                <Route render={() => <AccessoriesIntro/>} exact path='/accessories'/>
                <Route path='/accessories/cigarcutters'
                       render={() => <CigarCutters cigarCuttersData={props.accessoriesData.cigarCuttersData}
                                                   dispatch={props.dispatch}/>}/>
                <Route path='/accessories/cigarcases'
                       render={() => <CigarCases cigarCasesData={props.accessoriesData.cigarCasesData}
                                                 dispatch={props.dispatch}/>}/>
                <Route path='/accessories/cigarlighters'
                       render={() => <CigarLighters cigarLightersData={props.accessoriesData.cigarLightersData}
                                                    dispatch={props.dispatch}/>}/>
                <Route path='/accessories/cigarashtrays'
                       render={() => <CigarAshtrays cigarAshtraysData={props.accessoriesData.cigarAshtraysData}
                                                    dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
}

export default Accessories;
