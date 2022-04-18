import MyImage from './soldiers.jpg'

function resetPage(){
    let body = document.querySelector('.infoPage')
    while(body.firstChild){
        body.removeChild(body.lastChild)
    }
}

function informationPage(){
    let createPage = document.createElement('div')
    createPage.setAttribute('class','infoPage')

    let createH1 = document.createElement('h1')
    createH1.textContent = "Welcome to the Galatic Forces"

    const myIcon = new Image()
    myIcon.setAttribute('class','infoPagePic')
    myIcon.src = MyImage

    
    createPage.append(createH1)
    createPage.appendChild(myIcon)
    document.querySelector('body').append(createPage)

    let setUp = document.querySelector('#buttonHead0')
    setUp.setAttribute('class','onclick')
}

function buttonMain(){
    let page = document.querySelector('.infoPage')
    let createH1 = document.createElement('h1')
    createH1.textContent = "Welcome to the Galatic Forces"

    const myIcon = new Image()
    myIcon.setAttribute('class','infoPagePic')
    myIcon.src = MyImage

    
    page.append(createH1)
    page.append(myIcon)
}




export {informationPage,resetPage, buttonMain}