 
//document.querySelector("h1").innerHTML = "Good bye!";

 

//just_test();
//just_test2(22);
//just_test2();
// alert(test3(15));
// alert(test4( prompt('Enter number: ')));


//var guestList = ['Dmitry', 'Andrey', 'Nadia', 'Vika'];
//
//var name = prompt('Enter a name:');  
//
//if(guestList.includes(name)){
//    alert('Yes, you are invited!')
//}else{
//    alert('No, you are not in guest list.')
//}


document.getElementsByTagName("li")[2].classList.add('colorRedAndFontSize20px');
document.getElementsByClassName("btn");
document.getElementById("idgoogle");
document.querySelector("ul a");
//--------  Lesson 123  ---------
//
//var el = document.firstElementChild.lastElementChild.firstElementChild.firstElementChild
//el.style.color = 'red';
//el.innerText = 'Hello , I chnaged word HELLO!';
//el.style.color = 'red';



//--------  Lesson 124  ---------
//1)
//document.querySelector("h1").innerHTML = '<em>Start</em>'

//2)
// document.querySelector("h1").textContent = '<em>Start</em>'

// --------  Lesson 125  ---------
//1)
//document.querySelector('a').attributes;

//2)
//document.querySelector('a').getAttribute('href');
//document.querySelector('a').setAttribute('href', 'http://dmitrypro.beget.tech/diplomaN.html');


 




function just_test(){
    a  = prompt('Enter any word: ');

    alert(a.length);
    console.log(a.length);
    a = a.slice(0, 10);

    alert('Only 10 characters: ' + a);
    a = a.toUpperCase();
    b = a.toLocaleLowerCase();
    alert('a.toUpperCase: ' + a + ' lower : ' + b);  
}


function just_test2(){
    var a  = prompt('Enter any word: ');
    alert(a);
}

function just_test2(nomber){
    var a  = prompt('Enter any word: ');
    
    alert(a + ' ' + nomber);
}

function test3(nomber){
   return 5 % 1.5 ;
}

function test4(nomber){
    var gg = Math.pow(nomber,1.5);
     console.log(gg);
     console.log( Math.round(gg) );
   return Math.pow(nomber,1.5) ;
//   simular as nomber^2
}







