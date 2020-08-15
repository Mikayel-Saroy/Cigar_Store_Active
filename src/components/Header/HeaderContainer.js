import React from 'react';
import Header from "./Header";


function HeaderContainer(props) {
    let state = props.store.getState();

    return <Header width={state.headerData.countWidth}
                   totalItems={state.cartCheckoutData.totalItems}/>
}

export default HeaderContainer;
