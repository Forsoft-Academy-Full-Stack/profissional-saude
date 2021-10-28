tratar_campos = function () {
    let erro = false;
    let campos = ["name", "surname", "idvacinacao", "vacina", "laboratorio", "dose", "dataaplicacao", "pais", "idunidade", "unidade", "codigociva", "lote"];

    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value == '') {
            erro = true;
        }
    }
    return !erro;

}
//document.getElementById('form-meus-dados').onsubmit = tratar_campos;



