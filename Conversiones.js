"use strict";


//////////////////////////////////
let celsius = 0;
let fahrenheit = 0;
let kelvin = 0;
//////////////////////////////////
let centimetros = 0;
let metros = 0;
let kilometros = 0;
//////////////////////////////////
let mililitros = 0;
let litros = 0;
//////////////////////////////////
let minutos = 0;
let año = 0;
//////////////////////////////////
let gramos = 0;
let toneladas = 0;
//////////////////////////////////
let titulo;
let resultado;
let explicacion;
let Digitar;
let numero;
//////////////////////////////////


document.getElementById("opciones").addEventListener("change", function() {
    var opcionSeleccionada = document.getElementById("opciones").value;
    var conversionSeccion = document.getElementById("conversionSeccion");
    var ejemplosSeccion = document.getElementById("ejemplosSeccion");

    if (opcionSeleccionada === "1") {
        conversionSeccion.style.display = "block";
        ejemplosSeccion.style.display = "none";
    } else if (opcionSeleccionada === "2") {
        conversionSeccion.style.display = "none";
        ejemplosSeccion.style.display = "block";
    } else {
        conversionSeccion.style.display = "none";
        ejemplosSeccion.style.display = "none";
    }
});


function EJERCICIOS() {
    TEMPERATURAS_();
    LONGITUD_();
    MASA_();
    TIEMPO_();
    VOLUMEN_();
}

function TEMPERATURAS_() {
    var opciones = document.getElementById("opcionesTemperatura").value;
    var opciones2 = document.getElementById("opciones2Temperatura").value;
    var Digitar = parseFloat(document.getElementById("DigitarTemperatura").value);
    var proceso = 0;
    var proceso2 = 0;

    if (opciones === "celsius" && opciones2 === "fahrenheit") {
        proceso = (Digitar * 9 / 5) + 32;
        document.getElementById("resultadoTemperatura").innerHTML = Digitar + " Celsius a Fahrenheit es: " + proceso;
    } 
    if (opciones === "fahrenheit" && opciones2 === "celsius") {
        proceso = (Digitar - 32) * 5 / 9;
        document.getElementById("resultadoTemperatura").innerHTML = Digitar + " Fahrenheit a Celsius es: " + proceso;
    }
    if (opciones === "celsius" && opciones2 === "kelvin") {
        proceso = (Digitar + 273.15);
        document.getElementById("resultadoTemperatura").innerHTML = Digitar + " Celsius a Kelvin es: " + proceso;
    }
    if (opciones === "kelvin" && opciones2 === "celsius") {
        proceso = (Digitar - 273.15);
        document.getElementById("resultadoTemperatura").innerHTML = Digitar + " Kelvin a Celsius es: " + proceso;
    }
    if (opciones === "fahrenheit" && opciones2 === "kelvin") {
        proceso = (Digitar - 32) * 5 / 9;
        proceso2 = (proceso - 273.15)
        document.getElementById("resultadoTemperatura").innerHTML = Digitar + " Fahrenheit a Kelvin es: " + proceso2;
    }
    if (opciones === "kelvin" && opciones2 === "fahrenheit") {
        proceso = (Digitar - 273.15);
        proceso2 = (proceso - 32) * 5 / 9;
        document.getElementById("resultadoTemperatura").innerHTML = Digitar + " Kelvin a Farenheit es: " + proceso2;
    }
    if (opciones === "celsius" && opciones2 === "celsius" || opciones === "fahrenheit" && opciones2 === "fahrenheit" || opciones === "kelvin" && opciones2 === "kelvin") {
        document.getElementById("resultadoTemperatura").innerHTML = " Realiza el proceso de seleccion correctamente, Gracias";
    }
    
}



function LONGITUD_() {
    var opciones = document.getElementById("opcionesLongitud").value;
    var opciones2 = document.getElementById("opciones2Longitud").value;
    var Digitar = parseFloat(document.getElementById("DigitarLongitud").value);
    var proceso = 0;

    if (opciones === "centimetros" && opciones2 === "metros") {
        proceso = (Digitar / 100);
        document.getElementById("resultadoLongitud").innerHTML = Digitar + " Centimetros a Metros es: " + proceso;
    } 
    if (opciones === "metros" && opciones2 === "centimetros") {
        proceso = (Digitar * 100);
        document.getElementById("resultadoLongitud").innerHTML = Digitar + " Metros a Centimetros es: " + proceso;
    }
    if (opciones === "metros" && opciones2 === "kilometros") {
        proceso = (Digitar / 1000);
        document.getElementById("resultadoLongitud").innerHTML = Digitar + " Metros a Kilometros es: " + proceso;
    }
    if (opciones === "kilometros" && opciones2 === "metros") {
        proceso = (Digitar * 1000);
        document.getElementById("resultadoLongitud").innerHTML = Digitar + " Kilometros a Metros es: " + proceso;
    }
    if (opciones === "kilometros" && opciones2 === "centimetros") {
        proceso = (Digitar * 100000);
        document.getElementById("resultadoLongitud").innerHTML = Digitar + " Kilometros a Centimetros es: " + proceso;
    }
    if (opciones === "centimetros" && opciones2 === "kilometros") {
        proceso = (Digitar / 100000);
        document.getElementById("resultadoLongitud").innerHTML = Digitar + " Centimetros a Kilometros es: " + proceso;
    }
    if (opciones === "centimetros" && opciones2 === "centimetros" || opciones === "metros" && opciones2 === "metros" || opciones === "kilometros" && opciones2 === "kilometros") {
        document.getElementById("resultadoTemperatura").innerHTML = " Realiza el proceso de seleccion correctamente, Gracias";
    }
    
}

function MASA_() {
    var opciones = document.getElementById("opcionesMasa").value;
    var opciones2 = document.getElementById("opciones2Masa").value;
    var Digitar = parseFloat(document.getElementById("DigitarMasa").value);
    var proceso = 0;

    if (opciones === "miligramos" && opciones2 === "gramos") {
        proceso = (Digitar / 1000);
        document.getElementById("resultadoMasa").innerHTML = Digitar + " Miligramos a Gramos es: " + proceso;
    } 
    if (opciones === "gramos" && opciones2 === "miligramos") {
        proceso = (Digitar * 1000);
        document.getElementById("resultadoMasa").innerHTML = Digitar + " Gramos a Miligramos es: " + proceso;
    }
    if (opciones === "gramos" && opciones2 === "kilogramos") {
        proceso = (Digitar / 1000);
        document.getElementById("resultadoMasa").innerHTML = Digitar + " Gramos a Kilogramos es: " + proceso;
    }
    if (opciones === "kilogramos" && opciones2 === "gramos") {
        proceso = (Digitar * 1000);
        document.getElementById("resultadoMasa").innerHTML = Digitar + " Kilogramos a Gramos es: " + proceso;
    }
    if (opciones === "miligramos" && opciones2 === "kilogramos") {
        proceso = (Digitar * 100000);
        document.getElementById("resultadoMasa").innerHTML = Digitar + " Miligramos a Kilogramos es: " + proceso;
    }
    if (opciones === "kilogramos" && opciones2 === "miligramos") {
        proceso = (Digitar / 100000);
        document.getElementById("resultadoMasa").innerHTML = Digitar + " Kilogramos a Miligramos es: " + proceso;
    }
    if (opciones === "miligramos" && opciones2 === "miligramos" || opciones === "gramos" && opciones2 === "gramos" || opciones === "kilogramos" && opciones2 === "kilogramos") {
        document.getElementById("resultadoMasa").innerHTML = " Realiza el proceso de seleccion correctamente, Gracias";
    }
    
}

function TIEMPO_() {
    var opciones = document.getElementById("opcionesTiempo").value;
    var opciones2 = document.getElementById("opciones2Tiempo").value;
    var Digitar = parseFloat(document.getElementById("DigitarTiempo").value);
    var proceso = 0;

    if (opciones === "segundos" && opciones2 === "minutos") {
        proceso = (Digitar / 60);
        document.getElementById("resultadoTiempo").innerHTML = Digitar + " Segundos a Minutos es: " + proceso;
    } 
    if (opciones === "minutos" && opciones2 === "segundos") {
        proceso = (Digitar * 60);
        document.getElementById("resultadoTiempo").innerHTML = Digitar + " Minutos a Segundos es: " + proceso;
    }
    if (opciones === "minutos" && opciones2 === "horas") {
        proceso = (Digitar / 60);
        document.getElementById("resultadoTiempo").innerHTML = Digitar + " Minutos a Horas es: " + proceso;
    }
    if (opciones === "horas" && opciones2 === "minutos") {
        proceso = (Digitar * 60);
        document.getElementById("resultadoTiempo").innerHTML = Digitar + " Horas a Minutos es: " + proceso;
    }
    if (opciones === "segundos" && opciones2 === "horas") {
        proceso = (Digitar / 3600);
        document.getElementById("resultadoTiempo").innerHTML = Digitar + " Segundos a Horas es: " + proceso;
    }
    if (opciones === "horas" && opciones2 === "segundos") {
        proceso = (Digitar * 3600);
        document.getElementById("resultadoTiempo").innerHTML = Digitar + " Horas a Segundos es: " + proceso;
    }
    if (opciones === "segundos" && opciones2 === "segundos" || opciones === "minutos" && opciones2 === "minutos" || opciones === "horas" && opciones2 === "horas") {
        document.getElementById("resultadoTiempo").innerHTML = " Realiza el proceso de seleccion correctamente, Gracias";
    }

}

function VOLUMEN_() {
    var opciones = document.getElementById("opcionesVolumen").value;
    var opciones2 = document.getElementById("opciones2Volumen").value;
    var Digitar = parseFloat(document.getElementById("DigitarVolumen").value);
    var proceso = 0;

    if (opciones === "mililitros" && opciones2 === "litros") {
        proceso = (Digitar / 1000);
        document.getElementById("resultadoVolumen").innerHTML = Digitar + " Mililitros a Litros es: " + proceso;
    } 
    if (opciones === "litros" && opciones2 === "mililitros") {
        proceso = (Digitar * 1000);
        document.getElementById("resultadoVolumen").innerHTML = Digitar + " Litros a Mililitros es: " + proceso;
    }
    if (opciones === "litros" && opciones2 === "galones") {
        proceso = (Digitar * 0.264172);
        document.getElementById("resultadoVolumen").innerHTML = Digitar + " Litros a Galones es: " + proceso;
    }
    if (opciones === "galones" && opciones2 === "litros") {
        proceso = (Digitar / 0.264172);
        document.getElementById("resultadoVolumen").innerHTML = Digitar + " Galones a Litros es: " + proceso;
    }
    if (opciones === "mililitros" && opciones2 === "galones") {
        proceso = (Digitar * 0.000264172);
        document.getElementById("resultadoVolumen").innerHTML = Digitar + " Mililitros a Galones es: " + proceso;
    }
    if (opciones === "galones" && opciones2 === "mililitros") {
        proceso = (Digitar / 0.000264172);
        document.getElementById("resultadoVolumen").innerHTML = Digitar + " Galones a Mililitros es: " + proceso;
    }
    if (opciones === "mililitros" && opciones2 === "mililitros" || opciones === "litros" && opciones2 === "litros" || opciones === "galones" && opciones2 === "galones") {
        document.getElementById("resultadoVolumen").innerHTML = " Realiza el proceso de seleccion correctamente, Gracias";
    }
    
}



function EJEMPLOS() {
    TEMPERATURAS();
    LONGITUD();
    MASA();
    TIEMPO();
    VOLUMEN();
}

function TEMPERATURAS() {
    var random = Math.random() * (50 - 1) + 1;
    fahrenheit = (random * 9/5) + 32;
    document.getElementById("resultadoEjemploTemperatura").innerText = (random.toFixed(2) + " °C equivalen a " + fahrenheit.toFixed(2) + " °F");
    document.getElementById("explicacionEjemploTemperatura").innerHTML = "<br>32°F = (°C x 9/5) + 32";
    document.getElementById("textoExplicacionEjemploTemperatura").innerHTML = "<br>Celsius (°C) a Fahrenheit (°F): Esta es una de las conversiones más utilizadas en el mundo. Se usa para convertir entre la escala Celsius (utilizada en la mayoría de los países) y la escala Fahrenheit (utilizada en los Estados Unidos y algunos otros lugares).";
}

function LONGITUD() {
    var random2 = Math.random() * (9999 - 1000) + 1000;
    kilometros = (random2 / 100000);
    document.getElementById("resultadoEjemploLongitud").innerText = (random2.toFixed() + " centimetros equivalen a " + kilometros.toFixed(3) + " kilometros");
    document.getElementById("explicacionEjemploLongitud").innerHTML = "<br>Para convertir 5000 centímetros a kilómetros: 5000cm ÷ 100000 = 0.05km";
    document.getElementById("textoExplicacionEjemploLongitud").innerHTML = "<br>Estas dos medidas son solo una parte de las unidades de longitud en el sistema métrico. <br>Hay muchas otras unidades que se utilizan para medir longitudes en diferentes contextos, <br>desde el micrómetro extremadamente pequeño hasta el megámetro mucho más grande. <br>Cada una de estas unidades se utiliza para simplificar las mediciones y expresar longitudes de manera coherente en diferentes escalas.";
}

function MASA()  {
    var random3 = Math.random() * (5000 - 1000) + 1000;
    toneladas = (random3 / 1000000);
    document.getElementById("resultadoEjemploMasa").innerText = (random3.toFixed(3) + " G equivale a " + toneladas.toFixed(3) + " toneladas");
    document.getElementById("explicacionEjemploMasa").innerHTML = "<br>Para convertir 500000 gramos a toneladas: 500000g ÷ 1000000 = 0.5t";
    document.getElementById("textoExplicacionEjemploMasa").innerHTML = "<br>1 tonelada (t) es igual a 1000000 gramos (g)<br>1 gramo (g) es igual a 0.000001 toneladas (t). <br>Recuerda que estas conversiones son útiles para cambiar entre diferentes escalas de masa, <br>como cuando necesitas comparar masas en gramos y toneladas.";
}

function TIEMPO() {
    var random4 = Math.random() * (10 - 1) + 1;
    minutos = ((random4 * 24) * 60);
    document.getElementById("resultadoEjemploTiempo").innerText = (random4.toFixed() + " Dias equivale a " + minutos.toFixed(2) + " minutos");
    document.getElementById("explicacionEjemploTiempo").innerHTML = "<br>Minutos = Dias x 24 horas x 60 minutos";
    document.getElementById("textoExplicacionEjemploTiempo").innerHTML = "<br>Para convertir 3 días a minutos: 3 dias x 24 horas / dias x 60 minutos / hora = 4320 minutos";
}

function VOLUMEN() {
    var random5 = Math.random() * (9000 - 1000) + 1000;
    litros = (random5 / 1000);
    document.getElementById("resultadoEjemploVolumen").innerText = (random5.toFixed(1) + " ml equivale a " + litros.toFixed(1) + " L");
    document.getElementById("explicacionEjemploVolumen").innerHTML = "<br>Para convertir 5000 mililitros a litros: 5000mL ÷ 1000 = 5L";
    document.getElementById("textoExplicacionEjemploVolumen").innerHTML = "<br>Estas conversiones son útiles para cambiar entre diferentes escalas de volumen <br>como cuando necesitas comparar volúmenes en mililitros y litros.";
}

document.getElementById("random").addEventListener("click", EJEMPLOS);