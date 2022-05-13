const pecaDeXadrez = "Peões".toLowerCase();

switch (pecaDeXadrez) {
    case "rei":
        console.log("qualquer direção");
    break;

    case "rainha":
        console.log("qualquer direção,quantas casas quiser");
    break;

    case "torres":
        console.log("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
    break;

    case "bispos":
        console.log("Move-se na diagonal, quantas casas quiser.");
    break;

    case "cavalos":
        console.log("Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante.");
    break;

    case "peões":
    console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.");
    break;

    default:
        console.log("Isso não é uma peça de xadrez!");
}