$('.select2').select2();

let arrayCampos = ["laboratorio", "vacina", "dose", "lote", "unidade"];
let form = $("#form-cad-vacinacao");

$("#cadastrar").click(() => {

    if (tratar_campos(arrayCampos)) {
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
