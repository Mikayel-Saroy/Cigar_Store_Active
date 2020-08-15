import React from 'react';
import {addToCartActionCreator, minusButtonActionCreator, plusButtonActionCreator} from "../../../redux/general-reducer";
import Cigarillos from "./Cigarillos";


const CigarillosContainer = (props) => {
    let state = props.store.getState();

    const plusButton = (location, id) => {
        let action = plusButtonActionCreator(location, id);
        props.store.dispatch(action);
    };
    const minusButton = (location, id) => {
        let action = minusButtonActionCreator(location, id);
        props.store.dispatch(action);
    };
    const addToCart = (location, id) => {
        let action = addToCartActionCreator(location, id);
        props.store.dispatch(action);
    };

    return <Cigarillos cigarillosData={state.cigarillosData}
                       plusButton={plusButton}
                       minusButton={minusButton}
                       addToCart={addToCart}/>
}

export default CigarillosContainer;
