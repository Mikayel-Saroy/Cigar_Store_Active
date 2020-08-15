import React from 'react';
import AccessoriesItem from "../../X_Generals/ShowItems/AccessoriesItem/AccessoriesItem";


const CigarAshtrays = (props) => {
    const renderItems = (data) => data.map(item => <AccessoriesItem id={item.id}
                                                                    img={item.img}
                                                                    name={item.name}
                                                                    price={item.price}
                                                                    count={item.count}
                                                                    location='a_4'
                                                                    plusButton={props.plusButton}
                                                                    minusButton={props.minusButton}
                                                                    addToCart={props.addToCart}
    />);

    return (
        <div>
            {renderItems(props.cigarAshtraysData)}
        </div>
    );
}

export default CigarAshtrays;