$(function(){
    var $button = $('.CDG')
    setTimeout(function(){
        $button.fadeIn(3000)
    },10000)

    setTimeout(function(){
        $('.NYA').fadeOut(1000)
    },9000)
    $button.click(function(){
        location.reload();
    })
})