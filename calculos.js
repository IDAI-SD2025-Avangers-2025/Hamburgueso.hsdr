var formulario = document.getElementById("calcularPrecio").value;
function calcular() {

    var cantidad = document.getElementById("cantidad").value
    alert("Variable formulario:" + formulario + "Variable Cantidad:" + cantidad);
    
   // var tamChico = document.getElementById("chico").value;
    //alert(tamChico);

    //var tamMediano = document.getElementById("mediano").value;
    //alert(tamMediano);

    //var tamGrande = document.getElementById("grande").value;
    //alert(tamGrande);

    var tamaño = formulario.tam.value;

    alert(tamaño);

    var total = 0;

    if(tamaño == "chico")
    {
        total = 100;
    }
    else if (tamaño == "mediano")
    {
        total = 150;
    }
    else if (tamaño == "grande"){
        total = 200;
    }

    formulario.total.value = total * cantidad;

    
}