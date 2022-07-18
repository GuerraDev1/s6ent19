let item = {}

let listFigure = [
    {
        id: 1,
        src: "./img/figure/animewoman.jpg",
        nome: "Anime Woman",
        valor: 200,
        alt: "Mulher com traços de personagem de anime"
    },
    {
        id: 2,
        src: "./img/figure/dragonballpersonagem.jpg",
        nome: "Boneco do DragonBall",
        valor: 220,
        alt: "Boneco de ação do anime Dragon Ball"
    },
    {
        id: 3,
        src: "./img/figure/starwarspersonagem.jpg",
        nome: "Yoda baby",
        valor: 250,
        alt: "Personagem Yoda da trilogia Star Wars"
    }
]
let listPainting = [
    {
        id: 1,
        nome: "Relógio",
        src: "./img/painting/clock.jpg",
        valor: 180,
        alt: "Relogio da cor preta, com lindos ponteiros"
    },
    {
        id: 2,
        nome: "Gamepad",
        src: "./img/painting/gamepad.jpg",
        valor: 95,
        alt: "Gamepad com fundo de controle de PlayStation"
    },
    {
        id: 3, 
        nome: "Robo do Star Wars",
        src: "./img/painting/personagem.jpg",
        valor: 325,
        alt: "Robo do StarWars em tamanho real"
    }
]


function createActionItem(){
    const ul = document.querySelector(".ulFigures")

    for(let i = 0; i < listFigure.length; i++){
        const imgFigure = document.createElement("img")
        const figCaption = document.createElement("figcaption")
        const paragrafo = document.createElement("p")
        const figure = document.createElement("figure")
        const li = document.createElement("li")


        imgFigure.src = listFigure[i].src
        imgFigure.alt = listFigure[i].alt
        imgFigure.className = "imgFigure"

        figCaption.textContent = listFigure[i].nome

        paragrafo.textContent = listFigure[i].valor

        figure.append(imgFigure, figCaption, paragrafo)

        li.className = "liFigure"
        li.appendChild(figure)

        ul.appendChild(li)
    }
    return ul

}


function createPaintingItem(){
    const ul = document.querySelector(".ulPaintings")

    for(let i = 0; i < listPainting.length; i++){
        const imgPainting = document.createElement("img")
        const figCaption = document.createElement("figcaption")
        const paragrafo = document.createElement("p")
        const figure = document.createElement("figure")
        const li = document.createElement("li")

        imgPainting.src = listPainting[i].src
        imgPainting.alt = listPainting[i].alt
        imgPainting.className = "imgPainting"

        figCaption.textContent = listPainting[i].nome

        paragrafo.textContent = listPainting[i].valor

        figure.append(imgPainting, figCaption, paragrafo)

        li.className = "liPaintings"
        li.appendChild(figure)

        ul.appendChild(li)
    }
    return ul
}


console.log(createActionItem())
console.log(createPaintingItem())