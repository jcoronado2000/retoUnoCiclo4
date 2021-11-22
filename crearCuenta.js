/**
 * EndPoint
 */

const endPointUser = "http://localhost:8080/api/user";


function registrarData(){
    
    $.ajax({
        method: "POST",
        url: endPointUser + "/new",
        data: jsonUser(),
        dataType: "json",
        contentType: "application/json",
        complete: function (response) {
            if (response.status == 201) {
                swal("Good job!", "Registro hecho con exito", "success")
                .then((value)=>{
                    window.location.reload();
                });
            } else {
                swal("Error", "Error al insertar datos " + response.status, "warning");
            }
        }
    })

}
function jsonUser(){

    userData = {
        email: $("#exampleInputEmail").val(),
        name : $("#exampleInputNombre").val(),
        password : contrasena = $("#exampleInputPassword").val()
    }

    return JSON.stringify(userData);
}

function validarDatos(){

    let name = $("#exampleInputNombre").val();
    let email = $("#exampleInputEmail").val();
    let contrasena = $("#exampleInputPassword").val();
    let contrasenaUno = $("#exampleInputPassword1").val();

    if(name =="" || email == "" || contrasena == "" || contrasenaUno == ""){
        swal("info", "Hay campos vacios", "warning");
    }else if(contrasena != contrasenaUno){
        swal("info", "Contraseñas diferentes", "warning");
    }else if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
        swal("info", "Email invalido", "warning");
    }else{
        registrarData();
    }

    
}