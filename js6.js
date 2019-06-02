

// var dimer = setTimeout(function(name){
//     alert('h1' + name);
//     }, 2000, ' Vasia');
  
    
//     clearInterval(dimer);

// //  2
//     var inrerval=  setInterval(function(name){
//         alert('h1' + name);
//         }, 2000, ' Vasia');


// setTimeout(function(){
//     clearInterval(inrerval);
// }, 10000);

// 3.1

// for(var i = 0; i<10; i++){
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }

// var 3.2

// for(var i = 0; i<10; i++){
//     loopper(i);
// }

// function loopper(num){
//     setTimeout(function(num){
//         console.log(num);
//     }, 1000, num);
// }


// 4.



// function handller(){
//     alert('Hi');
//     console.log(event);
//     // return false; - doesn't work
//     event.preventDefault()
// }


// document.forms[1]
// document.forms.form2.elements.inpput33

// document.forms.form2.elements.inpput33.value = 'Hello22'


// var varselect = document.forms.form2.elements.myselect
// varselect.selectedIndex
// varselect.selectedIndex = 2;


// var option = new Option('val11', 'Text11', true, true);


var bigImg = document.querySelector('#big-img');

var thumbsArr = document.querySelectorAll('.thumbnails a');

for(var i = 0; i<thumbsArr.length; i++){
    thumbsArr[i].onclick =function(){
        event.preventDefault();
        bigImg.src = this.href;
        console.log('Hi');
    }
}