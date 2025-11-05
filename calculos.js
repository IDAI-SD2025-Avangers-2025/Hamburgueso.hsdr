var formulario = document.getElementById("calcularPrecio");

function calcular() {


    var cantidad = document.getElementById("cantidad").value;
    //alert("Variable Formulario:" + formulario + "Variable cantidad:" + cantidad);
 
         //var tamañoChico = document.getElementById("chico").value;
    //alert(tamañoChico);

        //var tamañoMediano = document.getElementById("mediano").value;
    //alert(tamañoMediano);

        //var tamañoGrande = document.getElementById("grande").value;
    //alert(tamañoGrande);

        var tamaño = formulario.tam.value
        alert(tamaño);
    
        var pan = formulario.pan.value
        alert(pan);

        var combo = formulario.combo.value
        alert(combo);



    var total = 0;

    if(tamaño == "chico"){
        total = 100;}

    if(tamaño == "mediano"){
        total = 150;}

    if(tamaño == "grande"){
        total = 200;}


    if(formulario.combo.value == "si") {
        total = total + 75;     }  
                                
    if(formulario.combo.value == "no") {
        total = total ;     }


    formulario.total.value = total * cantidad;


}