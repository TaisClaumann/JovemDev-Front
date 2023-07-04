function mensagem() {
    var nome = "Clávison";
    var peso = 64;
    var altura = 1.75;

    console.log(nome + " " + peso + " " + altura);

   var obj = new Object();
   obj.nome = "Maria";
   obj.idade = 14;

   console.log(obj);

   var obj2 = new Object();
   obj2.nome = "teste";
   obj2.peso = 56;
   obj2.altura = 1.5;

   console.log("IMC: " + (obj2.peso/obj2.altura * obj2.altura));

   var frutas = ["Maçã", "Laranja", "Banana"];
   console.log(frutas[1]);
   frutas.push("Goiaba");
}

function segunda() {

    var teste1;
    console.log(teste1);

    var teste2 = null;
    console.log(teste2);

    var n = 20;
    var str = "Texte";
    console.log(n * str);

    console.log(2e3);
    console.log(2e4);
    console.log(2e308);
}

function tiposDados(){
    console.log("37" - 7);
    console.log((+"1.1") + (+"1.1"));
    console.log("1.1"+"1.1");

    var boleano = 123.1;
    var novoNumero = parseInt(boleano);
    console.log(novoNumero);

    var boleanoString = "";
    let b = Boolean(boleanoString);
    if(b == true){
        console.log("Verdadeiro " + b);
    } else {
        console.log("Falso " + b);
    }


}