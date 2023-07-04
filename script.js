const littleBottle = document.querySelectorAll('.bottle.little')
const percentage = document.getElementById('percentage')
const remained = document.querySelector('.remained')
const remainedText = document.getElementById('remainedText')

const fillBigBottle = () => {
    const activeCups = document.querySelectorAll('.bottle.little.active').length
    const totalCups = littleBottle.length

    if(activeCups == totalCups) {
        remained.style.height = 0
        remained.style.visibility = 'hidden'
    }
    else remained.style.visibility = 'visible'

    if(activeCups!=0) {
        remainedText.innerText = `${2 - (activeCups*0.25)}L`
        percentage.style.height = `${activeCups*50}px`
        percentage.innerText = `${activeCups * 12.5}%`
    }
    else {
        remainedText.innerText = '2L'
        percentage.style.height = 0
        percentage.innerText = ''
    }

    
}

const fillLittleBottle = (idx) => {
    const littleBottle = document.querySelectorAll('.bottle.little')
    let lastIdx = -1
    littleBottle.forEach(bottle => {
        if(bottle.classList.contains('active')) lastIdx++
    })
    for (let i=0; i<=idx; i++) littleBottle[i].classList.add('active')
    if(littleBottle[idx].classList.contains('active')){
        if(idx==lastIdx) littleBottle.forEach(bottle => bottle.classList.remove('active'))
        else {
            for (let i=idx+1; i<8; i++) littleBottle[i].classList.remove('active')
        }
    }
    fillBigBottle()
}

fillBigBottle()

littleBottle.forEach((bottle, idx) => {
    bottle.addEventListener('click', () => fillLittleBottle(idx))
});