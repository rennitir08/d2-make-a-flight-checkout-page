$(document).ready(function() {
     $('#showModalButton').on('click', function() {
     $('#modal').removeClass('hidden');

     $('.overlay-background').on('click', function() {
         $('#modal').addClass('hidden');
     })
 })
});