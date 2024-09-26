//Code by Daniel Quimbay :D
let click = document.getElementById("map")
click.addEventListener("click", getClickPosition)

let clickPosition;

let tesoroPosition = 
{
    x: (random(0, map.width)),
    y: (random(0, map.width))
}

let clicks = 0;
let score = 0;
let record = 1000;


function getClickPosition(evento)
{
    let fillRecord = document.getElementById("record")
    let fillScore = document.getElementById("score")
    let diffX = evento.offsetX - tesoroPosition.x
    let diffY = evento.offsetY - tesoroPosition.y
    
    let distance = Math.sqrt((diffX * diffX) + (diffY * diffY))
    
    let innerDistance = document.getElementById("distance")
    
    let message;
    clicks++;
    
    //Esta es la condición de victoria
    if (distance < 20)
    {
        alert("Has ganado en " + clicks + " clicks")
        tesoroPosition.x = (random(0, 80)) * 5
        tesoroPosition.y = (random(0, 80)) * 5
        
        score++

        //Esto es para que no quede "1 tesoros"
        if (score < 2) {
            fillScore.innerHTML = '<p>Has encontrado ' + score + ' tesoro</p>'

        } else {
            fillScore.innerHTML = '<p>Has encontrado ' + score + ' tesoros</p>'
        }

        //Para el record de clicks
        if(clicks < record)
        {
            fillRecord.innerHTML = '<p>Tu record es: ' + clicks + ' clicks</p>'
            record = clicks
        }
        
        clicks = 0

    //El resto de condiciones que no son victoria
    } else if (distance < 30)
    {
        message = "¡¡Demasiado Cerca!!"
        innerDistance.innerHTML = '<h2 class="mensaje dCerca">' + message + '</h2>'

    } else if (distance < 40){
        message = "¡Muy Caliente!"
        innerDistance.innerHTML = '<h2 class="mensaje  mCaliente">' + message + '</h2>'

    } else if (distance < 60){
        message = "Caliente"
        innerDistance.innerHTML = '<h2 class="mensaje caliente">' + message + '</h2>'

    }else if (distance < 100){
        message = "Tibio"
        innerDistance.innerHTML = '<h2 class="mensaje tibio">' + message + '</h2>'

    } else if (distance < 180){
        message = "Frio"
        innerDistance.innerHTML = '<h2 class="mensaje frio">' + message + '</h2>'

    } else if (distance < 360){
        message = "¡Muy Frio!"
        innerDistance.innerHTML = '<h2 class="mensaje mFrio">' + message + '</h2>'
    } else{
        message = "¡¡Congelado!!"
        innerDistance.innerHTML = '<h2 class="mensaje congelado">' + message + '</h2>'
    }
}

function random(min, max)
{
    let resultado;
    resultado = Math.floor((Math.random() * (max - min + 1)) + min);
    return resultado;
}
