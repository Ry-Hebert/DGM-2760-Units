contentLoad = () =>
{
    let pos1 = document.querySelector('#pageTitle')
    let pos2 = document.querySelector('#pageSlogan')
    let pos3 = document.querySelector('#copyright')

    pos1.textContent=`Grant's Tomb`
    pos2.textContent=`Literal Objects`
    pos3.textContent=`Copyright © ${new Date().getFullYear()} Ryan Hébert`
}

response = (x) =>{document.querySelector('#pizzaOut').innerHTML = x}

const question = 
{
    stem: "Who is buried in Grant's Tomb",
    o1: "Linda",
    o2: "Tom",
    o3: "Kendra",
    o4: "Grant",
    correct: 4,
    display: () =>
    {
        document.querySelector('#stem').innerHTML = `<h3>${question.stem}</h3>`
        document.querySelector('#a1').innerHTML = `<p>(A): ${question.o1}</p>`
        document.querySelector('#a2').innerHTML = `<p>(B): ${question.o2}</p>`
        document.querySelector('#a3').innerHTML = `<p>(C): ${question.o3}</p>`
        document.querySelector('#a4').innerHTML = `<p>(D): ${question.o4}</p>`
    },
    check: (uc) =>
    {
        console.log(uc)
        let feedbackSec = document.querySelector('#feedback')
        if(uc == question.correct)
        {
            feedbackSec.innerHTML = `You are correct!`
            feedbackSec.classList.add("aGreen")
            feedbackSec.classList.remove("aRed")
        }
        else
        {
            feedbackSec.innerHTML = `Sorry, you are incorrect`
            feedbackSec.classList.add("aRed")
            feedbackSec.classList.remove("aGreen")
        }
    }
}

document.querySelectorAll('.qButton').forEach(item => item.addEventListener('click', () => question.check(item.value)))
question.display()