// dhamaan elements ka 
let body = document.querySelector('body');
let container = document.createElement('div')
let flex = document.createElement('div');
let h1 = document.createElement('h1');
let img = document.createElement('img');
let date = document.createElement('h4');
let p =  document.createElement('p');
let like = document.createElement(`img`);

body.appendChild(container)
body.appendChild(img)
container.appendChild(flex)
flex.appendChild(h1)
flex.appendChild(img)
container.appendChild(date)
container.appendChild(p)
flex.appendChild(like)

let h1Style = `
transform: translateX(70px)translateY(6px);
color: black;
`

let imgStyle = `
width: 50px;
transform: translateY(-110%) translateX(10px);
border-radius: 50px;
height: 50px;
`

let likeStyle = `
transform: translateY(260%) translateX(-45px)
`

let containerStyle = `
    background-color: #D5D3CF;
    width: 500px;
    height: 250px;
`

let dateStyle = `
transform: translateY(-90px)translateX(100px);
color: black;
font-size:14px;
`


let flexStyle = `
display: flex;
`

let pStyle = `
transform: translateY(-100px);
margin-left: 9px;
`



p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis perspiciatis ipsa rerum deleniti sequi saepe modi quo doloremque sunt omnis incidunt, qui vero temporibus quia. Tempora sunt vitae voluptatum quaerat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis perspiciatis ipsa rerum deleniti sequi saepe modi quo doloremque sunt omnis incidunt, qui vero temporibus quia. Tempora sunt vitae voluptatum quaerat"
p.style.cssText = pStyle
container.style.cssText = containerStyle
h1.textContent = "Wondar Woman"
h1.style.cssText = h1Style
date.textContent = "Public - 09JUN,2021"
date.style.cssText = dateStyle
img.src = `../img/wondarwoman.jpg`
img.style.cssText = imgStyle
like.style.cssText = likeStyle
like.src = `../img/like.png`