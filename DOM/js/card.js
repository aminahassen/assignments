let body = document.querySelector('body');
let container = document.createElement('div')
let flex = document.createElement('div');
let h1 = document.createElement('h1');
let img = document.createElement('img');
let date = document.createElement('h4');
let p =  document.createElement('p');
let icon = document.createElement(`img`);

body.appendChild(container)
body.appendChild(img)
container.appendChild(flex)
flex.appendChild(h1)
flex.appendChild(img)
container.appendChild(date)
container.appendChild(p)
flex.appendChild(icon)

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

let iconStyle = `
transform: translateY(100px) translateX(-40px);
width: 200px;
height: 30px;
`

let containerStyle = `
background-color: grey;
width: 500px;
height: 250px;
`

let dateStyle = `
transform: translateY(-90px)translateX(90px);
color: black;
font-size:14px;
`


let flexStyle = `
display: flex;
`

let pStyle = `
transform: translateY(-100px) translateX(7px);s
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
icon.style.cssText = iconStyle
icon.src = `../img/likeicon.jpg`