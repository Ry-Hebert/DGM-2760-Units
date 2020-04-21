contentLoad = () =>
{
    let pos1 = document.querySelector('#pageTitle')
    let pos2 = document.querySelector('#pageSlogan')

    pos1.textContent=`Guessing Game`
    pos2.textContent=`This is a simple number based guessing game.`
}

menuDup () =>
{
    let toplist = document.querySelectorAll('')

    let newList = document.createElement('ul')

    toplist.forEach(menuItem =>
        {
            let newLi = document.createElement('li')
            let newLink = document.createElement('a')
            newLink.setAttribute('href', menuItem.getAttribute('href'))
            
        })
}