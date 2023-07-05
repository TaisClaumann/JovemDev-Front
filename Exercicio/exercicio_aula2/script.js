function calculaImc(){
    const nome = document.getElementById("nome").value;
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;

    const imc = (peso/(altura*altura)).toFixed(2);
    const sexo = document.querySelector('input[name="sexo"]:checked').id;

    let msg = `Nome: ${nome}\nPeso: ${peso}\nAltura: ${altura}\nSexo: ${sexo}\nIMC: ${imc} -> `;

    if(sexo == "feminino"){
       msg += tabelaMulher(imc);
    }else {
       msg += tabelaHomem(imc);
    }

    document.getElementById("txtArea").value = msg;
}

function tabelaMulher(imc){
    if(imc < 19.2 ){
        return "Abaixo do peso";
    } else if(imc >= 19.2 && imc < 25.9){
        return "Peso ideal";
    } else if(imc >= 25.9 && imc < 27.4){
        return "Acima do peso ideal";
    } else if(imc >= 27.4 && imc < 32.4){
        return "Obesidade";
    }else {
        return "Obesidade Mórbida";
    }
}

function tabelaHomem(imc){
    if(imc < 20.8 ){
        return "Abaixo do peso";
    } else if(imc >= 20.8 && imc < 26.5){
        return "Peso ideal";
    } else if(imc >= 26.5 && imc < 27.9){
        return "Acima do peso ideal";
    } else if(imc >= 27.9 && imc < 31.2){
        return "Obesidade";
    }else {
        return "Obesidade Mórbida";
    }
}