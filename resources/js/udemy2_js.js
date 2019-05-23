var a, b;

console.log('Hello 3');

//just_test();
//just_test2(22);
//just_test2();
 alert(test3(15));




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