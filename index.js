const btnSwitchMode = document.querySelector('.switch-mode')

btnSwitchMode.onclick = function(){
    const mode = document.querySelector('.icon')
    
    if(mode.className === 'icon light-mode'){
        mode.src = "https://img.icons8.com/officel/25/000000/moon.png"
        mode.className =  'icon dark-mode' 
    } else {
        mode.src = "https://img.icons8.com/officel/25/000000/summer.png"
        mode.className =  'icon light-mode'
    }
        
    const bodyElement = document.querySelector('body')

    if(bodyElement.className !== 'body-dark'){
        bodyElement.setAttribute('class', 'body-dark')
    } else {
        bodyElement.setAttribute('class', 'body-light')
    }

    const h1Element = document.querySelector('h1')
    const pElement = document.querySelector('p')

    if(h1Element.className === 'font-color-light' && pElement.className === 'font-color-light'){
        h1Element.className = 'font-color-dark'
        pElement.className = 'font-color-dark'
    } else {
        h1Element.className = 'font-color-light'
        pElement.className = 'font-color-light'
    }
}

let pText = 'Em construção'.split('')
let pStrText = ''

for (let j = 0; j < pText.length; j++){
    printText(j, pText)
}

function printText(j, arrJ){
    setTimeout(function(){
        pStrText += arrJ[j]
        document.querySelector('p').innerText = pStrText
    }, 100 * j)
}
