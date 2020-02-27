function mostrar() {
    var nome = document.getElementById("nome").value

    var idade = document.getElementById("idade").value

    var nascimento = document.getElementById("nascimento").value

    // 2020/02/27
    // 12345678910
    var dia = nascimento.substring(8, 10)
    var mes = nascimento.substring(5, 7)
    var ano = nascimento.substring(0, 4)
    nascimento = dia + "/" + mes + "/" + ano

    var observacao = document.getElementById("observacao").value

    var estados = document.getElementById("estados").value

    var senha = document.getElementById("senha").value

    var sexo = document.querySelector('input[name="sexo"]:checked').value

    var almoco = document.getElementById("almoco").checked
    if (almoco == true) {
        almoco = "sim"
    }
    else {
        almoco = "não"
    }

    var valetransporte = document.getElementById("valetransporte").checked
    if (valetransporte == true) {
        valetransporte = "sim"
    }
    else {
        valetransporte = "não"
    }

    alert("Nome: " + nome + "\n" + "Idade: " + idade + "\n" + "Data Nascimento: "
        + nascimento + "\nObservação: " + observacao + "\nEstado: " + estados + "\nSenha: "
        + senha + "\nSexo: " + sexo + "\nAlmoço: " + almoco + "\nVale Transporte: " + valetransporte)
}