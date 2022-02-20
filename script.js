const btn = document.querySelector('.btn-add')
const inputText = document.querySelector('.input')
const list = document.querySelector('.list')


let toDo=[]

if (!localStorage.toDo) {
    toDo = []
} else {
    toDo = JSON.parse(localStorage.getItem('toDo'))
}

btn.addEventListener('click', () => {
    let textValue = inputText.value
    toDo.push(textValue)
    console.log(toDo)
    updateLocal()
    addListItem()
})

const createElement = (text, index) => {
    return `
    <li class="list_item">${text}
    <button class="btn-del" onclick="delElement(${index})">x</button></li>
    `
}

const addListItem = () => {
    list.innerHTML = ''
    if (toDo.length > 0) {
        toDo.forEach((item, index) => {
            list.innerHTML += createElement(item, index)
        })
    }
}

addListItem()

const updateLocal = () => {
    localStorage.setItem('toDo', JSON.stringify(toDo))
}

const delElement = (index) => {
    toDo.splice(index, 1)
    addListItem()
    updateLocal()
}

