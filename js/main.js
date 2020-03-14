// DOM Elements
const time = document.querySelector('#time'),
    greeting = document.querySelector('#greeting'),
    name = document.querySelector('#name'),
    focus = document.querySelector('#focus');

// Options
const showAmPm = true;

// Show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        seconds = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12;

    // Output the time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(seconds)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if(hour < 12) {
        // morning
        document.body.style.backgroundImage = 'url(../img/morning.jpg)';
        greeting.textContent = 'Good Morning';
    } else if(hour < 18) {
        // afternoon
        document.body.style.backgroundImage = 'url(../img/afternoon.jpg)';
        greeting.textContent = 'Good Afternoon';
    } else {
        // evening
        document.body.style.backgroundImage = 'url(../img/night.jpg)';
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

// Get Name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[...Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if(e.type === 'keypress') {
        // make sure Enter is pressed
        if(e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerHTML);
            name.blur();
        }
    } else {
        // blur
        localStorage.setItem('name', e.target.innerHTML)
    }
}

// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        // make sure Enter is pressed
        if(e.which === 13 || e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerHTML);
            focus.blur();
        }
    } else {
        // blur
        localStorage.setItem('focus', e.target.innerHTML)
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[...Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();