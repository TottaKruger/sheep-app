export const buyCandy = (candy) => ({
    type: "BUY_CANDY",
    payload: candy
});

export const removeCandy = (candy) => ({
    type: "REMOVE_CANDY",
    payload: candy
});

export const fillStock = (candies) => ({
    type: "FILL_STOCK",
    payload: candies
});

export const manuallySetAmount = (candy, amount) => ({
    type: "MANUALLY_SET_AMOUNT",
    payload: {candy, amount}
});

export const changeCandy = (candy, property, newValue) => ({
    type: "CHANGE_CANDY",
    payload: {candy, property, newValue}
});