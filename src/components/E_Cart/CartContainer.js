import React from "react";
import Cart from "./Cart";
import {removeFromCartActionCreator} from "../../redux/general-reducer";


const CartContainer = (props) => {
    let state = props.store.getState();

    const removeFunction = (id) => {
        let action = removeFromCartActionCreator(id);
        props.store.dispatch(action);
    };

    const checkOutFunction = () => {
        let text = `Total Items: ${state.cartCheckoutData.totalItems}\nTotal Price: $${state.cartCheckoutData.totalPrice}`;
        alert(text);
    };

    return <Cart cartCheckoutData={state.cartCheckoutData}
                 cartData={state.cartData}
                 removeFunction={removeFunction}
                 checkOutFunction={checkOutFunction}/>
}

export default CartContainer;