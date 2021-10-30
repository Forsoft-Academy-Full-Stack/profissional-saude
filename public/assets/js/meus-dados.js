let campos = ["nome", "sobrenome", "datanascimento", "documento",
    "nacionalidade", "codigociva", "codigopostal", "logradouro",
    "numerorua", "complemento", "bairro", "cidade", "estado", "contato", "email"];

let modalConfirmacao = ["message-text", "confirm-password"];
let form = $("#form-meus-dados");

$('.select2').select2()

$("#salvar").click(function () {
    if (tratar_campos(campos)) {
        $('#exampleModal').modal('show');
        
        $("#avancar").click(function () {
            let tratarSenha = tratar_campos(modalConfirmacao);
            if (tratarSenha) {
                $.get("", form.serialize(), (data, status) => {
                    if (status === 'success') {
                        $('#exampleModal').modal('hide');
                     
                        Swal.fire({
                            icon: 'success',
                            title: 'Solicitação enviada com sucesso!',
                            text: 'Envio realizado',
                            confirmButtonText: 'Finalizar',
                            confirmButtonColor: '#007bff'
                        });

                        console.log("Dados enviados com sucesso :) !");
                        // Limpando os campos do modal de alteração e confirmação de senha após o envio
                        $('#exampleModal').find("#confirm-password").val("");
                        $('#exampleModal').find("#message-text").val("");
                    } else {
                        // Abrir Modal informando o erro
                        // Por enquanto mostrar=ndo somente com o console.log()
                        console.log("Ops... Algum erro ocorreu e seus dados não foram enviados :(");
                        $('#exampleModal').modal('hide');

                        Swal.fire({
                            icon: 'error',
                            title: 'Ops.. Algum erro ocorreu \n seus dados não foram enviados :(!',
                            text: 'Tente novamente.',
                            confirmButtonText: 'Finalizar'
                       
                        });

                        $('#exampleModal').find("#confirm-password").val("");
                        $('#exampleModal').find("#message-text").val("");
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

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos os campos precisam ser preenchidos!',
            confirmButtonColor: '#007bff'
        }).then(() => {
            $('#exampleModal').modal('hide');
        });
    }
});
