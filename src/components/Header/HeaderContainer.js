import React from 'react';
import Header from "./Header";
import StoreContext from "../../StoreContext";


function HeaderContainer() {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState();

                return <Header width={state.headerData.countWidth}
                               totalItems={state.cartCheckoutData.totalItems}/>
            }
        }
    </StoreContext.Consumer>
}

export default HeaderContainer;
