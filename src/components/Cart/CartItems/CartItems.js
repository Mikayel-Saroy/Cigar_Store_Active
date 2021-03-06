import React from 'react';
import st from './CartItems.module.css';


const CartItems = (props) => {
    const removeButton = () => {
        props.removeFunction(props.id);
    };

    return (
        <div>
            <div className={st.main}>
                <div className={st.left}>
                    <img src={props.img} alt='img'/>
                </div>
                <div className={st.mid}>
                    <h5>{props.name}</h5>
                </div>
                <div className={st.right}>
                    <p>Price: <b>${props.price}</b></p>
                    <p>Quantity: <b>{props.count}</b></p>
                    <hr/>
                    <p>Total: <b>${props.totalPrice}</b></p>
                    <div className={st.removeButton} onClick={removeButton}>
                        <p>Remove Item</p>
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default CartItems;
