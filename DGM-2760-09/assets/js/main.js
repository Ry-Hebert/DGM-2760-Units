menuDup = () =>
{
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    let newList = document.createElement('ul')
    document.querySelector('#smallNavArea').appendChild(newList)

    topList.forEach(menuItem =>
        {
            let newLi = document.createElement('li')
            let newLink = document.createElement('a')
            newLink.setAttribute('href', menuItem.getAttribute('href'))
            
            newLink.textContent = menuItem.textContent
            newList.appendChild(newLi)
            newLi.appendChild(newLink)
        })
}

menuDup()