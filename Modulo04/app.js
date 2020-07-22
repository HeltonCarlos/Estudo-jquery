$(window).scroll(function(){
    var topo =$(window).scrollTop();

    if(topo>400){
        $('#01').fadeOut('1000');
        $('#02').fadeIn('1000');
    }
})