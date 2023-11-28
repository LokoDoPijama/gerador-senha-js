const ttbSenha = document.getElementById('ttbSenha');
const btnCopiar = document.getElementById('btnCopiar');
const ttbTamanhoSenha = document.getElementById('ttbTamanhoSenha');
const checkMaiusculas = document.getElementById('checkMaiusculas');
const checkMinusculas = document.getElementById('checkMinusculas');
const checkNumeros = document.getElementById('checkNumeros');
const checkSimbolos = document.getElementById('checkSimbolos');
const btnGerarSenha = document.getElementById('btnGerarSenha');


function escreverMaiuscula() {
    var codigo = Math.floor(Math.random() * (90 - 65 + 1) + 65);
    return String.fromCharCode(codigo);
}

function escreverMinuscula() {
    var codigo = Math.floor(Math.random() * (122 - 97 + 1) + 97);
    return String.fromCharCode(codigo);
}

function escreverNumero() {
    var codigo = Math.floor(Math.random() * (57 - 48 + 1) + 48);
    return String.fromCharCode(codigo);
}

function escreverSimbolo() {
    var codigo = Math.floor(Math.random() * (47 - 33 + 1) + 33);
    return String.fromCharCode(codigo);
}

btnGerarSenha.addEventListener("click", function(){

    // Definição dos grupos de caracteres selecionados

    var gruposSelecionados = [];

    if (checkMaiusculas.checked) {
        gruposSelecionados.push(0);
    }
    
    if (checkMinusculas.checked) {
        gruposSelecionados.push(1);
    }
    
    if (checkNumeros.checked) {
        gruposSelecionados.push(2);
    }
    
    if (checkSimbolos.checked) {
        gruposSelecionados.push(3);
    }


    // Validação das inputs

    var erros = "";

    if (gruposSelecionados.length == 0) {
        erros += "Nenhum caractere incluído!\n";
    }

    if (ttbTamanhoSenha.value < 1) {
        erros += "Selecione um tamanho de senha maior que 0\n";
    }

    if (ttbTamanhoSenha.value > 50) {
        erros += "Tamanho de senha maior que 50????????\n";
    }

    if (!Number.isInteger(Number(ttbTamanhoSenha.value))) {
        erros += "Selecione um tamanho de senha válido\n";
    }
    
    if (erros != "") {
        alert(erros);
        return;
    }


    // Lógica de geração de senha

    var senha = "";

    for (let i = 0; i < ttbTamanhoSenha.value; i++) {

        // grupo de caracteres 0: Maiúsculas
        // grupo de caracteres 1: Minúsculas
        // grupo de caracteres 2: Números
        // grupo de caracteres 3: Símbolos

        var grupoCaracteres = Math.floor(Math.random() * (3 - 0 + 1));

        while (!gruposSelecionados.includes(grupoCaracteres)) {
            var grupoCaracteres = Math.floor(Math.random() * (3 - 0 + 1));
        }

        switch (grupoCaracteres) {
            case 0:
                senha += escreverMaiuscula();
                break;
            
            case 1:
                senha += escreverMinuscula();
                break;

            case 2:
                senha += escreverNumero();
                break;

            case 3:
                senha += escreverSimbolo();
                break;
        
            default:
                console.log("não");
                break;
        }

    }

    ttbSenha.value = senha;

});

btnCopiar.addEventListener("click", function(){

    if (ttbSenha.value != "") {
        navigator.clipboard.writeText(ttbSenha.value);
    }
    else {
        alert("Nada para copiar");
    }

})