/**
 * @author Cristian Camilo Beltrán Sarta
 * @since  27/06/2020
 * Solución de evalución sobre JavaScript
 */

/**
 * Solución punto 1
 * @param {any} tipoMotor 
 */
function TipoMotor(tipoMotor){

    switch(tipoMotor){
        case 0:
            alert("No hay establecido un valor definido para el tipo de bomba");
            break;
        case 1:
            alert("La bomba es una bomba de agua");
            break;
        case 2:
            alert("La bomba es una bomba de gasolina");
            break;
        case 3:
            alert("La bomba es una bomba de hormigón");
            break;
        case 4:
            alert("La bomba es una bomba de pasta alimenticia");
            break;
        default:
            alert("No existe un valor válido para tipo de bomba");
    }

}

/**
 * Solución Punto 2
 * @param {any} valorSinImpuesto 
 * @param {any} tipoProducto 
 */
function ObtenerImporteConImpuestos(valorSinImpuesto, tipoProducto){
    var impuesto = 0;
    var valorConImpuesto = 0;

    switch(tipoProducto){
        case 1:
            impuesto = valorSinImpuesto * 0.21;
            valorConImpuesto = valorSinImpuesto + impuesto;
            alert(`Para un valor sin impuestos de ${valorSinImpuesto} y tipo de producto ${tipoProducto} el resultado de importe con impuestos es:${valorConImpuesto}.`);
            break;
        case 2:
            impuesto = valorSinImpuesto * 0.10;
            valorConImpuesto = valorSinImpuesto + impuesto;
            alert(`Para un valor sin impuestos de ${valorSinImpuesto} y tipo de producto ${tipoProducto} el resultado de importe con impuestos es:${valorConImpuesto}.`);
            break;
        case 3:
            impuesto = valorSinImpuesto * 0.05;
            valorConImpuesto = valorSinImpuesto + impuesto;
            alert(`Para un valor sin impuestos de ${valorSinImpuesto} y tipo de producto ${tipoProducto} el resultado de importe con impuestos es:${valorConImpuesto}.`);
            break;
    }

}