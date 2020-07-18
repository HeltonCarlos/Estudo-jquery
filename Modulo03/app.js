
$('#01').click(function() {
    $(this).attr("src", "01.jpg"); 
    $('.resposta').css('display','block')
    $('#text').text('Agora o mostro é seu macho')
})

$('#02').click(function() {
    $(this).attr("src", "02.jpg"); 
    $('.resposta').css('display','block')
    $('#text').text('Agora você tera essa bela esposa')
})

$('#03').click(function() {
    $('.resposta').css('display','block')
    $(this).attr("src", "03.jpg"); 
    $('#text').text('ih, rapaz')
})