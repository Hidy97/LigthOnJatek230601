class Lampa{
    #allapot;
    #id;
    #divElem;

    constructor(id, allapot, szuloElem){
        this.#id = 0;
        this.#allapot = allapot;
        szuloElem.append(`<div class="lampa" id="${this.#id}"></div>`);
        this.#divElem = $(".lampa:last-child");

        this.setAllapot();
        this.#divElem.on("click", () => {
            this.#kattintasTrigger();
            this.setAllapot();
        })
    }

    setAllapot(){
        this.#allapot = !this.#allapot;
        this.#szinBeallit();
    }

    #szinBeallit(){
        if(this.#allapot){
            this.#divElem.css("background-color", "green");
        }else{
            this.#divElem.css("background-color", "yellow");
        }
    }

    #kattintasTrigger(){
        //kapcsolas
        const kapcsolas = new CustomEvent("kapcsolas", {detail: this});
        window.dispatchEvent(kapcsolas);
    }
}

export default Lampa;