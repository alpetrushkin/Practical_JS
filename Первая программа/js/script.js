console.log('Hello!!!');
console.log('World!!!');
console.log('1234');
console.log(1234);
console.log('Hello' + 'world'); //конкатенация
console.log('Hello' + ' world'); //конкатенация
console.log('Hello ' + 'world'); //конкатенация
console.log('Hello' + ' ' + 'world'); //конкатенация
console.info('Hello');
// alert('Hello');

document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = 2022;
document.getElementById('out').innerHTML = '<b>2020</b>';

document.querySelector('.header').innerHTML = 5;
document.querySelector('#one').innerHTML = 777;
document.getElementById('one').innerHTML = 888;

let a = document.querySelector('#one'); // внутрь а получил параграф
let c;
c = document.querySelector('.header');

a.innerHTML = 99999;
c.innerHTML = 4444;