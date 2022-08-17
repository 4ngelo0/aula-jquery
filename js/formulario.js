$ (document).ready(function() {
$('.btn').click(function(e){
    e.preventDefault();
    // alert('Seu botao foi clicado')

    var nome = $('#nome').val()
    var idade = $('#idade').val()
    var mensagem = 'Seja bem vindo '+nome+', sua idade é '+idade 

    // alert(mensagem)

    $('#mensagem').append(mensagem)
    $('#nome').val('')
    $('#idade').val('')

    $('#nome').focusin(function(){
        $('#mensagem').empty()
    })
    })
})