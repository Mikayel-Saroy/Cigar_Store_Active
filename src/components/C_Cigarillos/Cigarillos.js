import React from 'react';
import st from './../X_Generals/GeneralCSS/Cigars.module.css';
import {NavLink, Route} from "react-router-dom";
import CigarillosIntro from "./0_CigarillosIntro/CigarillosIntro";
import SwisherSweets from "./1_SwisherSweets/SwisherSweets";
import DjarumFiltered from "./2_DjarumFiltered/DjarumFiltered";
import WhiteOwl from "./3_WhiteOwl/WhiteOwl";
import CheyenneFiltered from "./4_CheyenneFiltered/CheyenneFiltered";
import Villiger from "./5_Villiger/Villiger";

const Cigarillos = (props) => {
    return (
        <div className={st.main}>
            <div className={st.nav}>
                <div className={st.navInner}>
                    <div>
                        <NavLink to='/cigarillos/swishersweets' activeClassName={st.active}>Swisher Sweets</NavLink>
                    </div>
                    <div>
                        <NavLink to='/cigarillos/djarumfiltered' activeClassName={st.active}>Djarum Filtered</NavLink>
                    </div>
                    <div>
                        <NavLink to='/cigarillos/whiteowl' activeClassName={st.active}>White Owl</NavLink>
                    </div>
                    <div>
                        <NavLink to='/cigarillos/cheyennefiltered' activeClassName={st.active}>Cheyenne
                            Filtered</NavLink>
                    </div>
                    <div>
                        <NavLink to='/cigarillos/villiger' activeClassName={st.active}>Villiger</NavLink>
                    </div>
                </div>
            </div>
            <div className={st.list}>
                <Route render={() => <CigarillosIntro/>} exact path='/cigarillos'/>
                <Route path='/cigarillos/swishersweets'
                       render={() => <SwisherSweets swisherSweetsData={props.cigarillosData.swisherSweetsData}
                                                    dispatch={props.dispatch}/>}/>
                <Route path='/cigarillos/djarumfiltered'
                       render={() => <DjarumFiltered djarumFilteredData={props.cigarillosData.djarumFilteredData}
                                                     dispatch={props.dispatch}/>}/>
                <Route path='/cigarillos/whiteowl'
                       render={() => <WhiteOwl whiteOwlData={props.cigarillosData.whiteOwlData}
                                               dispatch={props.dispatch}/>}/>
                <Route path='/cigarillos/cheyennefiltered'
                       render={() => <CheyenneFiltered cheyenneFilteredData={props.cigarillosData.cheyenneFilteredData}
                                                       dispatch={props.dispatch}/>}/>
                <Route path='/cigarillos/villiger'
                       render={() => <Villiger villigerData={props.cigarillosData.villigerData}
                                               dispatch={props.dispatch}/>}/>
            </div>
        </div>
    );
}


export default Cigarillos;
