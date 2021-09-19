import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from './App';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import menuReducer from "./store/Reducers/MenuReducer/Menu";
import cartReducer from "./store/Reducers/CartReducer/Cart";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    menuList: menuReducer,
    cartOrder: cartReducer,
});

const store = createStore(rootReducer, composeEnhancer(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
