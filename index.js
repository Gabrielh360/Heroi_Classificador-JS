// A váriavel 'nome' indica o nome do Super heroi.
let nome = "Batman" // Coloque o nome do heroi.

// A váriavel 'xp' indica a quantidade de xp que o Heroi tem.
let xp = 1.001 // coloque o xp do heroi.

// recuperando o resultado da função.
const resultado = calssificadorDeNivel(nome, xp)

// Uma função junto de uma codição de tomada de decição.
function calssificadorDeNivel (nome, xp) {
    let nivel
    if ( xp >= 1.001 && xp <= 2.000 ) {
        nivel = "Bronze"
    } if ( xp >= 2.001 && xp <= 5.000 ) {
        nivel = "Prata"
    } if ( xp >= 5.001 && xp <= 7.000 ) {
        nivel = "Ouro"
    } if ( xp >= 7.001 && xp <= 8.000 ) {
        nivel = "Platina"
    } if ( xp >= 8.001 && xp <= 9.000 ) {
        nivel = "Ascendente"
    } if ( xp >= 9.001 && xp <= 10.000 ) {
        nivel = "Imortal"
    } if ( xp >= 10.001) {
        nivel = "Radiante" 
    } else {
        nivel = "Ferro"
    }
    
    return `O Herói de nome ${nome} está no nível de ${nivel}`
}

// Jogando o resultado na tela do terminal.
console.log(resultado)