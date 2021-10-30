let campos = ["name", "surname", "date-birth", "identity", "idvacinacao", "vacina", "laboratorio", "dose", "dataaplicacao", "pais", "idunidade", "unidade", "codigociva", "lote"];
let form = $("#form-painel-vacinacao");

$('.select2').select2()

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

                console.log("Ops... Algum erro ocorreu e seus dados não foram enviados :(");

                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: 'Ops... Algum erro ocorreu e seus dados não foram enviados :(!',
                    confirmButtonText: 'Finalizar'
                });
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

