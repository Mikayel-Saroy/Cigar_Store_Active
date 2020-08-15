import React from 'react';
import st from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import CigarStore from "./components/CigarStore/CigarStore";
import CartContainer from "./components/Cart/CartContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ContentContainer from "./components/Content/ContentContainer";


function App(props) {
    return (
        <BrowserRouter>
            <div className={st.main}>
                <HeaderContainer store={props.store}/>
                <div className={st.content}>
                    <Route render={() => <CigarStore/>} exact path='/'/>
                    <ContentContainer store={props.store}/>
                    <Route render={() => <CartContainer store={props.store}/>} path='/cart'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
