'use strict';

alert('Правильный пароль - hidude');

let isAdmin = confirm('Hi, are you admin?');
let adminName = 'Чувачок';
let password = 'hidude';
let userPass;
let message;

if (isAdmin) {
    userPass = prompt('Ok, enter your password, please', 'admin');

    message = (userPass == password) ? `Great to see you again, ${adminName}!` :
        (userPass == 'admin' || userPass == '123456' || userPass == 'qwerty') ?
        'Are you kidding, man?' : 'Wrong password, try again';

    alert(message);

} else {
    alert('Welcome Guest!');
}
// Ещё примеры самостоятельной работы с условным ветвлением можно увидеть в других папках,
// в частности, в папке "Числа" пример с функцией sumNumbers.