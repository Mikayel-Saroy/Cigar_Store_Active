import {createStore} from "redux";
import generalReducer from "./general-reducer";

let store = createStore(generalReducer);

export default store;