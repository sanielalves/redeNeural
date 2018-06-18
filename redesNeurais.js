/*
 To change this license header, choose License Headers in Project Properties.
 To change this template file, choose Tools | Templates
 and open the template in the editor.
 
 Created on : 11/06/2018, 00:56:52
 Author     : Saniel Barros Alves
 */

function inicializarNeuronio() {
    var x1 = document.getElementById("x1").value;
    var x2 = document.getElementById("x2").value;
    var y = document.getElementById("y").value;

    var Q3 = document.getElementById("Q3").value;
    var Q4 = document.getElementById("Q4").value;
    var Q5 = document.getElementById("Q5").value;
    var aprendizado = document.getElementById("aprendizado").value;
    var epocas = document.getElementById("quantEpocas").value;

    /*Inicialização do neurônio*/
    document.getElementById("titulo1").innerHTML = "<h3>Passo 1: Inicializando Neurônio</h3>";
    document.getElementById("taxaAprendizado").innerHTML = "<h5>Taxa de Aprendizado: </h5>" + aprendizado;

    //var entradas = { x1:Math.random(), x2:Math.random(), x3:Math.random()};
    var entradas = {x1: x1, x2: x2, y: y};
    var pesosEntrada = {w13: 0.5, w14: 0.9, w23: 0.4, w24: 1.0, w35: -1.2, w45: 1.1};
    var bayes = {b3: Q3, b4: Q4, b5: Q5, o3: 0.8, o4: -0.1, o5: 0.3};
    document.getElementById("pesosIniciais").innerHTML = "Pesos Sinápticos Iniciais: W13: " + pesosEntrada.w13 + " | W14: " + pesosEntrada.w14 + " | W23: " + pesosEntrada.w23 + " | W24: " + pesosEntrada.w24 + " | W35: " + pesosEntrada.w35 + " | W45: " + pesosEntrada.w45 + " | Q3: " + bayes.o3 + " | Q4: " + bayes.o4 + " | Q5: " + bayes.o5;

    var saidas = ativacaoNeuronio(entradas, pesosEntrada, bayes);
    var interacao = treinarNeuronio(saidas, entradas, pesosEntrada, bayes, aprendizado);
    pesosEntrada = {w13: interacao.w13, w14: interacao.w14, w23: interacao.w23, w24: interacao.w24, w35: interacao.w35, w45: interacao.w45};
    bayes = {b3: -1, b4: -1, b5: -1, o3: interacao.o3, o4: interacao.o4, o5: interacao.o5};

    document.getElementById("entradas").innerHTML = "<h5>Sinais de entrada</h5>";
    document.getElementById("entradax1").innerHTML = "x1: " + entradas.x1;
    document.getElementById("entradax2").innerHTML = "x2: " + entradas.x2;
    document.getElementById("saidaEsperada").innerHTML = "y: " + entradas.y;

    document.getElementById("pesosEntradas").innerHTML = "<h5>Pesos sinápticos</h5>";
    document.getElementById("pesoEntradaW13").innerHTML = "W13: " + pesosEntrada.w13;
    document.getElementById("pesoEntradaW14").innerHTML = "W14: " + pesosEntrada.w14;
    document.getElementById("pesoEntradaW23").innerHTML = "W23: " + pesosEntrada.w23;
    document.getElementById("pesoEntradaW24").innerHTML = "W24: " + pesosEntrada.w24;
    document.getElementById("pesoEntradaW35").innerHTML = "W35: " + pesosEntrada.w35;
    document.getElementById("pesoEntradaW45").innerHTML = "W45: " + pesosEntrada.w45;

    document.getElementById("bayes").innerHTML = "<h5>Bayes e Pesos sinápticos bayes</h5>";
    document.getElementById("pesoBayesO3").innerHTML = "<strong> Bayes3: </strong> " + bayes.b3 + "  |  <strong> O3: </strong>" + bayes.o3;
    document.getElementById("pesoBayesO4").innerHTML = "<strong> Bayes4: </strong> " + bayes.b4 + "  |  <strong> O4: </strong> " + bayes.o4;
    document.getElementById("pesoBayesO5").innerHTML = "<strong> Bayes5: </strong> " + bayes.b5 + "  |  <strong> O5: </strong> " + bayes.o5;

    var contEpoca = 1;
    document.getElementById("titulo4").innerHTML = "<h3>Passo 4: Interação</h3>";
    document.getElementById("interacao").innerHTML = "Quantidade de interações feitas: " + contEpoca;
    document.getElementById("log").innerHTML = "<h6><strong>As saídas de cada época podem ser vistas no log. Veja no console em ferramentas de desenvolvedor.</strong></h6>";
    document.getElementById("limpar").innerHTML = "LIMPAR TUDO";

    while (saidas.y5 > y) {
        //alert("w13: " + pesosEntrada.w13 + " - w14: " + pesosEntrada.w14 + " - w23: " + pesosEntrada.w23 + " - w24: " + pesosEntrada.w24 + " - w35: " + pesosEntrada.w35 + " - w45: " + pesosEntrada.w45);
        document.getElementById("interacao").innerHTML = "Quantidade de interações feitas: " + contEpoca;
        console.log("Épocas: " + contEpoca + " | Saída: " + saidas.y5);
        if (contEpoca == epocas) {
            break;
        }

        saidas = ativacaoNeuronio(entradas, pesosEntrada, bayes);
        interacao = treinarNeuronio(saidas, entradas, pesosEntrada, bayes, aprendizado);
        pesosEntrada = {w13: interacao.w13, w14: interacao.w14, w23: interacao.w23, w24: interacao.w24, w35: interacao.w35, w45: interacao.w45};
        bayes = {b3: -1, b4: -1, b5: -1, o3: interacao.o3, o4: interacao.o4, o5: interacao.o5};

        document.getElementById("entradax1").innerHTML = "x1: " + entradas.x1;
        document.getElementById("entradax2").innerHTML = "x2: " + entradas.x2;
        document.getElementById("saidaEsperada").innerHTML = "y: " + entradas.y;
        document.getElementById("pesoEntradaW13").innerHTML = "W13: " + pesosEntrada.w13;
        document.getElementById("pesoEntradaW14").innerHTML = "W14: " + pesosEntrada.w14;
        document.getElementById("pesoEntradaW23").innerHTML = "W23: " + pesosEntrada.w23;
        document.getElementById("pesoEntradaW24").innerHTML = "W24: " + pesosEntrada.w24;
        document.getElementById("pesoEntradaW35").innerHTML = "W35: " + pesosEntrada.w35;
        document.getElementById("pesoEntradaW45").innerHTML = "W45: " + pesosEntrada.w45;
        document.getElementById("pesoBayesO3").innerHTML = "<strong> Bayes3: </strong> " + bayes.b3 + "  |  <strong> O3: </strong>" + bayes.o3;
        document.getElementById("pesoBayesO4").innerHTML = "<strong> Bayes4: </strong> " + bayes.b4 + "  |  <strong> O4: </strong> " + bayes.o4;
        document.getElementById("pesoBayesO5").innerHTML = "<strong> Bayes5: </strong> " + bayes.b5 + "  |  <strong> O5: </strong> " + bayes.o5;


        contEpoca = contEpoca + 1;
    }
}

function ativacaoNeuronio(entradas, pesosEntrada, bayes) { //Calculando saídas da camada oculta e de saída
    document.getElementById("titulo2").innerHTML = "<h3>Passo 2: Ativação do Neurônio</h3>";
    document.getElementById("camadasOcultas").innerHTML = "<h5>Camada Oculta</h5>";
    var euler = 2.718281828;
    var sigmoid3 = ((entradas.x1 * pesosEntrada.w13) + (entradas.x2 * pesosEntrada.w23)) + (bayes.b3 * bayes.o3);
    var y3 = (1 / (1 + Math.pow(euler, -(sigmoid3))));
    document.getElementById("y3").innerHTML = "y3: " + y3;

    var sigmoid4 = ((entradas.x1 * pesosEntrada.w14) + (entradas.x2 * pesosEntrada.w24)) + (bayes.b4 * bayes.o4);
    var y4 = (1 / (1 + Math.pow(euler, -(sigmoid4))));
    document.getElementById("y4").innerHTML = "y4: " + y4;

    document.getElementById("camadaSaida").innerHTML = "<h5>Camada de Saída</h5>";
    var sigmoid5 = ((y3 * pesosEntrada.w35) + (y4 * pesosEntrada.w45)) + (bayes.b5 * bayes.o5);
    var y5 = (1 / (1 + Math.pow(euler, -(sigmoid5))));
    document.getElementById("y5").innerHTML = "<strong>y5: " + y5 + "</strong>";

    var saidas = {y3: y3, y4: y4, y5: y5};
    return saidas;
}

function treinarNeuronio(saidas, entradas, pesosEntrada, bayes, taxaAprendizado) {
    document.getElementById("titulo3").innerHTML = "<h3>Passo 3: Treinar os pesos do neurônio</h3>";
    //Calculando erro na camada de saída.
    var erroy5 = entradas.y - saidas.y5; //(Saída desejada - Saída calculada)
    var deltay5 = saidas.y5 * [1 - saidas.y5] * [erroy5]; // Substituindo na formula do delta para definir o erro do neurônio 5

    //Calculando correção do peso na camada de saída
    var cW35 = taxaAprendizado * saidas.y3 * (deltay5);
    var cW45 = taxaAprendizado * saidas.y4 * (deltay5);
    var cO5 = taxaAprendizado * (-1) * (deltay5);

    //Calculando erro na camada oculta
    var erroO3 = saidas.y3 * [1 - saidas.y3] * (deltay5 * pesosEntrada.w35);
    var erroO4 = saidas.y4 * [1 - saidas.y4] * (deltay5 * pesosEntrada.w45);

    //Calculando correção dos pesos na camada oculta
    var cW13 = taxaAprendizado * entradas.x1 * erroO3;
    var cW23 = taxaAprendizado * entradas.x2 * erroO3;
    var cO3 = taxaAprendizado * (-1) * (erroO3);

    var cW14 = taxaAprendizado * entradas.x1 * erroO4;
    var cW24 = taxaAprendizado * entradas.x2 * erroO4;
    var cO4 = taxaAprendizado * (-1) * (erroO4);

    //Atualizar os pesos do neurônio de saída
    var w35 = pesosEntrada.w35 + cW35;
    var w45 = pesosEntrada.w45 + cW45;
    var o5 = bayes.o5 + cO5;

    //Atualizar os pesos do neurônio ocultos
    var w13 = pesosEntrada.w13 + cW13;
    var w23 = pesosEntrada.w23 + cW23;
    var o3 = bayes.o3 + cO3;

    var w14 = pesosEntrada.w14 + cW14;
    var w24 = pesosEntrada.w24 + cW24;
    var o4 = bayes.o4 + cO4;

    document.getElementById("camadaSaida2").innerHTML = "<h5>Camada de Saída</h5>";
    document.getElementById("erroSaida").innerHTML = "<strong>Erro camada de saída (O5):</strong> " + deltay5;
    document.getElementById("correcaoPesoW35").innerHTML = "<strong>Correção peso W35:</strong> " + cW35;
    document.getElementById("correcaoPesoW45").innerHTML = "<strong>Correção peso W45:</strong> " + cW45;
    document.getElementById("correcaoPesoO5").innerHTML = "<strong>Correção peso O5:</strong> " + cO5;

    document.getElementById("camadasOcultas2").innerHTML = "<h5>Camada Oculta</h5>";
    document.getElementById("erroPesoO3").innerHTML = "<strong>Erro camada oculta (O3):</strong> " + erroO3;
    document.getElementById("erroPesoO4").innerHTML = "<strong>Erro camada oculta (O4):</strong> " + erroO4;
    document.getElementById("correcaoPesoW13").innerHTML = "<strong>Correção peso W13:</strong> " + cW13;
    document.getElementById("correcaoPesoW23").innerHTML = "<strong>Correção peso W23:</strong> " + cW23;
    document.getElementById("correcaoPesoO3").innerHTML = "<strong>Correção peso O3:</strong> " + cO3;
    document.getElementById("correcaoPesoW14").innerHTML = "<strong>Correção peso W14:</strong> " + cW14;
    document.getElementById("correcaoPesoW24").innerHTML = "<strong>Correção peso W24:</strong> " + cW24;
    document.getElementById("correcaoPesoO4").innerHTML = "<strong>Correção peso O4:</strong> " + cO4;

    return interacao = {w13: w13, w14: w14, w23: w23, w24: w24, w35: w35, w45: w45, o3: o3, o4: o4, o5: o5};
}
