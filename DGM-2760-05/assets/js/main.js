let tArr = ['Oak', 'Pine', 'Aspen', 'Bald Cypress']
let errOut = document.querySelector('#errorM')
let output = document.querySelector('#outP')

contentLoad = () =>
{
    let pos1 = document.querySelector('#pageTitle')
    let pos2 = document.querySelector('#pageSlogan')

    pos1.textContent=`The Arborist`
    pos2.textContent=``

    document.querySelectorAll('button').onclick=onClickFunk()
    displayTrees()
}

displayTrees = () =>
{
    let aOfTrees = null
    tArr.forEach(x => {if(aOfTrees == null){aOfTrees = `${x} <br>`}else{aOfTrees += `${x} <br>`}})
    output.innerHTML = `<p>${aOfTrees}</p>`
}

document.querySelector('#addRedEnd').onclick = addEnd()

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
    tArr.forEach(toLocaleLowerCase)
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