import React from 'react';
import st from './../ShowItems.module.css';
import minus_sign from './../minus_sign.png';
import plus_sign from './../plus_sign.png';
import {addToCartActionCreator, minusButtonActionCreator, plusButtonActionCreator} from "../../../../redux/general-reducer";

const AccessoriesItem = (props) => {
    const plusFunction = () => {
        let action = plusButtonActionCreator(props.location, props.id);
        props.dispatch(action);
    };
    const minusFunction = () => {
        let action = minusButtonActionCreator(props.location, props.id);
        props.dispatch(action);
    };
    const addButton = () => {
        let action = addToCartActionCreator(props.location, props.id);
        props.dispatch(action);
    };

    return (
        <div>
            <div className={st.main}>
                <div className={st.left}>
                    <img src={props.img} alt='img'/>
                </div>
                <div className={st.mid}>
                    <h5>{props.name}</h5>
                    <p className={st.midPrice}>Price: <b>${props.price}</b></p>
                </div>
                <div className={st.right}>
                    <div className={st.price}>
                        <p>${props.price * props.count}</p>
                    </div>
                    <div className={st.select}>
                        <div className={st.selectMinus} onClick={minusFunction}>
                            <img src={minus_sign} alt='IMG'/>
                        </div>
                        <div className={st.selectCount}>
                            <p>{props.count}</p>
                        </div>
                        <div className={st.selectPlus} onClick={plusFunction}>
                            <img src={plus_sign} alt='IMG'/>
                        </div>
                    </div>
                    <div className={st.addButton} onClick={addButton}>
                        <p>Add to Cart</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default AccessoriesItem;
