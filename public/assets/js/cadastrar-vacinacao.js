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
//document.getElementById('form-meus-dados').onsubmit = tratar_campos;



