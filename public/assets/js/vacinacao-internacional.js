let campos = ["identity", "name", "surname", "date-birth", "possaporte", "pais"];
let form = $("#vacinacao-internacional");

$("#cadastro").click(function () {

    if (tratar_campos(campos)) {
        $.get("", form.serialize(), (data, status) => {
            if (status === 'success') {

                Swal.fire({
                    icon: 'success',
                    title: 'Cadastro realizado com sucesso!',
                    confirmButtonText: 'Finalizar',
                    confirmButtonColor: '#007bff'
                });

                console.log("Dados enviados com sucesso :) !");

            } else {
                // Abrir Modal informando o erro
                // Por enquanto mostrar=ndo somente com o console.log()
                console.log("Ops... Algum erro ocorreu e seus dados não foram enviados :(");

                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: 'Ops... Algum erro ocorreu e seus dados não foram enviados :(!',
                    confirmButtonText: 'Finalizar'

                });
            }
        });
    }
});
