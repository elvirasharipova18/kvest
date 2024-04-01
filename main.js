let start = document.getElementById("start");
let body = document.body;

let title;
let input;
let preTitle;
let img1;
let img2;

start.addEventListener('click', () => {

    //удалить элемент со страницы
    start.parentNode.removeChild(start);

    title = document.createElement("h1");
    input = document.createElement("input");

    title.textContent = "Введите Ваше имя";
    body.append(title);
    body.append(input);


    input.addEventListener('keyup', (event) => {

        //event - это объект в котором хранится информация о событии 
        if (event.code == "Enter" && input.value != "") {

            title.textContent = "Добро пожаловать, " + input.value;
            input.parentNode.removeChild(input);

            //запускаем уровень 1 через 3 секунды 

            setTimeout(() => {
                title.parentNode.removeChild(title);
                iLoveMath();
            }, 3000)

        }

    })

})



//параметры уровня
// вопрос, ответ, следующий уровень

function createTextLevel(question, answer, nextLevel) {
    title = document.createElement("h1");
    input = document.createElement("input");
    preTitle = document.createElement("p");

    title.textContent = question;

    body.append(title);
    body.append(input);
    body.append(preTitle);

    input.addEventListener("keyup", (event) => {
        if (event.code == "Enter") {
            if (input.value.toLowerCase() == answer) {
                preTitle.textContent = "Верно!";
                input.value = "";
                input.parentNode.removeChild(input);
                //запустить сл. уровень 
                setTimeout(() => {
                    title.parentNode.removeChild(title);

                    preTitle.parentNode.removeChild(preTitle);
                    if (nextLevel != null) {
                        nextLevel();
                    }
                }, 3000);
            } else {
                preTitle.textContent = "Неверно!";
                input.value = "";
            }
        }
    })
}

function createIMGLevel(link1, link2, question, nextLevel) {
    title = document.createElement("h1");
    preTitle = document.createElement("p");
    img1 = document.createElement("img");
    img2 = document.createElement("img");
    title.textContent = question;
    img1.src = link1;
    img2.src = link2;

    body.append(title);
    body.append(preTitle);
    body.append(img1);
    body.append(img2);


    img1.addEventListener('click', () => {
        preTitle.textContent = "Верно!";

        img1.parentNode.removeChild(img1);
        img2.parentNode.removeChild(img2);
        //запускаем сл. уровень!

        setTimeout(() => {

            title.parentNode.removeChild(title);
            preTitle.parentNode.removeChild(preTitle);

            if (nextLevel != null) {
                nextLevel();
            }
        }, 3000)

    })
    img2.addEventListener('click', () => {
        preTitle.textContent = "Неверно!";

    })

}


function iLoveMath() {
    createTextLevel("Сколько будет 2*8?", 16, iLoveGeography);
}


function iLoveGeography() {
    createTextLevel("Назовите столицу Бразилии", "бразилиа", iLoveBiology);

}


function iLoveBiology() {
    createTextLevel("Из какого дерева делают спички?", "осина", iLoveMount);
}






function iLoveMount() {
    createIMGLevel('./img/mount1.jpeg', './img/mount2.jpg', "Где изображена гора Эверест?", iLoveMath);
}