import React from 'react';
import AccessoriesItem from "../../X_Generals/ShowItems/AccessoriesItem/AccessoriesItem";


const CigarLighters = (props) => {
    const renderItems = (data) => data.map(item => <AccessoriesItem id={item.id}
                                                                    img={item.img}
                                                                    name={item.name}
                                                                    amount={item.amount}
                                                                    color={item.color}
                                                                    size={item.size}
                                                                    price={item.price}
                                                                    count={item.count}
                                                                    location='a_3'
                                                                    dispatch={props.dispatch}
    />)

    return (
        <div>
            {renderItems(props.cigarLightersData)}
        </div>
    );
}

export default CigarLighters;
