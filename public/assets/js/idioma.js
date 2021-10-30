
$('.select2').select2()


let form = $("#idioma");
$("#salvar-alteracao").click(function () {

    $.get("", form.serialize(), (data, status) => {
        if (status === 'success') {

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-start',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Idioma alterado'
            })

        } else {
            console.log("Ops... Algum erro ocorreu e seus dados não foram enviados :(");

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-start',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'error',
                title: 'Idioma não foi alterado'
            })
        }
    });
});

