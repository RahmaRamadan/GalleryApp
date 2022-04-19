import reducer from './galleryReducer';
import {createStore , applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

//createStore is built in function in redux with parameter reducer
const store =createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
    
export default store;
//dispatch -> event handler