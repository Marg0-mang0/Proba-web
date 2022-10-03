const paragraf = document.getElementById('paragraf')
const name = prompt('Введите ваше имя')
const block = document.getElementById('lox')
const block1 = document.getElementById('lox1')
const tema = document.getElementById('tema')
if (name) {
    addText2(block, `${name} `)
    addText(block1, 'Лошара ツ')
    addText1(tema, 'Нажми сюда↑')
} else {
    add(block, 'Ты лошара')
}

const heading = document.getElementById('figura')
const heading2 = document.getElementById('telo')
const heading3 = document.getElementById('noga1')
const heading4 = document.getElementById('noga2')
const heading5 = document.getElementById('foot')

setInterval(() => {
    add(heading,'(•_•)')
},2200)
setInterval(() =>{
    add2(heading,'(•_•)')
},2300)
setInterval(() =>{
    add(heading,'(•_•)')
},2400)
setInterval(() =>{
    add(heading,'(•_•)')
},2500)
setInterval(() =>{
    add(heading,'(•_•)')
},2600)
setInterval(() => {
    add(heading2,'<)  )◞')
},2200)
setInterval(() => {
    add(heading2,'╰(  (>')
},2300)
setInterval(() =>{
    add(heading2,'<(    (>')
},2400)
setInterval(()=> {
    add(heading2,'<)    )>')
},2500)
setInterval(()=> {
    add(heading2,'~)     )~')
},2600)
setInterval(() => {
    add3(heading5,'╱   ╲')
},2200)
setInterval(() => {
    add4(heading5,'╱  ╲')
},2300)
setInterval(() => {
    add3(heading5,'╱  ╲')
},2400)
setInterval(() => {
    add3(heading5,'╱  ╲')
},2500)
setInterval(() => {
    add3(heading5,'╱  ╲')
},2600)

function addText(node,text,fontSize='70px'){
    node.textContent = text
    node.style.margin = '0px'
    node.style.textAlign ='center'
    node.style.display= 'flex'
    node.style.justifyContent='center'
    node.style.paddingLeft='20px'
    if(fontSize){
        node.style.fontSize = fontSize
    }
}
function addText2(node,text,fontSize='70px'){
    node.textContent = text
    node.style.marginTop = '10px'
    node.style.textAlign ='center'
    node.style.display= 'flex'
    node.style.justifyContent='center'
    node.style.paddingLeft='20px'
    if(fontSize){
        node.style.fontSize = fontSize
    }
}
function addText1(node,text,fontSize='36px'){
    node.textContent = text

    node.style.margin ='0px'
    node.style.textAlign ='center'
    node.style.display= 'flex'
    node.style.justifyContent='center'
    node.style.paddingLeft='185px'
    node.style.color='black'
    if(fontSize){
        node.style.fontSize = fontSize
    }
}
function add(node, text,fontSize ='160px'){
    node.textContent = text 
    node.style.margin = '0px'
    node.style.textAlign ='center'
    node.style.display= 'block'
    node.style.paddingLeft='0px'
    if(fontSize){
        node.style.fontSize = fontSize
    }
}
function add2(node, text,fontSize ='160px'){
    node.textContent = text 
    node.style.margin = '0px'
    node.style.paddingLeft = '100px'
    node.style.textAlign ='center'
    node.style.display= 'block'
    if(fontSize){
        node.style.fontSize = fontSize
    }
}
function add3(node, text,fontSize ='125px'){
    node.textContent = text 
    node.style.margin = '0px'
    node.style.paddingLeft = '0px'
    node.style.display= 'flex'
    node.style.justifyContent='center'
    node.style.wordSpacing='40px'
    if(fontSize){
        node.style.fontSize = fontSize
    }
}
function add4(node, text,fontSize ='125px'){
    node.textContent = text 
    node.style.margin = '0px'
    node.style.paddingLeft = '100px'
    node.style.display= 'flex'
    node.style.justifyContent='center'
    node.style.wordSpacing='40px'
    if(fontSize){
        node.style.fontSize = fontSize
    }
}
function addText3(node,text,fontSize='70px'){
    node.textContent = text
    node.style.margin = '0px'
    node.style.textAlign ='center'
    node.style.display= 'block'
    node.style.justifyContent='center'
    node.style.paddingLeft='20px'
    if(fontSize){
        node.style.fontSize = fontSize
    }
}

block1.onclick= () => {
    if(block1.style.color === 'red') {
        block1.style.color = 'green'
        addText3(block1,'Дважды Лошара ツ')
    } else{
        block1.style.color = 'red'
        addText(block1, 'Лошара ツ')
    }
}

block1.addEventListener('mouseenter',() => {
    if(block1.style.color === 'black') {
        block1.style.color = 'red'
    } else{
        block1.style.color = 'black'
    }
}
)

i=0;
dt=new Array("#ff030324", "#0703ff24", "#7003ff24", "#bc03ff24", "#fbff0324");
function cl() 
{document.getElementById("fon").style.backgroundColor=dt[i++];
    if (i>dt.length) i=0;
    setTimeout("cl()",400);}
setTimeout("cl()",400);