let nombre
do {
    nombre=prompt ("Ingrese su nombre / usuario")
    if(nombre ===""){
        alert("Es necesario ingresar un nombre")
    }
} while (nombre === "");
alert("Bienvenid@" + nombre)

let Condicionfiscal
do{
    Condicionfiscal =prompt(Consumidor final o mayorista)toLocaleLowerCase();
    if(condicionfiscal !=="Consumidor final" && condicionfiscal !=="Mayorista")
}

function listadeproductos() {
let opcion;
    do{
         opcion = parseInt(prompt("Menu:\n" + "1. CFoMayorista\n" + "2. EnviarLista\n" + "3.Gracias\n"))

        switch (opcion) {
             case 1:
                  alert(Queres la lista de precios CF o Mayorista);
                break;
            case 2: 
                  let correo = prompt ("Ingrese su correo electronico")  ;
                     if(correo ==="") { 
                alert("Campo obligatorio");
            } 
                 else{ 
                     enviarcorreo(corro, listadeproductos)
            }
                 break;

            case 3: 
                alert("Gracias por tu interes en nuestro productos");
                 break;
                default:
                  alert("Opcion no valida")


          }
    }while (opcion !== 3);

}
)
