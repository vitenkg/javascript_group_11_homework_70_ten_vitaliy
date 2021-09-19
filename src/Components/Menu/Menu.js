import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Menu.css';
import {fetchMenu} from "../../store/Actions/MenuAction/Menu";
import Spinner from "../UI/Spinner/Spinner";

const Menu = () => {
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menuList.menu);
    const loading = useSelector(state => state.menuList.loading)
    const orderlist = useSelector(state => state.cartOrder)

    useEffect(() => {
        dispatch(fetchMenu());
    }, [dispatch]);

    const onButtonHandler = key => {
        console.log('Bottom ', key);
        Object.keys(orderlist).map(order => {
            console.log('map: ', order);

        })
    };

    let components = (
        <fieldset>
            <legend>MENU</legend>
            <ul>
                {menu.map(item => (
                    <li
                        key={item.id}
                        className="List"
                    >
                        <p className="Img"><img src={item.url} alt="menu" width="150"/></p>
                        <div className="ListInner">
                            <p>{item.name}</p>
                            <p>KGS {item.price}</p>
                        </div>
                        <button
                            type="button"
                            className="BtnAdd"
                            onClick={() => onButtonHandler(item.name)}
                        >
                            Add to Cart</button>
                    </li>
                ))}
            </ul>
        </fieldset>
    );

    if (loading) {
        components = (
            <Spinner/>
        )
    }

    return (
        <div className="Menu">
            {components}
        </div>
    )
};

export default Menu;