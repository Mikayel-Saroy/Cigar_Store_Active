import React from 'react';
import st from './App.module.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import CigarStore from "./components/A_CigarStore/CigarStore";
import Cigars from "./components/B_Cigars/Cigars";
import Cigarillos from "./components/C_Cigarillos/Cigarillos";
import Accessories from "./components/D_Accessories/Accessories";
import Cart from "./components/E_Cart/Cart";


function App(props) {
    return (
        <BrowserRouter>
            <div className={st.main}>
                <Header cartCheckoutData={props.state.cartCheckoutData}
                        width={props.state.headerData.countWidth}/>
                <div className={st.content}>
                    <Route render={() => <CigarStore/>} exact path='/'/>
                    <Route render={() => <Cigars cigarsData={props.state.cigarsData}
                                                 dispatch={props.dispatch}/>} path='/cigars'/>
                    <Route render={() => <Cigarillos cigarillosData={props.state.cigarillosData}
                                                     dispatch={props.dispatch}/>} path='/cigarillos'/>
                    <Route render={() => <Accessories accessoriesData={props.state.accessoriesData}
                                                      dispatch={props.dispatch}/>} path='/accessories'/>
                    <Route render={() => <Cart cartData={props.state.cartData}
                                               cartCheckoutData={props.state.cartCheckoutData}
                                               dispatch={props.dispatch}/>} path='/cart'/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
