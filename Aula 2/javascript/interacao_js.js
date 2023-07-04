function enviaForm() {

    var nome = document.getElementById("txtNome").value;
    var idade = parseInt(document.getElementById("txtIdade").value);
    console.log(nome + " " + idade);
    var msg = nome + "\n" + idade;

    document.getElementById("txtDados").value = msg;
    return false;
}
