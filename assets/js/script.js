alert("Piedra, Papel o Tijeras")

    //repeticion de el juego
    let juegos = prompt("Indica cuantas veces te gustaría jugar")

    //victoria, derrota y empate
    let win = 0;
    let lose = 0;
    let draw = 0;

    //Crea un ciclo limitado 
    for (let i = 0; i < juegos; i++) {
        //jugada del usuario
        let jugada = prompt("Ingresa tu jugada: Piedra - Papel - Tijera");

        //variable que se le asignará un string
        let jugada_computer;

        //entero al azar del 0 al 2
        let computer = Math.floor(Math.random() * 3);


        //convierte jugada de computadora de number a string
        if (computer == 0) {
            jugada_computer = "Piedra"
        } else if (computer == 1) {
            jugada_computer = "Papel"
        } else if (computer == 2) {
            jugada_computer = "Tijera"
        }

        //compara ambas jugadas e indica el resultado final
        if (jugada == "Tijera" || jugada == "tijera" || jugada == "Tijeras" || jugada == "tijeras" && jugada_computer == "Tijera") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, es un EMPATE ¡Intentalo otra vez!`)
            draw += 1;
        } else if (jugada == "Piedra" || jugada == "piedra" && jugada_computer == "Piedra") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, es un EMPATE ¡Intentalo otra vez!`)
            draw += 1;
        } else if (jugada == "Papel" || jugada == "papel" && jugada_computer == "Papel") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, es un EMPATE ¡Intentalo otra vez!`)
            draw += 1;
        } else if (jugada == "Piedra" || jugada == "piedra" && jugada_computer == "Tijera") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, GANASTE ¡Juega otra vez!`)
            win += 1;
        } else if (jugada == "Papel" || jugada == "papel" && jugada_computer == "Piedra") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, GANASTE ¡Juega otra vez!`)
            win += 1;
        } else if (jugada == "Tijera" || jugada == "tijera" || jugada == "Tijeras" || jugada == "tijeras" && jugada_computer == "Papel") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, GANASTE ¡Juega otra vez!`)
            win += 1;
        } else if (jugada == "Piedra" || jugada == "piedra" && jugada_computer == "Papel") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, PERDISTE ¡Intentalo otra vez!`)
            lose += 1;
        } else if (jugada == "Papel" || jugada == "papel" && jugada_computer == "Tijera") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, PERDISTE ¡Intentalo otra vez!`)
            lose += 1;
        } else if (jugada == "Tijera" || jugada == "tijera" || jugada == "Tijeras" || jugada == "tijeras" && jugada_computer == "Piedra") {
            alert(`Tu jugaste ${jugada} y la computadora jugó ${jugada_computer}. Por ende, PERDISTE ¡Intentalo otra vez!`)
            lose += 1;
        }
    }

    //resumen del juego
    alert(`Ganaste ${win} veces, perdiste ${lose} veces y empataste ${draw} veces.`)

    //ganador de la ronda
    if (win > lose) {
        alert("¡Felicidades, ganaste!")
    } else if (win < lose) {
        alert("Lo siento, perdiste.")
    } else if (win == lose) {
        alert("Esta ronda fue un empate...")
    }
