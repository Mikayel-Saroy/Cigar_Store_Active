import React from "react";
import Cart from "./Cart";
import {removeFromCartActionCreator} from "../../redux/general-reducer";
import StoreContext from "../../StoreContext";


const CartContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState();

                const removeFunction = (id) => {
                    let action = removeFromCartActionCreator(id);
                    store.dispatch(action);
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
        }
    </StoreContext.Consumer>
}

export default CartContainer;