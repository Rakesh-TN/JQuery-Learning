$(document).ready(function(){
    $('#treat').text("Hello World")
    $('.light').click(function(){
        $('body').css('background-color', 'WHITE');
        $('body').css('color', 'black')
    }).text('Light');   
    $('.dark').click(function(){
        $('body').css('background-color', 'Black')
        $('body').css('color', 'White')
    }).text('Dark');
    
})