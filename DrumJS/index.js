



for(var i =0; i<document.querySelectorAll('button').length; i++){
   document.querySelectorAll('button')[i].addEventListener('click', function() {
         console.log('Button is clicked ' + this.innerHTML );
       
       
       
       if(this.innerHTML=='l'){
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
       }else if(this.innerHTML=='k'){
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
       }else if(this.innerHTML=='j'){
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
       }else {
           var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
       }
       
 } ); 
}
    
 
//document.querySelector('button').addEventListener('click', handleclick );
//
//function handleclick(){
//    alert('I got clicked');
//}

//document.querySelectorAll('.tt').onclick = function(){
//    alert('tt is clicked!')
//}








function add(a, b){
    return a+b;
}

function mult(a, b){
    return a*b;
}

function substruct(a, b){
    return a-b;
}
function dev(a, b){
    return a/b;
}

function calculator(a, b, operator){
    return operator(a, b);
}


//debugger;
//calculator(5, 2, mult);