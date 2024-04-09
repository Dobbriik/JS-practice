// Обёртка общая
let wrapper = document.createElement("div")
wrapper.classList = "wrapper"
document.body.append(wrapper)


// Обёртка поля ввода
let addTask = document.createElement("div")
addTask.classList = "add-task"
wrapper.append(addTask)

// Инпут поле ввода 
let input = document.createElement("input")
input.classList = "task-inp"
input.type = "text"
input.placeholder = "Задача"

// Кнопка от инпут 
let button = document.createElement("button")
button.classList = "btn btn_active"
button.textContent = "Создать задачу"

// Реакция кнопки создает список (тут вся магия )
button.onclick = function () {
  addList (input.value)
  input.value = ""
}

//добовляем в 1й див 
addTask.append(input,button)

// Обёртка списков 
let taskListDiv = document.createElement("div")
taskListDiv.classList = "task-list-div"
wrapper.append(taskListDiv)

// Cоздать и запизать ul в div
function addList1 () {
  let list = document.createElement("ul")
  list.classList = "list"
  taskListDiv.append(list)
  return list
}

// создать li записхать в ul
function getList () {
  let list__item = document.createElement("li")
  list__item.classList = "list__item"
  return list__item
}

// Создать карточку
function addList (text) {
  //ul and 4 li 
  let list = addList1 ()
  let list__item1 = getList ()
  let list__item2 = getList ()
  let list__item3 = getList ()
  let list__item4 = getList ()
  
  // запихать li в ul
  list.append(list__item1, list__item2, list__item3, list__item4)

  // запихать title в li
  let list__title = getTitle (text)
  list__item1.append(list__title)

  // Cоздать заголовок
  function getTitle (text) {
    let list__title = document.createElement("h2")
    list__title.textContent = text
    list__title.classList = "list__title"
    return list__title
  }
  
  // Создать кнопку
  function getBtn (text, btnClass,) {
    let btn = document.createElement("button")
    btn.textContent = text
    btn.classList = btnClass
    return btn
  }

  // Кнопка выполнено 
  let done = getBtn ("Выполнено", "btn btn_min btn_green",)
  done.onclick = function () {
    done.remove()
    change.remove()
    delite.classList = "btn btn_min btn_done"
    list.classList = "list list_done"
  }
  list__item2.append(done)

  // Кнопка Изменить задачу
  let change = getBtn ("Изменить", "btn btn_min ",)
  change.onclick = function () {

    let lextchange = prompt("Изменить задачу", list__title.textContent)
    
    if (lextchange == null) {
      return list__title.textContent
    } else {
      list__title.textContent = lextchange
    }
  }
  list__item3.append(change)

  // Кнопка удалить список
  let delite = getBtn ("Удалить", "btn btn_min ",)
  delite.onclick = function () {
    list.remove()
  }
  list__item4.append(delite)

}