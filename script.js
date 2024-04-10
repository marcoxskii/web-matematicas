document.addEventListener('DOMContentLoaded', function() {
    const pantalla = document.querySelector('.pantalla');
    const botones = document.querySelectorAll('.botones button');

    let operacionActual = '';
    let operadorSeleccionado = '';
    let operandoAnterior = '';

    botones.forEach(boton => {
        boton.addEventListener('click', function() {
            const valorBoton = boton.textContent;

            if (!isNaN(valorBoton) || valorBoton === '.') {
                // Si es un número o el punto decimal, añadirlo a la operación actual
                operacionActual += valorBoton;
                pantalla.textContent = operacionActual;
            } else if (valorBoton === '=') {
                // Si es el botón de igual, calcular el resultado y mostrarlo en pantalla
                calcularResultado();
            } else if (valorBoton === '+/-') {
                // Si es el botón de (+/-), cambiar el signo del número actual
                operacionActual = (-parseFloat(operacionActual)).toString();
                pantalla.textContent = operacionActual;
            } else if (valorBoton === '%') {
                // Si es el botón de porcentaje (%), calcular el porcentaje del número actual
                operacionActual = (parseFloat(operacionActual) / 100).toString();
                pantalla.textContent = operacionActual;
            } else if (valorBoton === 'AC') {
                // Si es el botón de AC, borrar el contenido de la pantalla
                operacionActual = '';
                pantalla.textContent = '0';
            } else {
                // Si es un operador, realizar la operación anterior (si existe) y almacenar el nuevo operador
                if (operadorSeleccionado !== '') {
                    calcularResultado();
                }
                operadorSeleccionado = valorBoton;
                operandoAnterior = operacionActual;
                operacionActual = '';
            }
        });
    });

    function calcularResultado() {
        let resultado;
        const numero1 = parseFloat(operandoAnterior);
        const numero2 = parseFloat(operacionActual);

        switch (operadorSeleccionado) {
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
            case '/':
                resultado = numero1 / numero2;
                break;
            default:
                return;
        }

        // Mostrar el resultado en pantalla
        pantalla.textContent = resultado;
        
        // Restablecer valores para la siguiente operación
        operacionActual = resultado.toString();
        operadorSeleccionado = '';
        operandoAnterior = '';
    }
});
