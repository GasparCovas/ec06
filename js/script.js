var misCartasFacil = [
    "images/k_picas_negro.png",
    "images/4_diamantes_rojo.png",
    "images/q_trebol_negro.png",
    "images/10_diamantes_rojo.png",
    "images/10_picas_negro.png",
    "images/k_picas_negro.png",
    "images/4_diamantes_rojo.png",
    "images/q_trebol_negro.png",
    "images/10_diamantes_rojo.png",
    "images/10_picas_negro.png",
];
var misCartasMedio = [
    "images/4_diamantes_rojo.png",
    "images/q_trebol_negro.png",
    "images/10_diamantes_rojo.png",
    "images/10_picas_negro.png",
    "images/A_trebol_negro.png",
    "images/J_corazon_rojo.png",
    "images/3_corazones_rojo.png",
    "images/k_picas_negro.png",
    "images/4_diamantes_rojo.png",
    "images/q_trebol_negro.png",
    "images/10_diamantes_rojo.png",
    "images/10_picas_negro.png",
    "images/A_trebol_negro.png",
    "images/J_corazon_rojo.png",
    "images/3_corazones_rojo.png",
    "images/k_picas_negro.png"
];
var misCartasDificil = [
    "images/4_diamantes_rojo.png",
    "images/q_trebol_negro.png",
    "images/10_diamantes_rojo.png",
    "images/10_picas_negro.png",
    "images/A_trebol_negro.png",
    "images/J_corazon_rojo.png",
    "images/3_corazones_rojo.png",
    "images/k_picas_negro.png",
    "images/4_diamantes_rojo.png",
    "images/q_trebol_negro.png",
    "images/10_diamantes_rojo.png",
    "images/10_picas_negro.png",
    "images/A_trebol_negro.png",
    "images/J_corazon_rojo.png",
    "images/3_corazones_rojo.png",
    "images/k_picas_negro.png",
    "images/4_diamantes_rojo.png",
    "images/q_trebol_negro.png",
    "images/10_diamantes_rojo.png",
    "images/10_picas_negro.png",
    "images/A_trebol_negro.png",
    "images/J_corazon_rojo.png",
    "images/3_corazones_rojo.png",
    "images/k_picas_negro.png",
];
var ranking = [];
var nickname = '';
var tiempos = '[{"nivel": "facil", "tiempo":60},{"nivel": "medio", "tiempo":90},{"nivel": "dificil", "tiempo":120}]';
var maximTime = '';
var nivelGlobal = '';
var miReverso = "images/reverso.png";
var reversos = document.createElement("div");
var cartas = document.createElement("div");
var x = 0;
var z = 0;
var y = 0;
var puntos;
var posicionUno;
var posicionDos;
var posicionTres;
var primera;
var segunda;
var tercera;


var felicidades = (nickname, puntos) => "¡Felicidades, " + nickname + ". Has conseguido: " + puntos + " puntos!";
/**
 * 
 * @param {*} nivelGlobal 
 * tiempoLimite sirve para mostrar por pantalla el tiempo límite que tiene cada nivel 
 * dependiendo del JSON 
 */
function tiempoLimite(nivelGlobal) {

    maximos = JSON.parse(tiempos);

    for (var i = 0; i < maximos.length; i++) {

        if (maximos[i].nivel == nivelGlobal) { maximTime = maximos[i].tiempo }

    }

    document.getElementById('limite').innerHTML = parseInt(maximTime / 60) + " min " + (maximTime % 60) + " seg.";
}
/**
 * cronómetro sirve para ir sumando 1 segundo al contador del 
 * juego cada segundo para controlar el tiempo máximo.
 * Si llega al máximo se para el crónometro con clearInterval.
 */
function cronometro() {
    segundos = 0;
    minutos = 0;
    s = document.getElementById("segundos");
    m = document.getElementById("minutos");
    $("p").slideUp(500).slideDown(200);

    tiempo = setInterval(function() {

        segundos = segundos + 1;
        s.innerHTML = segundos;
        m.innerHTML = minutos;
        if (segundos == 60) {
            minutos++
            segundos = 0;
        }
        if (segundos < 10) {
            s.innerHTML = segundos;
            s.innerHTML = "0" + segundos;
        }
        if (minutos < 10) {
            m.innerHTML = minutos;
            m.innerHTML = "0" + minutos;
        }

        if ((minutos * 60) + (segundos) == maximTime) {
            alert("Se acabó el tiempo " + nickname);
            puntos = puntuacion(maximTime, (minutos * 60) + (segundos));
            clearInterval(tiempo);

        }
    }, 1000);
}
/**
 * 
 * @param {*} tiempoLimite 
 * @param {*} tiempoInvertido 
 * Calcula la puntuación de la partida
 */
function puntuacion(tiempoLimite, tiempoInvertido) {
    return (tiempoLimite - tiempoInvertido) * 100;
}
/**
 * myNivel envía a la función dependiendo del nivel seleccionado 
 * nada más entrar inicia el cronómetro
 */
function myNivel() {

    hideRanking();

    nickname = document.getElementById("nick").value;
    cronometro();
    var x = document.getElementById("mySelect").selectedIndex;
    var nivel = document.getElementsByTagName("option")[x].value;
    nivelGlobal = nivel;
    tiempoLimite(nivel);
    if (nivel == "dificil") {
        nivelDificil();

    } else if (nivel == "medio") {
        nivelMedio();

    } else(
        nivelFacil());
}

/**
 * NIVEL DIFÍCIL
 * 
 */
function nivelDificil() {
    limpiarCartas(cartas, misCartasDificil);
    for (i = 0; i < misCartasDificil.length; i++) {
        var carta = document.createElement("img");
        carta.src = misCartasDificil[i];
        cartas.appendChild(carta);

    }
    document.body.appendChild(cartas);



    limpiarCartas(reversos, misCartasDificil);
    for (i = 0; i < misCartasDificil.length; i++) {
        var reverso = document.createElement("img");
        reverso.src = miReverso;
        reverso.addEventListener("click", girarTres);
        reversos.appendChild(reverso);

    }
    $("#reversos").fadeIn(1000);
    document.body.appendChild(reversos);
}

/**
 * NIVEL MEDIO
 */
function nivelMedio() {
    limpiarCartas(cartas, misCartasMedio);
    for (i = 0; i < misCartasMedio.length; i++) {
        var carta = document.createElement("img");
        carta.src = misCartasMedio[i];
        cartas.appendChild(carta);

    }
    document.body.appendChild(cartas);


    limpiarCartas(reversos, misCartasMedio);
    for (i = 0; i < misCartasMedio.length; i++) {
        var reverso = document.createElement("img");
        reverso.src = miReverso;
        reverso.addEventListener("click", girar);
        reversos.appendChild(reverso);

    }
    $("#reversos").fadeIn(1000);
    document.body.appendChild(reversos);
}

/**
 * NIVEL FACIL
 */
function nivelFacil() {

    limpiarCartas(cartas, misCartasFacil);
    for (i = 0; i < misCartasFacil.length; i++) {
        var carta = document.createElement("img");
        carta.src = misCartasFacil[i];

        cartas.appendChild(carta);

    }
    document.body.appendChild(cartas);

    limpiarCartas(reversos, misCartasFacil);

    for (i = 0; i < misCartasFacil.length; i++) {
        var reverso = document.createElement("img");
        reverso.src = miReverso;
        reverso.addEventListener("click", girar);
        reversos.appendChild(reverso);
        reversos.id = "reversos";

    }
    $("#reversos").fadeIn(1000);
    document.body.appendChild(reversos);

}

/**
 * 
 * @param {*} limpiar 
 * @param {*} cartasArray 
 * limpiarCartas sirve para quitar las cartas que hay en la mesa, volver a remover 
 * y tirarlas para volver a jugar.
 * 
 */
function limpiarCartas(limpiar, cartasArray) {

    //REINICIAR TODOS LOS CONTADORES
    z = 0;
    x = 0;
    reversos.style.pointerEvents = "auto";
    shuffle(cartasArray);
    while (limpiar.firstChild) {

        $("#reversos").fadeOut(1000);
        limpiar.removeChild(limpiar.firstChild);
        shuffle(cartasArray);
    }

}


/**
 * Gira la carta que clickas en los niveles FÁCIL y MEDIO
 */
function girar() {
    if (x == 0) {
        this.style.pointerEvents = "none";
        var parentUno = this.parentNode; //Coge el Node del padre de la carta
        posicionUno = Array.prototype.indexOf.call(parentUno.children, this); //Coge el index de la carta
        primera = cartas.children[posicionUno].src;
        this.src = primera; //Cambia el src
        x = 1; //A partir de ahora ya hay una carta girada

    } else if (x == 1) {
        reversos.style.pointerEvents = "none"; //Para que no puedas seleccionar ninguna carta más 
        this.style.pointerEvents = "none";
        var parentDos = this.parentNode; //Coge el Node del padre de la carta
        posicionDos = Array.prototype.indexOf.call(parentDos.children, this); //Coge el index de la carta
        segunda = cartas.children[posicionDos].src;
        this.src = segunda; //Cambia el src
        var total = cartas.childNodes.length;
        comprobarCartas(total); //Se comprueba si las dos cartas son iguales
        x = 0;
    }

}
/**
 * Gira la carta que clickas en el nivel DIFÍCIL
 */
function girarTres() {
    if (x == 0) {
        this.style.pointerEvents = "none";
        this.style.pointerEvents = "none";
        var parentUno = this.parentNode; //Coge el Node del padre de la carta
        posicionUno = Array.prototype.indexOf.call(parentUno.children, this); //Coge el index de la carta
        primera = cartas.children[posicionUno].src;
        this.src = primera; //Cambia el src
        x = 1; //A partir de ahora ya hay una carta girada
    } else if (x == 1) {
        this.style.pointerEvents = "none";
        var parentDos = this.parentNode; //Coge el Node del padre de la carta
        posicionDos = Array.prototype.indexOf.call(parentDos.children, this); //Coge el index de la carta
        segunda = cartas.children[posicionDos].src;
        this.src = segunda; //Cambia el src
        x = 2;

    } else if (x == 2) {
        reversos.style.pointerEvents = "none"; //Para que no puedas seleccionar ninguna carta más 
        this.style.pointerEvents = "none";
        var parentTres = this.parentNode; //Coge el Node del padre de la carta
        posicionTres = Array.prototype.indexOf.call(parentTres.children, this); //Coge el index de la carta
        tercera = cartas.children[posicionTres].src;
        this.src = tercera; //Cambia el src
        var total = cartas.childNodes.length;
        x = 0;
        comprobarTresCartas(total); //Se comprueba si las dos cartas son iguales

    }

}
/**
 * 
 * @param {*} total 
 * Comprueba si las cartas seleccionadas son iguales o diferentes 
 * en los niveles FÁCIL y MEDIO
 * También comprueba si has ganado la partida
 */
function comprobarCartas(total) {

    //Si el src de la primera carta es igual al de la segunda
    if (primera == segunda) {
        z++;
        if (z == total / 2) {
            showRanking();
            if (total == misCartasFacil.length) {

                puntos = puntuacion(maximTime, (minutos * 60) + (segundos));
                if (!nickname) {
                    y++;
                    nickname = "Anónimo " + y
                }
                ranking[nickname] = puntos;
                document.getElementById("ranking").innerHTML = ("");
                actualizarRanking();



                clearInterval(tiempo);
            } else {

                puntos = puntuacion(maximTime, (minutos * 60) + (segundos));
                clearInterval(tiempo);
                if (!nickname) { nickname = "Anónimo" }
                alert(felicidades(nickname, puntos));
            }


            z = 0;
        }
        reversos.style.pointerEvents = "auto"; //Para poder seleccionar cartas otra vez
    } else {
        setTimeout(incorrectoTimeOut, 1000);
        reversos.children[posicionUno].style.pointerEvents = "";
        reversos.children[posicionDos].style.pointerEvents = "";

    }
}

function hideRanking() {
    $("#titulo").hide();

}

function showRanking() {
    $("#titulo").show();
    $("#titulo").animate({
        height: '200px',
        width: '500px'
    });
    $("#titulo").slideUp(2000).slideDown(2000);
}
/**
 * 
 * @param {*} total 
 * Comprueba si las cartas seleccionadas son iguales o diferentes
 * en el nivel DIFÍCIL
 * También comprueba si has ganado la partida
 */
function comprobarTresCartas(total) {

    //Si el src de la primera carta es igual al de la segunda
    if (primera == segunda && segunda == tercera) {
        z++;
        if (z == total / 3) {
            y++;
            puntos = puntuacion(maximTime, (minutos * 60) + (segundos));
            clearInterval(tiempo);
            if (!nickname) { nickname = "Anónimo" }
            alert(felicidades(nickname, puntos));
            z = 0;
        }
        reversos.style.pointerEvents = "auto"; //Para poder seleccionar cartas otra vez
    } else {
        setTimeout(incorrectoTimeOutTres, 1000);
        reversos.children[posicionUno].style.pointerEvents = "";
        reversos.children[posicionDos].style.pointerEvents = "";
        reversos.children[posicionTres].style.pointerEvents = "";
    }
}
/**
 * Actualiza el ranking cada vez que termina una partida del nivel FÁCIL.
 * No ordena, solo añade al final la última partida
 */
function actualizarRanking() {
    for (var nick in ranking) {
        var li = document.createElement("li");
        var points = ranking[nick];
        var nombre = document.createTextNode("Nombre: " + nick + " Puntos: " + points);


        //var puntos = document.createTextNode(points);
        //nombre.appendChild(puntos);
        li.appendChild(nombre);
        document.getElementById("ranking").appendChild(li);



        //document.getElementById("ranking").appendChild(posicion);

    }
}


/**
 * Si en comprobarTresCartas() son diferentes te trae aquí y se vuelven 
 * a dar la vuelta las cartas en 1 segundo.
 */
function incorrectoTimeOutTres() {
    //Como no son iguales se vuelven a girar las cartas
    reversos.children[posicionUno].src = "images/reverso.png";
    reversos.children[posicionDos].src = "images/reverso.png";
    reversos.children[posicionTres].src = "images/reverso.png";
    reversos.style.pointerEvents = "auto"; //Para poder seleccionar cartas otra vez
}

/**
 * Si en comprobarCartas() son diferentes te trae aquí y se vuelven 
 * a dar la vuelta las cartas en 1 segundo.
 */
function incorrectoTimeOut() {
    //Como no son iguales se vuelven a girar las cartas
    reversos.children[posicionUno].src = "images/reverso.png";
    reversos.children[posicionDos].src = "images/reverso.png";
    reversos.style.pointerEvents = "auto"; //Para poder seleccionar cartas otra vez
}

/**
 * Para remover el array con las cartas
 */
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}