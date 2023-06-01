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
        const szuloElem = $("article div");
        this.#allapotLista = [false, true, false, false, false, true, true, false, false];

        for (let index = 0; index < this.#allapotLista.length; index++) {
            const lampa = new Lampa(index, this.#allapotLista[index], szuloElem);

        }

        //this.#setAllapotLista();
        /*
        $(window).on("kapcsolas", (event) => {
        })
        */
    }

    #setAllapotLista() {
        // this.#allapotLista = this.#meret * this.#meret;
    }

    #szomszedokKeresese(id) {

    }

    #init() {

    }

    #ellenorzes() {

    }
}

export default JatekTer;