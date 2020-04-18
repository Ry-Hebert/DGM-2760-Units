randomGen = (x) =>
{
    let y = window.crypto.getRandomValues(new Uint32Array(1))[0] % x 
    return y+1
}
// Generates a more cryptographically secure random number than simply (Math.random). The % operator returns the remainder of the random number divided by x the variable passed to tell us up to what number we want a random number between.

contentLoad = () =>
{
    let pos1 = document.querySelector('#pageTitle')
    let pos2 = document.querySelector('#pageSlogan')
    let pos3 = document.querySelector('#copyright')

    pos1.textContent=`Nonsense Story`
    pos2.textContent=`String Manipulation`
    pos3.textContent=`Copyright © ${new Date().getFullYear()} Ryan Hébert`
}

storyOut = () =>
{
    let nouns = document.querySelector('#noun').value
    let adjs = document.querySelector('#adj').value
    let verbs = document.querySelector('#verb').value
    nouns = nouns.toLowerCase().split(/\s+/)
    adjs = adjs.toLowerCase().split(/\s+/)
    verbs = verbs.toLowerCase().split(/\s+/)

    console.log(nouns,adjs,verbs)

    let nonsenseStory = `There once was a ${nouns[0]} named ${nouns[1]}, who wasn't very ${adjs[0]}. Though they ${verbs[0]}, and they ${verbs[0]} with great ${adjs[1]} they just couldn't help out the ${nouns[2]}. So they decided to enlist the help of ${nouns[3]}, ${nouns[4]}, ${nouns[5]}, and ${nouns[6]}. With them all gathered they made quite a team and ${adjs[2]} team and thus the began to ${verbs[1]}`
    document.querySelector('#storyOut').innerHTML = nonsenseStory
}

document.querySelector('#storySub').onclick = storyOut