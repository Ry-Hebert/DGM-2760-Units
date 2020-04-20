contentLoad = () =>
{
    let pos1 = document.querySelector('#pageTitle')
    let pos2 = document.querySelector('#pageSlogan')
    let pos3 = document.querySelector('#copyright')

    pos1.textContent=`Pizza Emporium`
    pos2.textContent=`Literal Objects`
    pos3.textContent=`Copyright © ${new Date().getFullYear()} Ryan Hébert`
}

response = (x) =>{document.querySelector('#pizzaOut').innerHTML = x}

const pizza =
{
    crust: 'thin',
    size: 'small',
    topping: 'pepperoni',
    buildPizza: () =>
    {
        console.log('buildPizza method has been called')
        let messageOut = `Baking a ${pizza.size} ${pizza.topping} pizza with a ${pizza.crust} crust.`
        response(messageOut)
    },
    shoppingList: () =>
    {
        let flour = 1
        if(pizza.crust === 'thick'){flour *= 2}
        if(pizza.size === 'large'){flour *= 2}
        console.log('Shopping List method has been called')
        let messageOut = `You will need to purchase ${flour} cups of flour and 1lb of ${pizza.topping} for your pizza.`
        response(messageOut)
    }
}

document.querySelectorAll('input[name="crust"]').forEach(item => item.addEventListener('click', () => pizza.crust = item.value))
document.querySelectorAll('input[name="topping"]').forEach(item => item.addEventListener('click', () => pizza.topping = item.value))
document.querySelectorAll('input[name="size"]').forEach(item => item.addEventListener('click', () => pizza.size = item.value))
document.querySelector('#orderP').addEventListener('click', pizza.buildPizza)
document.querySelector('#shoppingL').addEventListener('click', pizza.shoppingList)