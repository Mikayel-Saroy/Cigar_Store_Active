import React from 'react';
import ShowItems from "../../X_Generals/ShowItems/ShowItems";


const DjarumFiltered = (props) => {
    const renderItems = (data) => data.map(item => <ShowItems id={item.id}
                                                              img={item.img}
                                                              name={item.name}
                                                              amount={item.amount}
                                                              color={item.color}
                                                              size={item.size}
                                                              price={item.price}
                                                              count={item.count}
                                                              location='cl_2'
                                                              dispatch={props.dispatch}
    />)

    return (
        <div>
            {renderItems(props.djarumFilteredData)}
        </div>
    );
}

export default DjarumFiltered;
