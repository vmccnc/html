var a = 5;
var b = 7;
b = 9;
a = b+5;
console.log(a);
// debugger;
b = 7 + 5;
console.log(b);


var human = {
    name: 'Vasia',
    age: 27,
}

console.log(human.name);
console.log(human['name'])

human['game'] = 'voleyboll';

// delete human.age

if('age' in human){
    console.log('Good very good!!');
}

console.log('Our object Human contane: ');
for(var key in human){
    console.log(key + ' = ' + human[key]);
}

// var human2 = human;
// console.log( human);
// console.log( human2);
// human.age = 400;
// console.log( human);
// console.log( human2);

var human3 = {};

for(var key in human){
    human3[key] = human[key];
}
human.age = 500;
console.log( human);
console.log( human3);

var dateMy = new Date(2018,8,25);
var date = new Date();
console.log(date);
console.log(dateMy);
dateMy.setMonth(3);
console.log(dateMy.getFullYear()  + ' '+ dateMy.getMonth() + ' '+ dateMy.getDate());

// console.log(dateMy.get

var date1 = new Date();
console.log( date1 );
 
const privet = () => {console.log('Hello !')}

for(var i = 0; i<5000; i++){
    privet();
}

var date2 = new Date();
console.log(date2 );

console.log(new Date() - date1 );



var seconds = document.querySelector('#seconds');

setInterval(function(){
var now = new Date();
seconds.innerHTML = now.getSeconds();
}, 1000);




//----------------------

var a = 7;

if(true){
    let a = 10;
    console.log(a);
}
console.log(a);


// -----------------

var privet = function(a, b){
    console.log('Hello !' + a);
};

const privet3 = (a, b=5) => {
    console.log( a + b );
};

privet3(5, 5);


const age = 25;
const string = `Vasia ${age} year old`;
console.log(string);

//++++++++++++++++++++++++++++++++++++
const arr = [1,2,3];

const privet = (x, y, z) => {
    console.log(x + y + z);
};

privet(...arr);

//++++++++++++++++++++++++++++++++++++

const arr = ['AAA','BB', 'CC'];

for(var key in arr){
    console.log(key);
}
console.log(arr);

for(var key of arr){
    console.log(key);
}


//++++++++++++++++++++++++++++++++++++

let map = new Map();
map.set('student', 'dmitry');
map.set('teacher', 'Vova');
map.get('teacher');


//++++++++++++++++++++++++++++++++++++

const set = new Set([1,2,1,5,4,4,4,8,7,5,3,3,3,12,54,8,4,5]);
console.log(set);

//--------------------------------------

const promise = new Promise(function(resolve, reject){
    resolve('All is Ok');
});
console.log(promise);


const promise = new Promise(function(resolve, reject){
  let string = confirm('Enter');
  if(string)  resolve('All is Ok');
});
promise.then(()=>{console.log('Hello');});
console.log(promise);
