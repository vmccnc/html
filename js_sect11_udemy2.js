var a, b;


// console.log('Hello 3');
 
// a = prompt('Enter A: ');
// b = prompt('Enter B: ');
 
// var c = a > b ? a : a == b ? a : b;

// alert('C = ' + c);


// ------- Or And   --------

    // if(a >= 18 && b >= 18) {
    //     alert('No');
    // } else if (a >= 18 && b < 18){
    //     alert('Yes');
    // }



    // if(a >= 18 || b >= 18) {
    //     alert('No');
    // } else if (a >= 18 || b < 18){
    //     alert('Yes');
    // }
 
// ------  Object   --------

    // var vasia = {
    //     name: 'Vasia',
    //     age: 25
    // }
 
    // alert('name = ' + vasia.name + ' age: ' + vasia.age );
    

    // ----- Array  ----


    // var fruits = ['apple', 'orange', 'banane'];

    // alert(fruits[1]);
    // alert(fruits[0]);



    // - - - -  while  - - - -
// var i = 0;
//     while( i <5 ){
//         alert('hello');
//         i++;
//     }


// - - - - - do while  - - - - - -
// var i =5;

//     do{
//         alert(i);
//         i++;
//     } while(i <= 10);
 



// - - - - - for   - - - - - -
// var fruits = ['apple', 'orange', 'banane'];

    // for(var i = 0 ; i < 10 ; i++){
    //    alert(i);
    // }

    
    // for(var i = 0 ; i < fruits.length ; i++){
    //     alert(fruits[i]);
    //  }




 //  -------- break  -----------

// var pass ='123';
// var passfromuser;

// while(true){
//     passfromuser = prompt('Enter password: ');
//     if(pass==passfromuser) break;
// }
// alert('You are good !! ');



 //  ---------   continue   -----------


//  out:for(var i = 0; i<10; i++){

//     if(i==5){
//         console.log('Continue is working!');
//         continue out;
//     } 

//     console.log(i);
//  }


// var i = 3;

// while(i){
//     console.log(i--);
     
// }

// console.log('You are good !! ');


// var i = 0;

// while(++i < 5){ // 1 2 3 4
//     console.log(i); 
// }
// console.log('--- i++ < 5 ---'); 
// i = 0;
// while(i++ < 5){ // 1 2 3 4 5 
//     console.log(i); 
// }


// for (var i = 0; i < 500; i++){
//   if(i%25!=0)  console.log(i); 
// }

// for (var i = 10; i > 2; i--){
//   console.log(i); 
// }


// var i = 10;

// while(i > 2){
//     console.log(i); 
//     i--;
// }

// var tt = prompt('Enter tt: ');

// switch(tt){
//     case 'orange':
//             console.log('rrr orange'); 
//         break;

//     case 'banane':
//         console.log('rrr 5'); 
//         break;

//     case 'apple':
//         console.log('rrr apple'); 
//         break;

//     default:
//         console.log('Default: I do not know this fruit!!!'); 
//         break;
// }

// var x = +prompt('Enter x: ');

// if(x==25) {
//     console.log('HH Ura 25 ');
// }else if(x == 35 || x==45 || x==55){
//     console.log('Ura 35 45 55');
// }else{
//     console.log('HZ');
// }


 var tt = +prompt('Enter tt: ');

switch(tt){
    case 1:
            console.log('rrr 1'); 
        break;

        case 2:
        console.log('rrr 2'); 
        break;

        case 2:
        case 3:
                console.log('2 . 3'); 
                break;

 
}
