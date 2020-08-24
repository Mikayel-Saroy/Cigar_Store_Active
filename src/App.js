import React from 'react';
import st from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import CigarStore from "./components/CigarStore/CigarStore";
import CartContainer from "./components/Cart/CartContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ContentContainer from "./components/Content/ContentContainer";


function App() {
    return (
        <BrowserRouter>
            <div className={st.main}>
                <HeaderContainer/>
                <div className={st.content}>
                    <Route render={() => <CigarStore/>} exact path='/'/>
                    <ContentContainer/>
                    <Route render={() => <CartContainer/>} path='/cart'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;