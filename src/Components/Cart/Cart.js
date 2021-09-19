import React from 'react';
import './Cart.css';
import {useDispatch, useSelector} from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();
    const cartOrder = useSelector(state => state.cartOrder);

    console.log('CartOrder: ',cartOrder);
    return (
        <div className="Cart">
            <fieldset>
                <legend>CART</legend>
                <ul>
                    {Object.keys(cartOrder).map(order => (
                       <li key={order} className="Order"><p className="OrderName">{order}</p><p className="OrderQty">x{cartOrder[order]}</p></li>
                    ))
                    }
                </ul>
                <div className="Total">
                    <p className="TotalP">Сумма заказа</p>
                    <p className="TotalP">KGS</p>
                    <p className="TotalP">Доставка</p>
                    <p className="TotalP">KGS</p>
                    <p className="TotalP">Итог</p>
                    <p className="TotalP">KGS</p>
                </div>

            </fieldset>

        </div>
    );
};

export default Cart;