
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