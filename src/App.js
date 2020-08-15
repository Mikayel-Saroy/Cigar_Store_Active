import React from 'react';
import st from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import CigarStore from "./components/A_CigarStore/CigarStore";
import CigarsContainer from "./components/B_Cigars/CigarsContainer";
import CigarillosContainer from "./components/C_Cigarillos/CigarillosContainer";
import AccessoriesContainer from "./components/D_Accessories/AccessoriesContainer";
import CartContainer from "./components/E_Cart/CartContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className={st.main}>
                <HeaderContainer store={props.store}/>
                <div className={st.content}>
                    <Route render={() => <CigarStore/>} exact path='/'/>
                    <Route render={() => <CigarsContainer store={props.store}/>} path='/cigars'/>
                    <Route render={() => <CigarillosContainer store={props.store}/>} path='/cigarillos'/>
                    <Route render={() => <AccessoriesContainer store={props.store}/>} path='/accessories'/>
                    <Route render={() => <CartContainer store={props.store}/>} path='/cart'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
