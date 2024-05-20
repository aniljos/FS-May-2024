import {createStore, combineReducers} from 'redux';
import { authReducer } from './reducer';
import {gadgetReducer} from './gadgetReducer';

const rootReducer = combineReducers({

    auth: authReducer,
    gadget: gadgetReducer

});

export const store 
        = createStore(
                rootReducer,
              (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()); //create store with reducer