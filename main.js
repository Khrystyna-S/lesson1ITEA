const mainBody = document.querySelector('body');
const divElem = document.createElement('div');
const spanElem = document.createElement('span');
const btnElem = document.createElement('button');

mainBody.append(divElem);
divElem.append(spanElem);
divElem.append(btnElem);
spanElem.innerHTML = '#e74c3c';
btnElem.innerHTML = 'Get New Color';


btnElem.addEventListener('click',function(){
    let symbols, color;
    symbols = '0123456789ABCDEF';
    color = '#';

    for(let i=0; i<6; i++){
        color += symbols[Math.floor(Math.random() * 16)];
    }
    mainBody.style.background = color;
    spanElem.innerHTML = color;
})

