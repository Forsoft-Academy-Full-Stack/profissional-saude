tratar_campos = function () {
    let erro = false;
    let campos = ["laboratorio", "vacina", "dose", "lote", "unidade"];

    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value == '') {
            erro = true;
        }
    }
    return !erro;

}

$('.select2').select2();

let form = $("#form-cad-vacinacao");
$("#cadastrar").click(() => {

    if (tratar_campos()) {
        $.get("", form.serialize(), (data, status) => {
            if (status === 'success') {
                //$('#exampleModal').modal('hide');
                //$('#exampleModal2').modal('show');
                Swal.fire({
                    icon: 'success',
                    title: 'Vacinação internacional cadastrada com sucesso!',
                    confirmButtonText: 'Finalizar',
                    confirmButtonColor: '#007bff'
                })
                console.log("Dados enviados com sucesso :) !");

            } else {
                console.log("Ops... Algum erro ocorreu e seus dados não foram enviados :(");

                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: 'Ops... Algum erro ocorreu e seus dados não foram enviados :(!',
                    confirmButtonText: 'Finalizar',
                    confirmButtonColor: '#007bff'
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
