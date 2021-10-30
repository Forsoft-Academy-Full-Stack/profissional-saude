tratar_campos = (campos) => {
    let erro = false;
  
    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value === '') {
            erro = true;
         
        }
    }
    return !erro;

}
