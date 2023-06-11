let tempEnero=[25,26,24,25,29,30,20];
let diasCalidos=[];
var cont=0;
var sum=0;


let longitud=tempEnero.length


for (x=0; x<longitud;x++){
    sum+=tempEnero[x];
    cont+=1;
    if (cont==1){
        console.log("Primer elemento del arreglo: "+tempEnero[x])
    } else if (cont==longitud){
        console.log("Ultimo elemento del arreglo: "+tempEnero[x])
    }
}


console.log("Longitud del arreglo: "+longitud);


let promedioTemp= sum/cont




for (i=0; i<longitud;i++){
    if (tempEnero[i]>promedioTemp){
        diasCalidos.push(tempEnero[i]);
    }
}


console.log("Temperaturas mayores al promedio: "+ diasCalidos);


tempEnero.push(promedioTemp);
diasCalidos.unshift(promedioTemp);


console.log("Array de tempEnero: "+tempEnero);
console.log("Array de diasCalidos "+diasCalidos);
