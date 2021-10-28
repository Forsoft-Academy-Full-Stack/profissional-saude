tratar_campos = function () {
    let erro = false;
    let campos = ["nome", "sobrenome", "datanascimento", "documento", "nacionalidade", "codigociva", "codigopostal", "logradouro", "numerorua", "complemento", "bairro", "cidade", "estado", "contato", "email"];

    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value == '') {
            erro = true;
        }
    }
    return !erro;

}

tratarSenha = function () {
    let erro = false;
    let campos = ["message-text", "confirm-password"];

    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value == '') {
            erro = true;
        }
    }
    return !erro;

}


