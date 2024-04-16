document.addEventListener('DOMContentLoaded', function() {
    const pantalla = document.querySelector('.pantalla');
    const botones = document.querySelectorAll('.botones button');

    let operacionActual = '';
    let operadorSeleccionado = '';
    let operandoAnterior = '';

    let history = [];

    var ul = document.querySelector('.History');

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
        let numero1 = parseFloat(operandoAnterior);
        let numero2 = parseFloat(operacionActual);
        if(Number.isNaN(numero1)) numero1 = 0;
        if(Number.isNaN(numero2)) numero2 = 0;
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
        
        //Guardar en historial
        history.push(numero1 + operadorSeleccionado + numero2 + '=' + resultado);

        var li = document.createElement('li');
        li.textContent = history[history.length-1];
        li.className = 'fade-in'; // Add the class
        ul.appendChild(li);

        setTimeout(function() {
            li.className += ' show'; // Add the 'show' class after a short delay
        }, 5);

        ul.scrollTop = ul.scrollHeight; 

        // Restablecer valores para la siguiente operación
        operacionActual = resultado.toString();
        operadorSeleccionado = '';
        operandoAnterior = '';

    }
});

document.addEventListener('DOMContentLoaded', function() {
    const enlaceNosotros = document.querySelector('nav ul li:nth-child(4) a'); 
    const nombre1 = document.querySelector('.nombre1');
    const nombre2 = document.querySelector('.nombre2');

    enlaceNosotros.addEventListener('click', function() {
        // Agrega la clase de resaltado a los nombres
        nombre1.classList.add('resaltado');
        nombre2.classList.add('resaltado');

        // Remueve la clase de resaltado después de 1 segundo
        setTimeout(function() {
            nombre1.classList.remove('resaltado');
            nombre2.classList.remove('resaltado');
        }, 500); 
    });
});

document.getElementById('operaciones').addEventListener('click', function() {
    var strongs = document.getElementsByTagName('strong');
    for (var i = 0; i < strongs.length; i++) {
        strongs[i].classList.add('resaltado');
    }
    setTimeout(function() {
        for (var i = 0; i < strongs.length; i++) {
            strongs[i].classList.remove('resaltado');
        }
    }, 500);
});

document.getElementById("link-calculadora").addEventListener("click", function() {
    var calculadora = document.querySelector(".calculadora");
    calculadora.classList.add("resaltado-calculadora");
    setTimeout(function() {
        calculadora.classList.remove("resaltado-calculadora");
    }, 1000)
});

document.addEventListener('DOMContentLoaded', function() {
    var botonMezclar = document.getElementById('mezclar');
    botonMezclar.addEventListener('click', function() {
        var botonesNumeros = document.querySelectorAll('.numero');
        
        var numeros = [];

        botonesNumeros.forEach(function(boton) {
            numeros.push(boton.textContent);
        });

        numeros.sort(function() { return 0.5 - Math.random() });

        botonesNumeros.forEach(function(boton, index) {
            boton.textContent = numeros[index];
        });
    });
});





