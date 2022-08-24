$(document).ready(function() {

    //comando para ele começar escondido (hide)
    $('p').hide();

    //comando padrao
    $('#read').click(function(e) {
        e.preventDefault();

        //toogle e numero é o numeor de ms que ira acontecer a ação
        $('p').toggle(1500, function() {
            //criar um variavel para receber o status
            let status = $('#read').attr('data-status')

            //limpando o label do btn
            $('#read').empty()

            //testando o status
            if (status == 1) {
                $('#read').append('Esconder resumo')
                $('#read').attr('data-status', '2')
            } else {
                $('#read').append('Ver resumo', )
                $('#read').attr('data-status', '1')
            }


        });
    })
})