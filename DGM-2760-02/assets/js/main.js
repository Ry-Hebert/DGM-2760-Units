let pos1 = document.querySelector('.winProp')
let pos2 = document.querySelector('.docProp')

myFunction = () =>
{
    pos1.textContent=`Your window height is ${window.innerHeight}, and your window width is ${window.innerWidth}. \n Your window offset is ${window.screenLeft} from the left, and ${window.screenTop} from the top.\nThe page URL is ${window.location}`
    pos2.textContent=`This document is ${document.title}, located at ${window.location.href}`
}