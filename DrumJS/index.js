


for(var i =0; i<document.querySelectorAll('button').length; i++){
   document.querySelectorAll('button')[i].addEventListener('click', function() {
         alert('Button is clicked');   
 } ); 
}
    
 
//document.querySelector('button').addEventListener('click', handleclick );
//
//function handleclick(){
//    alert('I got clicked');
//}

document.querySelectorAll('.tt').onclick = function(){
    alert('tt is clicked!')
}