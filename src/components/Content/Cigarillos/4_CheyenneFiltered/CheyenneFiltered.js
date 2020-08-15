import React from 'react';
import ShowItems from "../../../X_Generals/ShowItems/ShowItems/ShowItems";


const CheyenneFiltered = (props) => {
    const renderItems = (data) => data.map(item => <ShowItems id={item.id}
                                                              img={item.img}
                                                              name={item.name}
                                                              amount={item.amount}
                                                              color={item.color}
                                                              size={item.size}
                                                              price={item.price}
                                                              count={item.count}
                                                              location='cl_4'
                                                              plusButton={props.plusButton}
                                                              minusButton={props.minusButton}
                                                              addToCart={props.addToCart}
    />);

    return (
        <div>
            {renderItems(props.cheyenneFilteredData)}
        </div>
    );
}

export default CheyenneFiltered;
