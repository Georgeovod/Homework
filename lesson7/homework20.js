'use strict'

const borsch = 48;

const howMuchPotatoes = (borsch, potato = 75) => {
    const potatoesForLitr = potato * 4;
    let result = (potatoesForLitr * borsch) / 1000;
    return result;
};
const amountOfPotatoes = howMuchPotatoes(borsch);
console.log(amountOfPotatoes);

const howMuchCostPotatoes = (kilograms, costOfPotatoes = 13) => {
    let result = Math.ceil(kilograms * costOfPotatoes);
    return result;
};
console.log(howMuchCostPotatoes(amountOfPotatoes));