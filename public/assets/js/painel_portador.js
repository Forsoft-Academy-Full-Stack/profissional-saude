
let campos = ["nome", "sobrenome", "datanascimento", "documento", "nacionalidade", "codigociva", "codigopostal", "logradouro", "numerorua", "complemento", "bairro", "cidade", "estado", "contato", "email"];

$('.select2').select2()


// Pegando o elemento form da página
let form = $("#form-painel-portador");

$("#salvar").click(function () {

    if (tratar_campos(campos)) {
        $.get("", form.serialize(), (data, status) => {
            if (status === 'success') {
                Swal.fire({
                    icon: 'success',
                    title: 'Dados alterados com sucesso!',
                    text: "Alteração realizada.",
                    confirmButtonText: 'Finalizar',
                    confirmButtonColor: '#007bff'
                });

                console.log("Dados enviados com sucesso :) !");
            } else {
                // Abrir Modal informando o erro
                // Por enquanto mostrar=ndo somente com o console.log()
                console.log("Ops... Algum erro ocorreu e seus dados não foram enviados :(");
                $('#exampleModal').modal('hide');

                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: 'Ops... Algum erro ocorreu e seus dados não foram enviados :(!',
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

