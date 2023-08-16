var welcome = document.getElementById('bottom');
var container = document.getElementById('container');
var ups1 = document.querySelector('.up1');
var ups2 = document.querySelector('.up2');
var ups3 = document.querySelector('.up3');
var ups4 = document.querySelector('.up4');
var ups5 = document.querySelector('.up5');
var about = document.querySelector('.about');

setTimeout(function(){
welcome.style.display = 'none';
container.style.display = 'block';
}, 5000);

function up1(){
    var frame = document.getElementById('iframe');
    frame.src = '/src/main/public/index.html';
    ups1.classList.add('active');
    ups2.classList.remove('active');
    ups3.classList.remove('active');
    ups4.classList.remove('active');
    ups5.classList.remove('active');
    about.classList.remove('active');
}

function up2(){
    var frame = document.getElementById('iframe');
    frame.src = 'https://josh1094.github.io/chat/update-2.html';
    ups1.classList.remove('active');
    ups2.classList.add('active');
    ups3.classList.remove('active');
    ups4.classList.remove('active');
    ups5.classList.remove('active');
    about.classList.remove('active');
}

function up3(){
    var frame = document.getElementById('iframe');
    frame.src = 'https://josh1094.github.io/chat/update-3.html';
    ups1.classList.remove('active');
    ups2.classList.remove('active');
    ups3.classList.add('active');
    ups4.classList.remove('active');
    ups5.classList.remove('active');
    about.classList.remove('active');
}

function up4(){
    var frame = document.getElementById('iframe');
    frame.src = 'https://josh1094.github.io/chat/update-4.html';
    ups1.classList.remove('active');
    ups2.classList.remove('active');
    ups3.classList.remove('active');
    ups4.classList.add('active');
    ups5.classList.remove('active');
    about.classList.remove('active');
}

function up5(){
    var frame = document.getElementById('iframe');
    frame.src = 'https://josh1094.github.io/chat/update-5.html';
    ups1.classList.remove('active');
    ups2.classList.remove('active');
    ups3.classList.remove('active');
    ups4.classList.remove('active');
    ups5.classList.add('active');
    about.classList.remove('active');
}

function abouts(){
    var frame = document.getElementById('iframe');
    frame.src = 'https://josh1094.github.io/chat/about.html';
    ups1.classList.remove('active');
    ups2.classList.remove('active');
    ups3.classList.remove('active');
    ups4.classList.remove('active');
    ups5.classList.remove('active');
    about.classList.add('active');

}