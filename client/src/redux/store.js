import {applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';


const initalState={

}

const reducers= combineReducers({


})

const store=createStore(reducers,initalState,composeWithDevTools(applyMiddleware(thunk)))

