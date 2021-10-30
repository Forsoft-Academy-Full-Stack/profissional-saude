tratar_campos = (campos) => {
    let erro = false;
  
    for (i = 0; i < campos.length; i++) {
        if (document.getElementById(campos[i]).value === '') {
            erro = true;
         
        }
    }
    return !erro;

}

function swalAlert(icon, title, text, confirmButtonText, confirmButtonCollor, callback){
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        confirmButtonText: confirmButtonText,
        confirmButtonColor: confirmButtonCollor
    }).then(callback);
}

function swalAlertSuccess(title, text, callback){
    Swal.fire({
        icon: 'success',
        title: title,
        text: text,
        confirmButtonText: 'Finalizar',
        confirmButtonColor: '#007bff'
    }).then(callback);
}

function swalAlertError(title, text, callback){
    Swal.fire({
        icon: 'error',
        title: title,
        text: text,
        confirmButtonText: 'Finalizar',
        confirmButtonColor: '#007bff'
    }).then(callback);
}









