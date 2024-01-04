import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { buyCandy, changeCandy, manuallySetAmount, removeCandy } from '../actions/candyActions';
import style from "./CartItem.module.scss";
import Button from './Button';

export default function CartItem({ cartItem }) {
    const [inputVisible, setInputVisible] = useState(false);
    const [newName, setNewName] = useState(cartItem.name);
    const dispatch = useDispatch();

    function handleChangeName() {
        dispatch(changeCandy(cartItem, "name", newName));
        setInputVisible(false);
    }

    return (
        <article className={style.container}>
            <section className={style.thumbnail} style={{ backgroundImage: 'url(/imgs/sheep-' + cartItem.id + '.png)' }}></section>
            <section className={style.info}>
                {inputVisible ?
                    <>
                        <input defaultValue={cartItem.name} onChange={(e) => setNewName(e.target.value)} />
                        <Button title="!" action={handleChangeName} />
                    </>
                    : <h3 onClick={() => setInputVisible(true)}>{cartItem.name}</h3>}
            </section>
            <section className={style.buttons}>
                <button onClick={() => dispatch(removeCandy(cartItem))}>X</button>
                <input className={style.amountInput} placeholder={cartItem.amount} onBlur={(e) => dispatch(manuallySetAmount(cartItem, e.target.value))} />
                <button onClick={() => dispatch(buyCandy(cartItem))}>+</button>
            </section>
        </article>
    )
}