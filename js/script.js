$(function(){
    var $button = $('.SDK')
    setTimeout(function(){
        $button.fadeIn(3000)
    },1000)

    setTimeout(function(){
        $('.NYA').fadeOut(1000)
    },9000)
    $button.click(function(){
        location.reload();
    })
})

$(function(){
 
    //.accordion1の中のp要素がクリックされたら
	$('.accordion1 p').click(function(){
 
		//クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
		$(this).next('ul').slideToggle();
 
	});
});