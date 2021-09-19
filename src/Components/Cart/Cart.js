import React, {useEffect, useMemo, useState} from 'react';
import './Cart.css';
import {useDispatch, useSelector} from "react-redux";
import {decrease} from "../../store/Actions/CartAction/Cart";

const Cart = () => {
    const dispatch = useDispatch();
    const priceItem = useSelector(state => state.menuList.menu)
    const cartOrder = useSelector(state => state.cartOrder);
    const [orderPrice, setOrderPrice] = useState(0);
    const [disabled, setDisabled] = useState(true);
    let price = 0;

    const onCartItemHandler = (key) => {
        priceItem.map(item => {
            if (key === item.name) {
                price = item.price;
            }
            return item;
        })
        dispatch(decrease({key, price}));
    };

    useMemo(() => {
        if (orderPrice === 0) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [orderPrice])

    useEffect(() => {
        let orderTotal = 0;
        Object.keys(cartOrder).map(price => {
            orderTotal += cartOrder[price].price;
        return price;
        });

        setOrderPrice(orderTotal);
    }, [cartOrder])



    return (
        <div className="Cart">
            <fieldset>
                <legend>CART</legend>
                <ul>
                    {Object.keys(cartOrder).map(order => {
                       return (
                        <li
                            key={order}
                            className="Order"
                            onClick={() => onCartItemHandler(order)}
                        >
                            <p className="OrderName">{order}</p>
                            <p className="OrderQty">x{cartOrder[order].qty}</p>
                            <p className="OrderKGS">KGS</p>
                            <p className="OrderPrice">{cartOrder[order].price}</p>
                       </li>
                       )})}
                </ul>
                <div className="Total">
                    <p className="TotalP">Сумма заказа</p>
                    <p className="TotalKGS">KGS</p>
                    <p className="OrderPrice">{orderPrice}</p>
                    <p className="TotalP">Доставка</p>
                    <p className="TotalKGS">KGS</p>
                    <p className="TotalP">Итог</p>
                    <p className="TotalKGS">KGS</p>

                </div>
                <p className="CenterButton">
                <button
                    className="OrderButton"
                    disabled={disabled}
                    // onClick={props.onOrder}
                >
                    PLACE ORDER
                </button>
                </p>
            </fieldset>

        </div>
    );
};

export default Cart;