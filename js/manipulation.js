$(document).ready(function() {
    // AS manipulaçoes que eu desejar devem estar dentro deste bloco
    $('#btn-1-5em').click(function(e){
        e.preventDefault(); //n define a função do html e sim a função de minha escolha
    $('p').removeClass('font-2-0');
    $('p').removeClass('font-2-5');
    $('p').addClass('font-1-5');
    });

    $('#btn-2-0em').click(function(e){
        e.preventDefault()
    $('p').removeClass('font-1-0');
    $('p').removeClass('font-2-5');
    $('p').addClass('font-2-0');
    });

    $('#btn-2-5em').click(function(e){
        e.preventDefault()
    $('p').removeClass('font-1-0');
    $('p').removeClass('font-2-0');
    $('p').addClass('font-2-5');
    });
});