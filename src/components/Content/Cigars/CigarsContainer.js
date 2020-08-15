import React from 'react';
import {addToCartActionCreator, minusButtonActionCreator, plusButtonActionCreator} from "../../../redux/general-reducer";
import Cigars from "./Cigars";


const CigarsContainer = (props) => {
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

    return <Cigars cigarsData={state.cigarsData}
                   plusButton={plusButton}
                   minusButton={minusButton}
                   addToCart={addToCart}/>
}

export default CigarsContainer;
