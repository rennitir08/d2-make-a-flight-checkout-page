$(document).ready(function() {

    // $('#toggleRed').on('click', function(){
    //         $('h1').toggleClass('red');
    // })

    // $('h1').on('click', function() {
    //     $(this).remove();
    // })

    // $('#items').html('<img src="http://robohash.org/jquery" alt="Robots"/>')
    // $('#items').before('<hr/>')
    // $('#items').after('<div class="well">I\'m after.</div>')

    // $('#startDate').on('keyup', function(e) {
    //     $('h1').html(e.target.value);
    // })

    // $('body').on('mousemove', function(e) {
    //     $('body').append(`<div style="background: red; width: 30px; height: 30px; position: absolute; top: ${e.clientY}px; left: ${e.clientX}px;"></div>`)
    // })

// AJAX load=fetch
    $('#items').load('message.html');

 // utility function
 $.ajax ({
     url: 'https://thinksaydo.com/api.php',
     method: 'get',
     success: function(data) {
        // console.log(moment(data));
     }  
 })

 $('#showModalButton').on('click', function() {
     $('#modal').removeClass('hidden');

     $('.overlay-background').on('click', function() {
         $('#modal').addClass('hidden');
     })
 })
});