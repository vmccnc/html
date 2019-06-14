
//alert('hello');
$('h1').css('color', 'red');
//$('h2').addClass('big-title margin50');
//$('h2').removeClass('big-title');
 
// document.querySelectorAll('button')

$('button').css('border', '1px solid red');
$('img').attr('src');
//$('img').attr('href', 'resources/img/diplomaNadia/mobileWithNadia1.png');
//$('a').attr('href', 'http://dmitrypro.beget.tech/homework3.html');

$('h1').click(function(){
    $('h1').css('color', 'green');
});
2
$('h2').click(function(){
    $('h2').css('color', 'yellow');
});

$('button').click(function(){
    $('h2').css('color', 'purple');
});

$('input').keypress(function(){
    console.log(event.key);
});

$(document).keypress(function(){
    $('h1').text(event.key);
});

$('h2').on('mouseover', function(){
    $('h2').css('color', 'yellow');
});

//$('h2').on('click', function(){
//    $('h2').css('color', 'yellow');
//});


//$('h1').before('<button>New Button</button>');


//$('button').remove();

$('h3').on('click', function(){
    $('h3').hide();
});



//$('.show3').on('click', function(){
//    $('h3').toggle();
//});


//$('.show3').on('click', function(){
//    $('h3').fadeToggle();
//});

$('.show3').on('click', function(){
    $('h3').slideToggle();
});

//$('h3').fadeIn();
//$('h3').fadeOut();
//$('h3').slideUp();
//$('h3').slidedown();

$('.show4').on('click', function(){
    $('h3').animate({opacity: .5});
});


$('.show5').on('click', function(){
    $('h3').slideDown().slideUp().animate({opacity: 1});
});

$('.new_react').on('click', function(){
    printInConsole('Hello console!');
    print2('Hello console 2!');
    
});
 

const printInConsole = (name) =>{
    console.log(name);
}


function print2(name){
    console.log(name); 
}

















