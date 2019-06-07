



for(var i =0; i<document.querySelectorAll('button').length; i++){
   document.querySelectorAll('button')[i].addEventListener('click', function() {
         console.log('Button is clicked ' + this.innerHTML );
 
         makesound(this.innerHTML);
       
//       switch(this.innerHTML){
//           case 'w':
//               var audio = new Audio('sounds/tom-1.mp3');
//               audio.play();
//               this.style.color = 'green'
//               break; 
//               
//           case 'a':
//               var audio = new Audio('sounds/tom-2.mp3');
//               audio.play();
//               this.style.color = 'green'
//               break;
//               
//           case 's':
//               var audio = new Audio('sounds/tom-3.mp3');
//               audio.play();
//               this.style.color = 'green'
//               break;    
//               
//           case 'd':
//               var audio = new Audio('sounds/tom-4.mp3');
//               audio.play();
//               this.style.color = 'green'
//               break;   
//               
//           case 'j':
//               var audio = new Audio('sounds/snare.mp3');
//               audio.play();
//               this.style.color = 'green'
//               break;
//           case 'k':
//               var audio = new Audio('sounds/crash.mp3');
//               audio.play();
//               this.style.color = 'green'
//               break;           
//           case 'l':
//               var audio = new Audio('sounds/kick-bass.mp3');
//               audio.play();
//               this.style.color = 'green'
//               break;
//            
//           default:
//               console.log(buttonInerHTML);
//               
//       }
       
       
       
       
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



document.addEventListener('keypress', function(event) {
//        alert('something is presed! ' + event);
        console.log('Event: ' + event.key);
    
    makesound(event.key);
        
    
    }
 );



function makesound(key){
      switch(key){
           case 'w':
               var audio = new Audio('sounds/tom-1.mp3');
               audio.play(); 
               break; 
               
           case 'a':
               var audio = new Audio('sounds/tom-2.mp3');
               audio.play();
               break;
               
           case 's':
               var audio = new Audio('sounds/tom-3.mp3');
               audio.play();
               break;    
               
           case 'd':
               var audio = new Audio('sounds/tom-4.mp3');
               audio.play();
               break;   
               
           case 'j':
               var audio = new Audio('sounds/snare.mp3');
               audio.play();
               break;
           case 'k':
               var audio = new Audio('sounds/crash.mp3');
               audio.play();
               break;           
           case 'l':
               var audio = new Audio('sounds/kick-bass.mp3');
               audio.play();
               break;
          }
}


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