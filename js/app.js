const bandeiras = {
    catar: "./img/A/qatar.png",
    equador: "./img/A/ehcuador.png",
    senegal: "./img/A/senegal.png",
    holanda: "./img/A/netherlands.png",
    inglaterra: "./img/B/england.png",
    ira: "./img/B/iran.png",
    usa: "./img/B/usa.png",
    random1: "./img/B/random.png",
    argentina: "./img/C/argentina.png",
    arabiaSaudita: "./img/C/saudi-arabia.png",
    mexico: "./img/C/mexico.png",
    polonia: "./img/C/poland.png",
    franca: "./img/D/france.png",
    random2: "./img/D/random.png",
    dinamarca: "./img/D/denmark.png",
    tunisia: "./img/D/tunisia.png",
    espanha: "./img/E/spain-2.png",
    random3: "./img/E/random.png",
    alemanha: "./img/E/germany.png",
    japao: "./img/E/japan.png",
    belgica: "./img/F/belgium.png",
    canada: "./img/F/canada.png",
    marrocos: "./img/F/morocco.png",
    croacia: "./img/F/croatia.png",
    brasil: "./img/G/brazil.png",
    serbia: "./img/G/serbia.png",
    suica: "./img/G/switzerland.png",
    camaroes: "./img/G/cameroon.png",
    portugal: "./img/H/portugal.png",
    gana: "./img/H/ghana.png",
    uruguai: "./img/H/uruguay.png",
    coreia: "./img/H/south-korea.png"
}


var testi = document.getElementById("azul");


for (const value of Object.values(bandeiras)) {
    testi.innerHTML(`<img src="${value}" class="bandeira">`);
}
