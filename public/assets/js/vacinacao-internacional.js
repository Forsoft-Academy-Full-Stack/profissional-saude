tratar_campos = function () {
    let erro = false;
    let campos = ["identity", "name", "surname", "date-birth", "possaporte", "pais"];

    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value == '') {
            erro = true;
        }
    }
    return !erro;

}