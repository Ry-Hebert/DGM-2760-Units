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