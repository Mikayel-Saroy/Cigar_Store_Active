import React from 'react';
import ShowItems from "../../X_Generals/ShowItems/ShowItems";


const Villiger = (props) => {
    const renderItems = (data) => data.map(item => <ShowItems id={item.id}
                                                              img={item.img}
                                                              name={item.name}
                                                              amount={item.amount}
                                                              color={item.color}
                                                              size={item.size}
                                                              price={item.price}
                                                              count={item.count}
                                                              location='cl_5'
                                                              dispatch={props.dispatch}
    />)

    return (
        <div>
            {renderItems(props.villigerData)}
        </div>
    );
}

export default Villiger;
