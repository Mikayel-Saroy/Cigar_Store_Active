import React from 'react';
import ShowItems from "../../../X_Generals/ShowItems/ShowItems/ShowItems";
import Montecristo from "../../Cigars/1_Montecristo/Montecristo";


const WhiteOwl = (props) => {
    const renderItems = (data) => data.map(item => <ShowItems id={item.id}
                                                              img={item.img}
                                                              name={item.name}
                                                              amount={item.amount}
                                                              color={item.color}
                                                              size={item.size}
                                                              price={item.price}
                                                              count={item.count}
                                                              location='cl_3'
                                                              plusButton={props.plusButton}
                                                              minusButton={props.minusButton}
                                                              addToCart={props.addToCart}
    />);

    return (
        <div>
            {renderItems(props.whiteOwlData)}
        </div>
    );
}

export default WhiteOwl;
