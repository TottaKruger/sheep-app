import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { useSelector } from 'react-redux';
export default function CartIcon() {
    const [cartCount, setCartCount] = useState(0)
    const state = useSelector((state) => {
        return state;
    });
    useEffect(() => {
        setCartCount(state.cart.length)
    }, [state])
    return (
        <section className={style.cart}>
            <Link to="/cart" className={style.link}>
                <img src="/imgs/shopping-cart.svg" width="25px" height="25px" />
                {cartCount > 0 ? <div className={style.cartCounter}><p>{cartCount}</p></div> : null}
            </Link>
        </section>
    )
}