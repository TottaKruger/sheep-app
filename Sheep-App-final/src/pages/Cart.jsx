import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../Components/Button";
import CartItem from "../Components/CartItem";

function Cart() {
    const [cart, setCart] = useState([]);
    const state = useSelector((state) => state);

    useEffect(() => {
        setCart(state.cart);
    }, [state]);

    return (
        <main>
            <h2>Your sheep-cart</h2>
            {cart.length === 0 && <p>No sheeps here yet...</p>}
            {
                cart && cart.map((cartItem, i) =>
                    <CartItem cartItem={cartItem} key={i} />)
            }
            {cart.length > 0 && <section className='buttonContainer'>
                <Button title="BUY THEM NOW!" action={() => console.log('checkout')} />
            </section>}
        </main>
    );
}

export default Cart;