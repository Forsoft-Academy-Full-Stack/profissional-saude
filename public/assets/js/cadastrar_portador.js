tratar_campos = function () {
    let erro = false;
    let campos = ["name", "surname", "date-birth", "identity", "nationality", "codigopostal", "logradouro", "numerorua", "complemento", "bairro", "cidade", "estado", "telf", "email"];

    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value == '') {
            erro = true;
        }
    }
    return !erro;

}

$('.select2').select2();

let form = $("#form-meus-dados");
$("#cadastro").click(function () {

    if (tratar_campos()) {
        $.get("", form.serialize(), (data, status) => {
            if (status === 'success') {
                //$('#exampleModal').modal('hide');
                //$('#exampleModal2').modal('show');
                Swal.fire({
                    icon: 'success',
                    title: 'Cadastro realizado com sucesso!',
                    text: "Código CIVA: " + gerarCodigoCiva(),
                    confirmButtonText: 'Finalizar',
                    confirmButtonColor: '#007bff'
                }).then(() => {
                    $("#name").val("");
                    $("#surname").val("");
                    $("#date-birth").val("");
                    $("#identity").val("");

                    // Mudando a posição do select
                    $('#nationality').select2();
                    //seleciona o valor da posição desejada
                    let valor = $("#nationality option:eq(1)").val();
                    //seleciona no select2 e disapara o evento
                    $('#nationality').val(valor).trigger('change');


                    $("#codigopostal").val("");
                    $("#logradouro").val("");
                    $("#numerorua").val("");
                    $("#numerorua").val("");
                    $("#complemento").val("");
                    $("#bairro").val("");
                    $("#cidade").val("");
                    $("#estado").val("");
                    $("#telf").val("");
                    $("#email").val("");
                });

                console.log("Dados enviados com sucesso :) !");
                // Limpando os campos do modal de alteração e confirmação de senha após o envio
                //$('#exampleModal').find("#confirm-password").val("");
                //$('#exampleModal').find("#message-text").val("");
            } else {
                // Abrir Modal informando o erro
                // Por enquanto mostrar=ndo somente com o console.log()
                console.log("Ops... Algum erro ocorreu e seus dados não foram enviados :(");
                //$('#exampleModal').modal('hide');

                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: 'Ops... Algum erro ocorreu e seus dados não foram enviados :(!',
                    confirmButtonText: 'Finalizar'
                    //confirmButtonColor: '#007bff'
                });

                //$('#exampleModal').find("#confirm-password").val("");
                //$('#exampleModal').find("#message-text").val("");

            }
        });
    } else {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos os campos precisam ser preenchidos!',
            confirmButtonColor: '#007bff'
        })


    }
});

function gerarCodigoCiva() {
    return "BRASKSD32132121";
}








