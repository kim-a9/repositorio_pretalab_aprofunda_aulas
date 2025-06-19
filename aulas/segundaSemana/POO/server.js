class Cachorro {
    #nome;
    #raca;

    constructor(nome, raca){
        this.#nome = nome;
        this.raca = raca;
    };

    getNome() {
        return this.#nome;
    };

    setNome(novoNome) {
        if (novoNome.lenght >= 2) {
            this.#nome = novoNome;
        } else {
            console.log("Esse nome é muito curto");
        }
    };
    
    latir(){
        console.log("Au au!");
    };
};

const meuCachorro = new Cachorro("Pagu");
console.log(meuCachorro.getNome());

meuCachorro.setNome("Cristal");
console.log(meuCachorro.getNome());


//exercicio de herença
class Animal {
    constructor(nome){
        this.nome = nome;
    }
    fazerSom(){
        console.log("som genérico do animal");
    }
}


class Cachorro extends Animal {
    constructor(nome, raca){
        super(nome);
        this.raca = raca;
    }
    fazerSom(){
        console.log("Au au!");
    }
    correr(){
        console.log(`${this.nome} está correndo`);
    }
}

const meuAnimal = new Animal("Bicho");
meuAnimal.fazerSom();

const novoCachorro = new Cachorro("Charlotte");
novoCachorro.fazerSom();
novoCachorro.correr();

