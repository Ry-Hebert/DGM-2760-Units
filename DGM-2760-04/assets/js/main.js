randomGen = (x) =>{return window.crypto.getRandomValues(new Uint32Array(1))[0] % x}
// Because we're trying to get a random number between 1 and 15 we are going to pass 15 (Our number of numbers we're looking for) add then add +1 to the results of randomGen(15)(Which should provided us with numbers between 0-14) so that our value of randomNumber will be somewhere between 1-15.
//const randomNumber = randomGen(findVar) + 1
// Generates a more cryptographically secure random number than simply (Math.random). The % operator returns the remainder of the random number divided by 15.
minMaxRandomNumGen = (min, max) =>
{
    let x = (max +1) - min;
    let ranNum = randomGen(x) + min
    return ranNum
}

contentLoad = () =>
{
    let pos1 = document.querySelector('#pageTitle')
    let pos2 = document.querySelector('#pageSlogan')
    let tellF = document.querySelector('#fortune')

    pos1.textContent=`The Fortune Teller`
    pos2.textContent=`What mysteries await you!`

    let monthNum = minMaxRandomNumGen(1, 12)
    let dayNum = minMaxRandomNumGen(1, 30)
    let fortuneNum = minMaxRandomNumGen(1, 5)

    let month = null;
    let fortune = null;

    switch(monthNum)
    {
        case 1:
            month = 'January'
            break 
        case 2: 
            month = 'February'
            break 
        case 3:
            month = 'March'
            break 
        case 4: 
            month = 'April'
            break 
        case 5:
            month = 'May'
            break 
        case 6: 
            month = 'June'
            break 
        case 7:
            month = 'July'
            break 
        case 8: 
            month = 'August'
            break 
        case 9:
            month = 'September'
            break 
        case 10: 
            month = 'October'
            break 
        case 11:
            month = 'November'
            break 
        case 12: 
            month = 'December'
            break
        default: 
            month = 'Unknown Error'
            console.log(`Month # = ${monthNum}`)
            break
    }
    
    switch(fortuneNum)
    {
        case 1:
            fortune = 'you will find a slip of paper with numbers and letters on it only to realize its a bitcoin wallet address. upon looking into it more you find it dosen\'t have anything in it.'
            break
        case 2:
            fortune = 'your hobby will be discovered by someone very influential (and no, not your sister in law who is trying to be a \'social media influencer\'.)'
            break
        case 3:
            fortune = 'something magical awaits you.'
            break
        case 4:
            fortune = 'just bring a umbrella, trust me.'
            break
        case 5:
            fortune = `your lucky numbers are: ${minMaxRandomNumGen(0, 99)}, ${minMaxRandomNumGen(0, 99)}, ${minMaxRandomNumGen(0, 99)}, ${minMaxRandomNumGen(0, 99)}, ${minMaxRandomNumGen(0, 99)}`
            break
        default:
            fortune = 'Unknown Error'
            console.log(`Fortune # = ${fortuneNum}`)
            break
    }

    tellF.textContent = `On ${month} ${dayNum} ${fortune}`

}