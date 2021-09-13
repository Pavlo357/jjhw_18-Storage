// Взяв за основу файлы , вам нужно сделать:

// 1. Собрать данные с формы при ее сабмите
// 2. Сохранить эти данные в качестве объекта внутри localStorage (не забываем о преобразовании в json)
// 3. Создать второй html файл, в котором списком (ul > li) вывести вывести все те данные, которые пользователь ввел в форму ранее
// 4. Если данных нет, то показать соответствующее сообщение

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let userFormData = form.elements;
    let userAccount = {};
    for (let i of userFormData) {
        userAccount[i.name] = i.value
    }
    localStorage.setItem('userAccount', JSON.stringify(userAccount))
    window.open("acData.html");
})