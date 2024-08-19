$(document).ready(function(){
    $('main').addClass('d-flex flex-column justify-content-center align-items-center min-vh-100')
    $('#treat').text("Hello World");
    $('.light').click(function(){
        $('body').css('background-color', 'WHITE');
        $('body').css('color', 'black')
    }).text('Light').addClass('btn btn-light');   
    $('.dark').click(function(){
        $('body').css('background-color', 'Black')
        $('body').css('color', 'White')
    }).text('Dark').addClass('btn btn-dark');;
    $("#alert-btn").click(function(){
        $('#alert').html("<div class='alert alert-danger' role='alert'>Code Red!</div>")
    }).text('Alert').addClass('m-1 btn btn-danger')

})