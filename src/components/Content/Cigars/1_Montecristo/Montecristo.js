import React from 'react';
import ShowItems from "../../../X_Generals/ShowItems/ShowItems/ShowItems";


const Montecristo = (props) => {
    const renderItems = (data) => data.map(item => <ShowItems id={item.id}
                                                              img={item.img}
                                                              name={item.name}
                                                              amount={item.amount}
                                                              color={item.color}
                                                              size={item.size}
                                                              price={item.price}
                                                              count={item.count}
                                                              location='c_1'
                                                              plusButton={props.plusButton}
                                                              minusButton={props.minusButton}
                                                              addToCart={props.addToCart}
                                                              key={props.id}
    />);

    return (
        <div>
            {renderItems(props.montecristoData)}
        </div>
    );
}

export default Montecristo;
