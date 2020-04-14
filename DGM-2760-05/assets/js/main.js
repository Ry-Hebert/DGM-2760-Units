let tArr = ['Oak', 'Pine', 'Aspen', 'Bald Cypress']
let lowerCaseA = []
let errOut = document.querySelector('#errorM')
let output = document.querySelector('#outP')

contentLoad = () =>
{
    let pos1 = document.querySelector('#pageTitle')
    let pos2 = document.querySelector('#pageSlogan')

    pos1.textContent=`The Arborist`
    pos2.textContent=``
    
    displayTrees()
}

displayTrees = () =>
{
    let aOfTrees = null
    tArr.forEach(x => {if(aOfTrees == null){aOfTrees = `${x} <br>`}else{aOfTrees += `${x} <br>`}})
    output.innerHTML = `<p>${aOfTrees}</p>`
}

addEnd = () =>
{
    tArr.push('Redwood')
    console.log(tArr)
    displayTrees()
}

addStart = () =>
{
    tArr.unshift('Pear')
    console.log(tArr)
    displayTrees()
}

rmv1 = () =>
{
    tArr.shift()
    console.log(tArr)
    displayTrees()
}

rmv2 = () =>
{
    tArr.splice(1,1)
    console.log(tArr)
    displayTrees()
}

rmvLast = () =>
{
    tArr.pop()
    console.log(tArr)
    displayTrees()
}

aToZ = () =>
{
    tArr.sort()
    console.log(tArr)
    displayTrees()
}

lowerCase = () =>
{
    tArr.forEach((item) => {lowerCaseA.push(item.toLocaleLowerCase())})
    tArr = lowerCaseA
    lowerCaseA = []
    console.log(tArr)
    displayTrees()
}

dis3 = () =>
{
    output.innerHTML = `<p>${tArr[2]}</p>`
}

dis4 = () =>
{
    output.innerHTML = `<p>${tArr[3]}</p>`
}

document.querySelector('#addRedEnd').onclick = addEnd
document.querySelector('#addPearStart').onclick = addStart
document.querySelector('#rmv1').onclick = rmv1
document.querySelector('#rmv2').onclick = rmv2
document.querySelector('#rmvLast').onclick = rmvLast
document.querySelector('#az').onclick = aToZ
document.querySelector('#lower').onclick = lowerCase
document.querySelector('#dis3').onclick = dis3
document.querySelector('#dis4').onclick = dis4