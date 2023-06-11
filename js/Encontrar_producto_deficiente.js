var diasFaena = parseInt(prompt("Ingrese la cantidad de dias"));
var nroLote = parseInt(prompt("Ingrese el numero de lote"));
var codInsumo = parseInt(prompt("Ingrese el codigo de insumo"));

if (diasFaena>30){
    if (nroLote>=300){
        if (codInsumo<300){
            document.write("Alimento 1");
        }else{
            document.write("VACUNA 1");
        }
    }else{
        document.write("Insumo importado");
    }
}else{
    if (codInsumo<300){
        document.write("Alimento 2");
    }else{
        document.write("VACUNA 2");
    }
}