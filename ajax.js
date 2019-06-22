
 

$.ajax({
url:'http://httpbin.org/ip',
method: 'GET',
dataType: 'JSON',
contentType: 'JSON',
success: function(data){
    // console.log(data); // in console
    alert(data.origin); // in alert
$('.block').html("<h1>" +data.origin+"</h1>");
}
});


// does not work
$.ajax({
    url:'http://server.vmccnc.com/vmc/2_json',
    method: 'GET',
    success: function(data){
        // console.log(data); // in console
        // alert(data.origin); // in alert
    $('.block').html("<h1>" +data+"</h1>");
    }
    });
    


// var tt="rr";

// $.ajax({
//     url:'http://httpbin.org/post',
//     method: 'POST',
//     data: {a:2, b:3},
//    contentType: 'JSON',
//     success: function(data){
//         // console.log(data);
//         console.log(data.url);
//         tt = data.url;
//     }
//     });

//     alert("ttt " + tt);

    // http://server.vmccnc.com/vmc/2_json