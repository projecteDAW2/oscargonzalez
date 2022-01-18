document.addEventListener('DOMContentLoaded', () => {

const BOARD = document.querySelector(".board"),
      COLUMN4P1 = document.querySelector(".column4p1"),
      COLUMN4P2 = document.querySelector(".column4p2"),
      COLUMN4P3 = document.querySelector(".column4p3"),
      COLUMN3P1 = document.querySelector(".column3p1"),
      COLUMN3P2 = document.querySelector(".column3p2"),
      COLUMN3P3 = document.querySelector(".column3p3"),
      COLUMN3P4 = document.querySelector(".column3p4"),
      COLUMN2P1 = document.querySelector(".column2p1"),
      COLUMN2P2 = document.querySelector(".column2p2"),
      COLUMN2P3 = document.querySelector(".column2p3"),
      COLUMN1P1 = document.querySelector(".column1p1"),
      COLUMN1P2 = document.querySelector(".column1p2"),
      COLUMN1P3 = document.querySelector(".column1p3"),
      COLUMN1P4 = document.querySelector(".column1p4"),
      CHARACTER = document.querySelector(".character"),
      SCOREBOARD = document.getElementById('scoreboard'),
      NUM_BOXES = 14,
      FIRST_TOP = "-125px",
      SECOND_TOP = "50px",
      THIRD_TOP = "225px",
      FOURTH_TOP = "400px",
      FIFTH_TOP = "570px";
var   speed = 170,
      boxes = document.querySelectorAll('.box'),
      timer = 40,
      score = 0,
      backgroundPosition = 100,
      isEnabled = false,
      initial = 0,
      interval = 250; 


      COLUMN4P1.setAttribute("id","virusImage");
      COLUMN4P2.setAttribute("id","keyboardImage");
      COLUMN4P3.setAttribute("id","virusImage");
      COLUMN3P1.setAttribute("id","virusImage");
      COLUMN3P2.setAttribute("id","virusImage");
      COLUMN3P3.setAttribute("id","keyboardImage");
      COLUMN3P4.setAttribute("id","virusImage");
      COLUMN2P1.setAttribute("id","virusImage");
      COLUMN2P2.setAttribute("id","keyboardImage");
      COLUMN2P3.setAttribute("id","virusImage");
      COLUMN1P1.setAttribute("id","virusImage");
      COLUMN1P2.setAttribute("id","keyboardImage");
      COLUMN1P3.setAttribute("id","virusImage");
      COLUMN1P4.setAttribute("id","virusImage");

function loseMessage(timeout) {
    isEnabled = false;
    if (score < 50) {
        qualification = "has suspendido. no te preocupes, equivocarse es parte del proceso de aprendizaje, en el cep aprenderas a seguir adelante y conseguir tus metas.";
    } else if (score >= 50 && score < 60){
        qualification = "has sacado un suficiente. no esta mal, has aprobado, pero seguro que puedes dar mas de ti. los profesores del cep siemopre te ayudaran en lo que necesites.";
    } else if (score >= 60 && score < 70){
        qualification = "has sacado un bien. es una buena nota aunque siempre se puede aspirar a mas. pide consejo a otros alumnos siempre que lo necesites, el cep es una gran familia.";
    } else if (score >= 70 && score < 80){
        qualification = "has sacado un notable. has mejorado mucho, el esfuerzo tiene su recompensa. igual que con el abp, donde veras lo satisfactorio que es ver que el trabajo duro se convierta en un increible resultado.";
    } else if(score >= 80 && score < 90){
        qualification = "has sacado un sobresaliente. enhorabuena, pocas personas han llegado hasta aqui. juntando tu excelencia y tu formacion en el cep tendras un futuro prometedor.";
    } else if(score > 90){
        qualification = "has ganado! felicidades, vas a ser un gran fichaje para el cep.";
    }
    swal({
        title: "TU PUNTUACION ES: "+(score-timeout),
        text: qualification,
        buttons: {
            cancel: "salir",
            catch: {
                text: "jugar de nuevo",
                value: "catch",
            }
            },
        })
    .then((value) => {
        switch (value) {

            case "catch":
                location.reload();
                break;
            
            default:
                window.location = "http://localhost/1rProjecteDAW2b2122/frontend/games.php"
                break;
            }
    });
}
      
function createLand() {
    for (let i = 0; i < NUM_BOXES; i++) {
        var attribute = boxes[i].getAttribute("id"),
            randomBool = Math.random() < 0.5;
            

        if (boxes[i].style.top <= SECOND_TOP && attribute == "keyboardImage") {
            var box = boxes[i].className;
            switch (box) {
                case "column4p1 box":
                    if (randomBool && COLUMN1P1.style.top > FOURTH_TOP) {
                        COLUMN1P1.removeAttribute("id");
                        COLUMN1P1.setAttribute("id","keyboardImage");
                    } else if(COLUMN1P2.style.top > FOURTH_TOP) {
                        COLUMN1P2.removeAttribute("id");
                        COLUMN1P2.setAttribute("id","keyboardImage");
                    }
                case "column4p2 box":
                    if (randomBool && COLUMN1P2.style.top > FOURTH_TOP) {
                        COLUMN1P2.removeAttribute("id");
                        COLUMN1P2.setAttribute("id","keyboardImage");
                    } else if(COLUMN1P3.style.top > FOURTH_TOP) {
                        COLUMN1P3.removeAttribute("id");
                        COLUMN1P3.setAttribute("id","keyboardImage");
                    }
                    break;
                case "column4p3 box":
                    if (randomBool && COLUMN1P3.style.top > FOURTH_TOP) {
                        COLUMN1P3.removeAttribute("id");
                        COLUMN1P3.setAttribute("id","keyboardImage");
                    } else if(COLUMN1P4.style.top > FOURTH_TOP) {
                        COLUMN1P4.removeAttribute("id");
                        COLUMN1P4.setAttribute("id","keyboardImage");
                    }
                    break;
                case "column3p1 box":
                    if (COLUMN4P1.style.top > FOURTH_TOP) {
                        COLUMN4P1.removeAttribute("id");
                        COLUMN4P1.setAttribute("id","keyboardImage");                        
                    }
                    break;
                case "column3p2 box":
                    if (randomBool && COLUMN4P1.style.top > FOURTH_TOP) {
                        COLUMN4P1.removeAttribute("id");
                        COLUMN4P1.setAttribute("id","keyboardImage");
                    } else if(COLUMN4P2.style.top > FOURTH_TOP) {
                        COLUMN4P2.removeAttribute("id");
                        COLUMN4P2.setAttribute("id","keyboardImage");
                    }
                    break;
                case "column3p3 box":
                    if (randomBool && COLUMN4P2.style.top > FOURTH_TOP) {
                        COLUMN4P2.removeAttribute("id");
                        COLUMN4P2.setAttribute("id","keyboardImage");
                    } else if(COLUMN4P3.style.top > FOURTH_TOP) {
                        COLUMN4P3.removeAttribute("id");
                        COLUMN4P3.setAttribute("id","keyboardImage");
                    }
                    break;
                case "column3p4 box":
                    if ( COLUMN4P3.style.top > FOURTH_TOP) {
                        COLUMN4P3.removeAttribute("id");
                        COLUMN4P3.setAttribute("id","keyboardImage");                        
                    }
                    break;
                case "column2p1 box":
                    if (randomBool && COLUMN3P1.style.top > FOURTH_TOP) {
                        COLUMN3P1.removeAttribute("id");
                        COLUMN3P1.setAttribute("id","keyboardImage");
                    } else if(COLUMN3P2.style.top > FOURTH_TOP) {
                        COLUMN3P2.removeAttribute("id");
                        COLUMN3P2.setAttribute("id","keyboardImage");
                    }
                    break;
                case "column2p2 box":
                    if (randomBool && COLUMN3P2.style.top > FOURTH_TOP) {
                        COLUMN3P2.removeAttribute("id");
                        COLUMN3P2.setAttribute("id","keyboardImage");
                    } else if(COLUMN3P3.style.top > FOURTH_TOP) {
                        COLUMN3P3.removeAttribute("id");
                        COLUMN3P3.setAttribute("id","keyboardImage");
                    }
                    break;
                case "column2p3 box":
                    if (randomBool && COLUMN3P3.style.top > FOURTH_TOP) {
                        COLUMN3P3.removeAttribute("id");
                        COLUMN3P3.setAttribute("id","keyboardImage");
                    } else if(COLUMN3P4.style.top > FOURTH_TOP) {
                        COLUMN3P4.removeAttribute("id");
                        COLUMN3P4.setAttribute("id","keyboardImage");
                    }
                    break;
                case "column1p1 box":
                    if (COLUMN2P1.style.top > FOURTH_TOP) {
                        COLUMN2P1.removeAttribute("id");
                        COLUMN2P1.setAttribute("id","keyboardImage");                        
                    }
                    break;
                case "column1p2 box":
                    if (randomBool && COLUMN2P1.style.top > FOURTH_TOP) {
                        COLUMN2P1.removeAttribute("id");
                        COLUMN2P1.setAttribute("id","keyboardImage");
                    } else if(COLUMN2P2.style.top > FOURTH_TOP) {
                        COLUMN2P2.removeAttribute("id");
                        COLUMN2P2.setAttribute("id","keyboardImage");
                    }
                    break;
                case "column1p3 box":
                    if (randomBool && COLUMN2P2.style.top > FOURTH_TOP) {
                        COLUMN2P2.removeAttribute("id");
                        COLUMN2P2.setAttribute("id","keyboardImage");
                    } else if(COLUMN2P3.style.top > FOURTH_TOP) {
                        COLUMN2P3.removeAttribute("id");
                        COLUMN2P3.setAttribute("id","keyboardImage");
                    }
                    break;
                case "column1p4 box":
                    if (COLUMN2P3.style.top > FOURTH_TOP) {
                        COLUMN2P3.removeAttribute("id");
                        COLUMN2P3.setAttribute("id","keyboardImage");                        
                    }
                    break;
            }
        }
    }
}

function moveBoxesUp() {
    for (let i = 0; i < NUM_BOXES; i++) {
        if (boxes[i].style.top > FIFTH_TOP) {
            boxes[i].style.top = SECOND_TOP;
            boxes[i].style.visibility = "visible";
        }
    }
}

function hideBoxes() {
    for (let i = 0; i < NUM_BOXES; i++) {
        if (boxes[i].style.top > FOURTH_TOP) { //error, la fila de arriba entra en el if aunque tiene 45px
            boxes[i].style.visibility = "hidden";
            boxes[i].setAttribute("id","virusImage");
        }
    }
}


function addScore(){
    score= score+2;
    SCOREBOARD.innerHTML = score;

    if (score == 100) {
        loseMessage(0);
    }
}


function endgame() {

    if (CHARACTER.offsetLeft < 51 || CHARACTER.offsetLeft > 759) {
        CHARACTER.style.visibility = "hidden";
        loseMessage(0);
    }

    for (let i = 0; i < NUM_BOXES; i++) {
        if (boxes[i].offsetLeft == 20 && boxes[i].getAttribute("id") == "virusImage" && CHARACTER.style.left == "51px" && boxes[i].style.top == "390px") {
            loseMessage(0);
        }else if (boxes[i].offsetLeft == 125 && boxes[i].getAttribute("id") == "virusImage" && CHARACTER.style.left == "169px" && boxes[i].style.top == "390px") { 
            loseMessage(0);
        }else if (boxes[i].offsetLeft == 248 && boxes[i].getAttribute("id") == "virusImage" && CHARACTER.style.left == "287px" && boxes[i].style.top == "390px") { 
            loseMessage(0);
        }else if (boxes[i].offsetLeft == 355 && boxes[i].getAttribute("id") == "virusImage" && CHARACTER.style.left == "405px" && boxes[i].style.top == "390px") { 
            loseMessage(0);
        }else if (boxes[i].offsetLeft == 476 && boxes[i].getAttribute("id") == "virusImage" && CHARACTER.style.left == "523px" && boxes[i].style.top == "390px") { 
            loseMessage(0);
        }else if (boxes[i].offsetLeft == 585 && boxes[i].getAttribute("id") == "virusImage" && CHARACTER.style.left == "641px" && boxes[i].style.top == "390px") { 
            loseMessage(0);
        }else if (boxes[i].offsetLeft == 704 && boxes[i].getAttribute("id") == "virusImage" && CHARACTER.style.left == "759px" && boxes[i].style.top == "390px") { 
            loseMessage(0);
        }
        
    }
}

function moveBoxes(){

    for (let i = 0; i < NUM_BOXES; i++) {
        let id = null,
        initialYPositionP = boxes[i].offsetTop,
        finalYPosition = initialYPositionP + speed; // offsetTop devuelve la distancia en pixeles entre el elemento y la parte de arriba
        clearInterval(id);
        id = setInterval(frame, 0.01);
        function frame() {
            if (finalYPosition == initialYPositionP) {
                clearInterval(id);
            } else {
                initialYPositionP = initialYPositionP + 5;
            }
            boxes[i].style.top = initialYPositionP + "px"; 
        }
    }

/*     for (let i = 0; i < NUM_BOXES; i++) {
        var boxTopPos = boxes[i].offsetTop; // offsetTop devuelve la distancia en pixeles entre el elemento y la parte de arriba
        boxes[i].style.top = (boxTopPos + speed) + "px"; //style.top marca la distancia entre el elemento y la parte de arriba
    } */
}

function moveCharacter(direction){

    if (direction == "right") {
        let id = null,
        initialXPosition = CHARACTER.offsetLeft,
        middleXPosition = CHARACTER.offsetLeft + 60,
        finalXPosition = initialXPosition+118,
        initialYPosition = CHARACTER.offsetTop;
        
        clearInterval(id);
        id = setInterval(frame, 0.001);
        function frame() {
            if (finalXPosition == initialXPosition) {
                clearInterval(id);
                hideBoxes();
                moveBoxesUp();
                createLand();
                endgame();
            } else {
                initialXPosition = initialXPosition + 2;
                if (initialXPosition <= middleXPosition) {
                    initialYPosition--;
                } else {
                    initialYPosition++;
                }
                CHARACTER.style.left = initialXPosition + "px";
                CHARACTER.style.top = (initialYPosition) + "px";
            }
        }
    } else {
        let id = null;  
        let initialXPosition = CHARACTER.offsetLeft,
        middleXPosition = CHARACTER.offsetLeft - 60,
        finalXPosition = initialXPosition-118,
        initialYPosition = CHARACTER.offsetTop;
        
        clearInterval(id);
        id = setInterval(frame, 0.0001);
        function frame() {
            if (finalXPosition == initialXPosition) {
                clearInterval(id);
                hideBoxes();
                moveBoxesUp();
                createLand();
                endgame();
            } else {
                initialXPosition = initialXPosition - 2;
                if (initialXPosition <= middleXPosition) {
                    initialYPosition++;
                } else {
                    initialYPosition--;
                }
                CHARACTER.style.left = initialXPosition + "px";
                CHARACTER.style.top = (initialYPosition) + "px";
            }
        }
    }

}

function moveBackground(){

    BOARD.style.backgroundPosition = "0%" + backgroundPosition + "%";
    backgroundPosition = backgroundPosition - 2;

}

function countdown() {

    if (isEnabled) {
        timer--;
        document.getElementById("timer").innerHTML = String( timer );
        if (timer > 0) {
            setTimeout(countdown, 1000);
        } else {
            loseMessage(0);
        }        
    }
};


function control(evento){

    var date = new Date(),
    milliseconds = date.getTime(); 
    if((milliseconds - initial) > interval){
        initial = milliseconds;
      if (isEnabled) {
        if(evento.keyCode == 39 || evento.keyCode == 68) { //flecha de derecha o d
            setTimeout(moveBoxes, 100);
            setTimeout(moveCharacter, 100, "right");
            setTimeout(addScore, 100);
            setTimeout(moveBackground, 100);
        } else if(evento.keyCode == 37 || evento.keyCode == 65) { //flecha de izquierda o a
            setTimeout(moveBoxes, 100);
            setTimeout(addScore, 100);
            setTimeout(moveBackground, 100);
            setTimeout(moveCharacter, 100, "left");
        }        
    }
    }
}

swal({
    title: "HASTA EL CIELO",
    text: "salta entre plataformas pulsando las teclas de izquierda y derecha. cuidado, el virus te hace perder la partida!",
    button: "EMPEZAR A JUGAR!",
  })
  .then(() => {
    isEnabled = true;
    countdown();
  });


document.addEventListener('keydown', control);



})