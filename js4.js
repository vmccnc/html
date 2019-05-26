 


// var c = summa(a, b);

// alert('C = ' + c);
 

//  function summa(a, b){
//     return a+b;
//  }

// var a1 = +prompt('Enter a: ');
// var b1 = +prompt('Enter b: ');
// var c1 = +prompt('Enter c: ');

// alert( discr (a1, b1, c1));

//  function discr(a, b, c){
//    return ( b*b - 4*a*c);
//  }

//  ----  2 -----

// var age = +prompt('Enter age: ');

// isPor(age);

// function isPor(age){
//     if(age >=18){
//         alert('PornoHub.com');
//     }else{
//         alert('Cartoon.com')
//     }
// }

// var a1 = +prompt('Enter a: ');
// var b1 = +prompt('Enter b: ');

// whatIsBiger(a1, b1);

// function whatIsBiger(a, b){
//     var c = a>b ? a : b;
//     alert(c);
// }


// var x = +prompt('Enter x: ');
// var z = +prompt('Enter z: ');

// stepen(x, z);

// function stepen(x, z){

//     var res = x;
 
//     for(var i = 1; i<z; i++){
//       res*=x;
//       console.log('x = ' + x);
//     }
//        alert(res);
// }
 

// var name =  prompt('Enter Name: ');
// alert(name.toUpperCase());

// alert( name.substring(0, 5) );
// alert( name.substring(5) ); // До конца строки
// alert( name.substr(3, 5) );

// alert('Slice : ' + name.slice(0, 4) );

// alert('[5] : ' + name[5] );

/// ----------------- ----------------------

// upperOneLetter(prompt('Enter City: '))

// function upperOneLetter(city){
//     alert(city[0].toUpperCase() + city.substring(1) )
// }



/// ----  ------   ------- toFixed ----   -------   -----------


// console.log(12.654645.toFixed(1));
// console.log(12.654645.toFixed(3));

/// ----  ------  parseInt and  parseFloat -------   ----    
var myInt = parseInt('1280px');
var myFloat = parseFloat('1280px');

console.log(myInt);
console.log(myFloat);


/// ----  ------  Math.ceil  Math.floor Math.round-------   ----   -------   -----------

console.log(Math.ceil(1.3));
console.log(Math.ceil(1.6)); // Округляет в большую сторону

console.log(Math.floor(1.6));

console.log(Math.round(1.6));
console.log(Math.round(1.3));

// -------------            --------------------

var arr = ['Apple', 'Orange', 'Mango', 'Kivi'];

arr.forEach(function(item, i, arr){
    console.log(i +' ' + item + ' massiv '+ arr );
});