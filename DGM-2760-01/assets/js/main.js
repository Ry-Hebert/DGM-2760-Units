let position1 = document.querySelector('h1, hero_ban')
let position2 = document.querySelector('h2, hero_ban')
let position3 = document.querySelector('h3, content')

//let position2 = document.querySelector('')

myFunction = () =>
{
    position1.textContent="Joe's Beachside Bed & Breakfast"

    position2.textContent="Life can be a beach, so take some time to relax."

    let userName = prompt("Joe's Beachside Bed & Breakfast would like to know: \n What is your name?")

    if(`${userName}` == 'null' || userName == '')
    {
        position3.textContent=`Welcome to paradise!`
    }
    else
    {
        position3.textContent=`Welcome to paradise ${userName}!`
    }

    var d = new Date();
    document.getElementById("copyright").textContent += `${d.toDateString()}`
}