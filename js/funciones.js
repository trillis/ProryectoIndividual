//alert ("Bienvenido!");

//Declaración de variable.
//Declaración de variable.
let btnCambioColor = document.getElementById('btnazul');

function cambioColor()
{
    var caracteres="0123456789ABCDEF";
    var color="#";
    
    for (var i=0; i<6 ; i++)
    {
        color=color + caracteres[Math.floor(Math.random( )* 16)];
    }

    document.body.style.background=color;
}

//Función para probar datatable.
$(document).ready( function () {
    $('#myTable').DataTable();
} );