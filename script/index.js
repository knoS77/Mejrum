// burger menu
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');

// делегирование событий 
let head = document.querySelector('.head__container');
head.addEventListener('click', burgerMenu);

function burgerMenu(event){
    if (event.target.closest('.burger')){
        burger.classList.toggle('active');
        nav.classList.toggle('open');
    };
    if (!event.target.closest('.active')){
        burger.classList.remove('active');
        nav.classList.remove('open');
    };
};






// Формы section__form (инпуты)
let forms = document.forms.nameForm;
let inputOne = document.querySelector('.name');
let limitInputOne = inputOne.getAttribute('maxlength');
inputOne.addEventListener('input', function(){
    if (inputOne.value > limitInputOne){
        inputOne.value = inputOne.value.substring(0, limitInputOne)
    };
});
let inputTwo = document.querySelector('.inputTel');
let limitInputTwo = inputTwo.getAttribute('maxlength');
inputTwo.addEventListener('input', function(){
    if (inputTwo.value.length > limitInputTwo){
        inputTwo.value = inputTwo.value.substring(0, limitInputTwo)
    };
});


// textArea Осталось символов (Счётчик)
let textArea = document.querySelector('.form__textArea');
let limitSymbol = textArea.getAttribute('maxlength');
let textAreaSpan = document.querySelector('.text__area-limit span');

textAreaSpan.innerHTML = limitSymbol;

textArea.addEventListener('input', calkSymbol);
function calkSymbol(){
    let value = limitSymbol - textArea.value.length;
    textAreaSpan.innerHTML = value;
};





// Работа с input (placeholder) and textArea (value)
// Имя
inputOne.addEventListener('focus', function(){
    inputOne.placeholder = '';
});
inputOne.addEventListener('blur', function(){
    inputOne.placeholder = 'Имя';
});

// Телефон
inputTwo.addEventListener('focus', function(){
    inputTwo.placeholder = '';
});
inputTwo.addEventListener('blur', function(){
    inputTwo.placeholder = 'Телефон';
});

// TextArea
textArea.addEventListener('focus', function(){
    textArea.placeholder = '';
});
textArea.addEventListener('blur', function(){
    textArea.placeholder = 'Комментарий';
});






const button = document.getElementById('button');
console.log(button);

button.addEventListener('click', function(event) {
    if (event.target) {
        button.classList.toggle('actButton');
        console.log(`click`);
    }
})





