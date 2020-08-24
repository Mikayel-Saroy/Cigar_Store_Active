import Header from "./Header";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        width: state.headerData.countWidth,
        totalItems: state.cartCheckoutData.totalItems,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
