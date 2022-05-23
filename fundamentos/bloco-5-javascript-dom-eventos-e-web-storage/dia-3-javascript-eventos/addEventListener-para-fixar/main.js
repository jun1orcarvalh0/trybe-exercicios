const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 2 Adicionando evento de click
firstLi.addEventListener("click", currentTech);
secondLi.addEventListener("click", currentTech);
thirdLi.addEventListener("click", currentTech);

function changeInputText(tag) {
    if (tag === firstLi) {
        input.placeholder = "Alterar a primeira tecnologia";
    }
    if (tag === secondLi) {
        input.placeholder = "Alterar a segunda tecnologia";
    }
    if (tag === thirdLi) {
        input.placeholder = "Alterar a terceira tecnologia";
    }
}

function removeClass(className) {
    let classList = document.getElementsByClassName(className);
    classList[0].classList.remove(className);
}

function currentTech(currentTag) {
    removeClass('tech');
    let actualTag = currentTag.target;
    changeInputText(actualTag);
    actualTag.classList.add('tech');
}

// 3
input.addEventListener('change', clearInput);
input.addEventListener('keyup', changeLiText);

function clearInput () {
    input.value = ''
}

function changeLiText () {
    let currentLi = document.querySelector('.tech');
    if (input.value !== '') {
        currentLi.innerText = input.value;
    }
}

//4

myWebpage.addEventListener('dblclick',  webPage);

function webPage () {
    window.open('https://jun1orcarvalh0.github.io./', '_blank');
}

//5

myWebpage.addEventListener("mouseover", mouseEmCima);

function mouseEmCima () {
    myWebpage.style.color = 'red';
}

myWebpage.addEventListener("mouseleave", mouseSaiuDoElemento);

function mouseSaiuDoElemento () {
    myWebpage.style.color = 'white';
}

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.