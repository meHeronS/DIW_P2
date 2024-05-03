function Calc_soma() {
    alert("Olá, esta é a calculadora de somas!");

    // Pergunta ao usuário se deseja confirmar algo
    var confirmacao = confirm("Insira dois valores para somá-los ou cancele a operação");
    if (confirmacao) {
        alert("Você confirmou!");
        // Solicita um número ao usuário
        var numero1 = prompt("Digite o primeiro número:");
        var numero2 = prompt("Digite o segundo número:");
        var soma = parseInt(numero1) + parseInt(numero2);
        alert("A soma dos valores é = " + soma)
    } else {
        alert("Você cancelou!");
        alert("Operação não realizada!");
    }
}

function Calc_sub() {
    alert("Olá, esta é a calculadora de subtração!");

    // Pergunta ao usuário se deseja confirmar algo
    var confirmacao = confirm("Insira dois valores para subraí-los ou cancele a operação");
    if (confirmacao) {
        alert("Você confirmou!");
        // Solicita um número ao usuário
        var numero1 = prompt("Digite o primeiro número:");
        var numero2 = prompt("Digite o segundo número:");
        var subt = parseInt(numero1) - parseInt(numero2);
        alert("A subração dos valores é = " + subt)
    } else {
        alert("Você cancelou!");
        alert("Operação não realizada!");
    }
}

function Calc_mult() {
    alert("Olá, esta é a calculadora de multiplicação!");

    // Pergunta ao usuário se deseja confirmar algo
    var confirmacao = confirm("Insira dois valores para multiplicá-los ou cancele a operação");
    if (confirmacao) {
        alert("Você confirmou!");
        // Solicita um número ao usuário
        var numero1 = prompt("Digite o primeiro número:");
        var numero2 = prompt("Digite o segundo número:");
        var mult = parseInt(numero1) * parseInt(numero2);
        alert("A multiplicação dos valores é = " + mult)
    } else {
        alert("Você cancelou!");
        alert("Operação não realizada!");
    }
}

function Calc_div() {
    alert("Olá, esta é a calculadora de divisão!");

    // Pergunta ao usuário se deseja confirmar algo
    var confirmacao = confirm("Insira dois valores para dividí-los ou cancele a operação");
    if (confirmacao) {
        alert("Você confirmou!");
        // Solicita um número ao usuário
        var numero1 = prompt("Digite o primeiro número:");
        var numero2 = prompt("Digite o segundo número:");
        var soma = parseInt(numero1) / parseInt(numero2);
        alert("A divisão dos valores é = " + soma)
    } else {
        alert("Você cancelou!");
        alert("Operação não realizada!");
    }
}

function Calc_media() {
    alert("Olá, esta é a calculadora de médias!");

    // Pergunta ao usuário se deseja confirmar algo
    var confirmacao = confirm("Insira três valores para identificar a média entre eles ou cancele a operação");
    if (confirmacao) {
        alert("Você confirmou!");
        // Solicita um número ao usuário
        var numero1 = prompt("Digite o primeiro número:");
        var numero2 = prompt("Digite o segundo número:");
        var numero3 = prompt("Digite o segundo número:");


        // Converte os valores de string para número e calcula a soma
        var media = (parseInt(numero1) + parseInt(numero2)+ parseInt(numero3)) / 3;

        // Exibe o resultado
        alert("A media dos números é: " + media);
    } else {
        alert("Você cancelou!");
        alert("Operação não Realizada!");
    }
}