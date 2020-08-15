import React from 'react';
import ShowItems from "../../X_Generals/ShowItems/ShowItems/ShowItems";
import Montecristo from "../../B_Cigars/1_Montecristo/Montecristo";


const SwisherSweets = (props) => {
    const renderItems = (data) => data.map(item => <ShowItems id={item.id}
                                                              img={item.img}
                                                              name={item.name}
                                                              amount={item.amount}
                                                              color={item.color}
                                                              size={item.size}
                                                              price={item.price}
                                                              count={item.count}
                                                              location='cl_1'
                                                              plusButton={props.plusButton}
                                                              minusButton={props.minusButton}
                                                              addToCart={props.addToCart}
    />);

    return (
        <div>
            {renderItems(props.swisherSweetsData)}
        </div>
    );
}

export default SwisherSweets;
