tratar_campos = function () {
    let erro = false;
    let campos = ["laboratorio", "vacina", "numerodoses", "lote", "unidade"];

    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value == '') {
            erro = true;
        }

        if (erro) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos os campos precisam ser preenchidos!',
                confirmButtonColor: '#007bff'
            })

        }
    }
    return !erro;

}

$('.select2').select2();

let form = $("#form-painel-portador");
let valor;
$("#cadastro").click(function () {

    if (tratar_campos()) {
        $.get("", form.serialize(), (data, status) => {
            if (status === 'success') {
                //$('#exampleModal').modal('hide');
                //$('#exampleModal2').modal('show');
                Swal.fire({
                    icon: 'success',
                    title: 'Cadastro de vacinação realizado com sucesso!',
                    confirmButtonColor: '#007bff'
                }).then(() => {

                    $("#lote").val("");

                    // Mudando a posição do select
                    //seleciona o valor da posição desejada
                    valor = $("#laboratorio option:eq(1)").val();
                    //seleciona no select2 e disapara o evento
                    $('#laboratorio').val(valor).trigger('change');

                    valor = $("#vacina option:eq(1)").val();
                    //seleciona no select2 e disapara o evento
                    $('#vacina').val(valor).trigger('change');

                    valor = $("#numerodoses option:eq(1)").val();
                    //seleciona no select2 e disapara o evento
                    $('#numerodoses').val(valor).trigger('change');

                    valor = $("#unidade option:eq(1)").val();
                    //seleciona no select2 e disapara o evento
                    $('#unidade').val(valor).trigger('change');

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
    }
});