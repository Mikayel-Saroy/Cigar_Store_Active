import React from 'react';
import {Route} from "react-router-dom";
import Cigars from "./Cigars/Cigars";
import Cigarillos from "./Cigarillos/Cigarillos";
import Accessories from "./Accessories/Accessories";


const Content = (props) => {
    return (
        <div>
            <Route render={() => <Cigars cigarsData={props.cigarsData}
                                         plusButton={props.plusButton}
                                         minusButton={props.minusButton}
                                         addToCart={props.addToCart}/>} path='/cigars'/>
            <Route render={() => <Cigarillos cigarillosData={props.cigarillosData}
                                             plusButton={props.plusButton}
                                             minusButton={props.minusButton}
                                             addToCart={props.addToCart}/>} path='/cigarillos'/>
            <Route render={() => <Accessories accessoriesData={props.accessoriesData}
                                              plusButton={props.plusButton}
                                              minusButton={props.minusButton}
                                              addToCart={props.addToCart}/>} path='/accessories'/>
        </div>
    );
}

export default Content;
