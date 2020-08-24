import React from 'react';
import {addToCartActionCreator, minusButtonActionCreator, plusButtonActionCreator} from "../../redux/general-reducer";
import Content from "./Content";
import StoreContext from "../../StoreContext";


const ContentContainer = () => {
    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState();

                const plusButton = (location, id) => {
                    let action = plusButtonActionCreator(location, id);
                    store.dispatch(action);
                };
                const minusButton = (location, id) => {
                    let action = minusButtonActionCreator(location, id);
                    store.dispatch(action);
                };
                const addToCart = (location, id) => {
                    let action = addToCartActionCreator(location, id);
                    store.dispatch(action);
                };

                return <Content cigarsData={state.cigarsData}
                                cigarillosData={state.cigarillosData}
                                accessoriesData={state.accessoriesData}
                                plusButton={plusButton}
                                minusButton={minusButton}
                                addToCart={addToCart}/>
            }
        }
    </StoreContext.Consumer>
}

export default ContentContainer;
