
let campos = ["nome", "sobrenome", "datanascimento",
              "documento", "nacionalidade", "codigociva", 
              "codigopostal", "logradouro", "numerorua", 
              "complemento", "bairro", "cidade", "estado",
              "contato", "email"];

$('.select2').select2()

// Pegando o elemento form da página
let form = $("#form-painel-portador");

$("#salvar").click(function () {

    if (tratar_campos(campos)) {

        $.get("", form.serialize(), (data, status) => {
            if (status === 'success') {
                title = 'Dados alterados com sucesso!';
                text = "Alteração realizada.";
                swalAlertSuccess(title, text, callback);

            } else {
                $('#exampleModal').modal('hide');

                title = 'Erro!';
                text = 'Algum erro ocorreu e seus dados não foram enviados.';
                swalAlertError(title, text, callback);
            }
        });
    } else {
        title = 'Campos não preenchidos!';
        text = 'Todos os campos precisam ser preenchidos!';
        swalAlertError(title, text, callback);
    }
});


pegarPaises('nacionalidade');
