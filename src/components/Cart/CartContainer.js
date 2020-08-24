import Cart from "./Cart";
import {proceedToCheckout, removeFromCartActionCreator} from "../../redux/general-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        cartCheckoutData: state.cartCheckoutData,
        cartData: state.cartData,
    }
};

const mapDispatchToProps = (dispatch, state) => {
    return {
        removeFunction: (id) => {
            let action = removeFromCartActionCreator(id);
            dispatch(action);
        },
        checkOutFunction: () => {
            let action = proceedToCheckout();
            dispatch(action);
        },
    }
};

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default CartContainer;