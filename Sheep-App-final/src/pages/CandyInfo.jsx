import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "../Components/Button";
import { buyCandy, changeCandy } from "../actions/candyActions";

function CandyInfo() {
    const [candy, setCandy] = useState();
    const [newPrice, setNewPrice] = useState();
    const [priceInputVisible, setPriceInputVisible] = useState(false);
    const params = useParams();
    const dispatch = useDispatch();
    // hämta godis från store
    const state = useSelector((state) => {
        return state;
    });
    useEffect(() => {
        // matcha param.id med godis-id't
        let candyMatch = state.candies.find((c) => c.id == params.id);
        setCandy(candyMatch);
        setNewPrice(candyMatch.price)
    }, [state]);

    function addCandyToCart() {
        console.log(candy);
        // dispatcha actionen buyCandy
        dispatch(buyCandy(candy))
    };

    return (
        <main>
            {candy &&
                <>
                    <img className="card__image" src={"/imgs/sheep-" + candy.id + ".png"} alt="klubba" width="200px" height="200px" />
                    <h2>{candy.name}</h2>
                    <section onClick={() => setPriceInputVisible(true)}>
                        {
                            priceInputVisible ?
                                <>
                                    <input type="number" defaultValue={candy.price} onChange={(e) => setNewPrice(e.target.value)}/>SEK
                                </>
                                :
                                <p>
                                    {candy.price}SEK
                                </p>
                        }</section>
                        {priceInputVisible && <button onClick={() => dispatch(changeCandy(candy, "price", newPrice))}>New price</button>}
                    <p>{candy.name}</p>
                    <Button title="ADD TO CART" action={addCandyToCart} />
                </>
            }
        </main>
    );
}

export default CandyInfo;