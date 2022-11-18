let siguientePregunta = 0
let puntos = 0

leerPregunta(siguientePregunta)

function leerPregunta(index){
    OpcionPregunta = Preguntas[index]
    Opciones = [...OpcionPregunta.distractores]
    Opciones.push(OpcionPregunta.respuesta)
    
    for (let i = 0; i < 4; i++) {
        Opciones.sort(()=>Math.random()-0.5);
    }

    document.getElementById("pregunta").innerHTML = OpcionPregunta.pregunta
    document.getElementById("imagen").src = OpcionPregunta.imagen
    document.getElementById("opcion-1").innerHTML = Opciones[0]
    document.getElementById("opcion-2").innerHTML = Opciones[1]
    document.getElementById("opcion-3").innerHTML = Opciones[2]
    document.getElementById("opcion-4").innerHTML = Opciones[3]
}

function selecionarOpcion(index){
    comprobar = Opciones[index] == OpcionPregunta.respuesta
    if (comprobar) {
        //document.getElementById("opcion-1").style.background = "green",
        alert(`Respuesta correcta`);
        puntos++;
    }else{
        alert(`Incorrecto la respuesta correcta es "${OpcionPregunta.respuesta}"`);
    }
    siguientePregunta++;
    if(siguientePregunta >= Preguntas.length){
        alert(`Test terminado`);
        //window.location = "puntaje.html"
        alert(`Tu puntaje fue de ${puntos}/${Preguntas.length}`);
        siguientePregunta = 0
        puntos = 0
    }
        leerPregunta(siguientePregunta);
}