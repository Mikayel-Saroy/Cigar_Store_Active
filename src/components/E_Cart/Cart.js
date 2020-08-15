import React from "react";
import st from './Cart.module.css';
import CartItems from "./CartItems/CartItems";

const Cart = (props) => {
    const renderCartList = (data) => data.map(item => <CartItems id={item.id}
                                                                 img={item.img}
                                                                 name={item.name}
                                                                 price={item.price}
                                                                 count={item.count}
                                                                 totalPrice={item.count * item.price}
                                                                 removeFunction={props.removeFunction}/>
    );

    return (
        <div className={st.main}>
            <div className={st.list}>
                {renderCartList(props.cartData)}
            </div>
            <div className={st.checkout}>
                <div className={st.checkoutInner}>
                    <div className={st.checkoutInfo}>
                        <p>Total Items: <b>{props.cartCheckoutData.totalItems}</b></p>
                        <p>Total Price: <b>${props.cartCheckoutData.totalPrice}</b></p>
                    </div>
                    <div className={st.checkoutButton}>
                        <p onClick={() => props.checkOutFunction()}>Proceed to Checkout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;