import {informationPage, resetPage, buttonMain} from './information'


function resetButton(){
    let buttons = document.querySelectorAll('button')
    buttons.forEach(x => {
        x.setAttribute('class', 'buttonHead')
    })
}

function createContainer(){
    let buttonContainer = document.createElement('div')
    buttonContainer.setAttribute('class','buttonContainer')
    document.querySelector('body').append(buttonContainer)
}



function createButtons(){
let names = ['Main', 'Page 1', 'Page 2']
    for(let i = 0;i<3;i++){
    let buttonMake = document.createElement("button")
    buttonMake.setAttribute('class','buttonHead')
    buttonMake.setAttribute('id',`buttonHead${i}`)
    buttonMake.textContent = names[i]
    buttonMake.addEventListener('click',e =>{
        if(e.target.getAttribute('id') === 'buttonHead2'){
            resetPage()
        }else if(e.target.getAttribute('id') === 'buttonHead1'){
            resetPage()
        }else if(e.target.getAttribute('id') === 'buttonHead0'){
            resetPage()
            buttonMain()
        }
        resetButton()
        e.target.setAttribute('class','onclick')
    })
    document.querySelector('.buttonContainer').append(buttonMake)
    }
}


export {createButtons,createContainer} 