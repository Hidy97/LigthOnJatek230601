import Lampa from "./Lampa.js";

class JatekTer {
    #db;
    #allapotLista = [];
    #meret;
    #lepes;

    constructor() {
        this.#db = 0;
        this.#meret = 3;
        this.#lepes;
        const szuloElem = $("article");

        for (let index = 0; index < this.#allapotLista.length; index++) {
            const lampa = new Lampa(index, allapotLista[index], szuloElem);

        }

        this.#setAllapotList();

        $(window).on("kapcsolas", (event) => {
            this.#db += 1;
        })
    }

    #setAllapotList(){
        this.#allapotLista = this.#meret * this.#meret;
    }

    #szomszedokKeresese(id){

    }

    #init(){

    }

    #ellenorzes(){

    }
}

export default JatekTer;