class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }
    seApresentar(){
        console.log("Olá meu nome é " + this.nome, "tenho " + this.idade);
    }
    trabalhar(){
        console.log( this.nome  + " atua como  " + this.cargo);
    }
}


class Gerente extends Funcionario{
    constructor(nome, idade, departamento){
      super( nome, idade, 'Gerente')
      this.departamento = departamento;  
    }
    Gerenciar(){
        console.log(this.nome + " está gerenciando o departamento de " + this.departamento);
    }
}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, linguagem){
        super(nome, idade, 'Desenvolvedor')
        this.linguagem = linguagem;
    }
    Programar(){
        console.log (this.nome + " está programando em " + this.linguagem);
    }
}

 DesenvolvedorMateus = new Desenvolvedor("Msteus Marques", "23 anos", "JavaScript");
 GerenteMateus = new Gerente("Mateus Marques","23 anos","TI");
 

 GerenteMateus.seApresentar();