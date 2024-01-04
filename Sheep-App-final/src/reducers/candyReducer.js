import { candyStore } from "../store/candyStore";

const candyReducer = (state = candyStore, action) => {
    let cart = [...state.cart];
    switch (action.type) {
        case "BUY_CANDY":
            // då vill vi returnera det nya statet efter att vi har utfört vad kunden vill
            let candyToAdd = action.payload;
            let objIndex = cart.findIndex((cartItem => cartItem.id === candyToAdd.id));
            if (objIndex > -1) {
                // om varan redan finns i korgen vill vi plussa på antalet
                cart[objIndex].amount += 1;
            } else {
                // om varan inte finns i cart skall den läggas in
                candyToAdd.amount = 1
                console.log(candyToAdd);
                cart.push(candyToAdd)
            }
            return {
                ...state,
                cart: [...cart]
            }
        case "REMOVE_CANDY":
            let candyToRemove = action.payload;
            let index = cart.findIndex((cartItem) => cartItem.id === candyToRemove.id)
            if (candyToRemove.amount > 1) {
                // om det finns fler än en av denna godissort skall vi bara minusa mängden
                cart[index].amount -= 1;
            } else {
                // om det bara finns en av denna godis skall den tas bort helt
                cart.splice(index, 1);
            }

            return {
                ...state,
                cart: [...cart]
            }
        case "MANUALLY_SET_AMOUNT":
            let setAmountCandy = action.payload.candy;
            setAmountCandy.amount = parseInt(action.payload.amount); 
            if (!setAmountCandy.amount) {
                setAmountCandy.amount = 1;
            }
            let setAmountCandyIndex = cart.findIndex((item) => item.id === setAmountCandy.id);
            cart.splice(setAmountCandyIndex, 1, setAmountCandy);
            return {
                ...state,
                cart: [...cart]
            }
        case "FILL_STOCK":
            return {
                ...state,
                candies: [...action.payload]
            }
        case "CHANGE_CANDY":
            let changedCandy = action.payload.candy;
            let property = action.payload.property
            changedCandy[property] = action.payload.newValue
            let indexOfCandyNameToChange = cart.findIndex((item) => item.id === changedCandy.id);
            cart.splice(indexOfCandyNameToChange, 1, changedCandy);
            // samma som: cart[indexOfCandyNameToChange] = changedCandy;
            return {
                ...state,
                cart: cart
            }
        default:
            return state
    }
}
export default candyReducer;