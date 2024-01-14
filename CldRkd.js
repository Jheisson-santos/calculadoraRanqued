

calcLevel("Avallon" , 80, 5);

function calcLevel(name, victory, defeat) {
    let numberwins = victory - defeat;
    let nivel;

    switch (true) {
        case victory < 10:
            nivel = "Ferro";
            break;
        case victory >= 11 && victory <= 20:
            nivel = "Bronze";
            break;
        case victory >= 20 && victory <= 50:           
            nivel = "Prata";
            break;
        case victory >= 51 && victory <= 80:
            nivel = "Ouro";
            break;
        case victory >= 81 && victory <= 90:
            nivel = "Diamante";
            break;
        case victory >= 91 && victory <= 100:
            nivel = "Lendário";
            break;
        case victory >= 101:
            nivel = "Imortal";
            break;

    }

    console.log(name + ", você tem um saldo de " + numberwins + " e seu nível é " + nivel);
}
