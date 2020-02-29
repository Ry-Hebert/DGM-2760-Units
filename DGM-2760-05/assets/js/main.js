let tArr = ['oak', 'pine', 'aspen', 'Bald Cypress']
let errOut = document.querySelector('#errorM')
let output = document.querySelector('#outP')

contentLoad = () =>
{
    let pos1 = document.querySelector('#pageTitle')
    let pos2 = document.querySelector('#pageSlogan')
    let tellF = document.querySelector('#fortune')

    pos1.textContent=`The Fortune Teller`
    pos2.textContent=`What mysteries await you!`

    displayTrees()
}

displayTrees = () =>
{
    let aOfTrees = null
    tArr.forEach(x => {aOfTrees += `${x} <br>`})
    output.innerHTML = `<p>${tArr}</p>`
}