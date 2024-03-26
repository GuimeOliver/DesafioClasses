class hero{
    constructor(hi, idade, tipo){
        this.heroi = hi
        this.idade = idade
        this.tipo = tipo 
        this.ataque = ""
        }
    selectClass(){
        if(this.tipo == "Mago"){
                this.ataque = "usou magia"
                console.log("voce seleciou a classe MAGO")
            }else if(this.tipo == "Guerreiro"){
                this.ataque = "usou espada"
                console.log("voce seleciou a classe GUERREIRO")   
            }else if(this.tipo === "Monge"){
                this.ataque = "usou artes marciais"
                console.log("voce seleciou a classe MONGE")
            }else{
                this.ataque = "usou shuriken"   
                console.log("voce seleciou a classe NINJA")
            }  
    }
    comeco(){
        console.log(`Ola ${this.heroi}, quanto tempo!!`)
        console.log(`Pelo que parece voce chegou bem longe, eu não consigo acreditar`)
        console.log(`Mas voce esta com sorte, esse desafio é bem facil`)
        console.log(`So precisa usar suas habilidades de ${this.tipo} para derrotar apenas um inimigo `)
        console.log("VAMOS COMEÇAR")
    }
    atacar(){
        console.log(`O ${this.tipo} ${this.heroi} ${this.ataque}!! `)
    }
    final(){
        console.log(`Parabens ${this.heroi}, voce venceu com seu poder de ${this.tipo}`)
        console.log("Esse desafio acaba aqui, mas sua jornada esta longe de acabar, EU CONFIO EM VOCE!! NÃO PERCA TEMPO!!")
        console.log("-_-_-_-_-_-_-_-_-_-_-_-_-_-_-")
    }
}

let purooso = new hero("PuroOso", 20 , "Guerreiro")
let braia = new hero("braia", 14, "Mago")


purooso.selectClass()
purooso.comeco()
purooso.atacar()
purooso.final()

braia.selectClass()
braia.comeco()
braia.atacar()
braia.final()
