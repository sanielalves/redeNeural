// create the network

function redesNeuraisTeste() {
    const {Layer, Network} = window.synaptic;

    var inputLayer = new Layer(2);
    var hiddenLayer = new Layer(3);
    var outputLayer = new Layer(1);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    var myNetwork = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });

// train the network - learn XOR
    var learningRate = .3;
    for (var i = 0; i < 20000; i++)
    {
        // 0,0 => 0
        myNetwork.activate([0, 0]);
        myNetwork.propagate(learningRate, [0]);

        // 0,1 => 1
        myNetwork.activate([0, 1]);
        myNetwork.propagate(learningRate, [1]);

        // 1,0 => 1
        myNetwork.activate([1, 0]);
        myNetwork.propagate(learningRate, [1]);

        // 1,1 => 0
        myNetwork.activate([1, 1]);
        myNetwork.propagate(learningRate, [0]);
    }

// test the network
    console.log(myNetwork.activate([0, 0])); // [0.015020775950893527]
    console.log(myNetwork.activate([0, 1])); // [0.9815816381088985]
    console.log(myNetwork.activate([1, 0])); // [0.9871822457132193]
    console.log(myNetwork.activate([1, 1])); // [0.012950087641929467]
}

function inicializarNeuronio() {

    /*Inicialização do neurônio*/
    document.getElementById("titulo1").innerHTML = "<h3>Passo 1: Inicializando Neurônio</h3>";

    //var entradas = { x1:Math.random(), x2:Math.random(), x3:Math.random()};
    var entradas = {x1: 1, x2: 0, x3: 1};
    document.getElementById("entradas").innerHTML = "<h5>Sinais de entrada</h5>";
    document.getElementById("entradax1").innerHTML = "x1: " + entradas.x1;
    document.getElementById("entradax2").innerHTML = "x2: " + entradas.x2;
    document.getElementById("saidaEsperada").innerHTML = "x3: " + entradas.x3;

    var pesosEntrada = {w14: 0.2, w15: -0.3, w24: 0.4, w25: 0.1, w34: -0.5, w35: 0.2, w46: -0.3, w56: -0.2};
    document.getElementById("pesosEntradas").innerHTML = "<h5>Pesos sinápticos</h5>";
    document.getElementById("pesoEntradaW14").innerHTML = "W14: " + pesosEntrada.w14;
    document.getElementById("pesoEntradaW15").innerHTML = "W15: " + pesosEntrada.w15;
    document.getElementById("pesoEntradaW24").innerHTML = "W24: " + pesosEntrada.w24;
    document.getElementById("pesoEntradaW25").innerHTML = "W25: " + pesosEntrada.w25;
    document.getElementById("pesoEntradaW34").innerHTML = "W34: " + pesosEntrada.w34;
    document.getElementById("pesoEntradaW35").innerHTML = "W35: " + pesosEntrada.w35;
    document.getElementById("pesoEntradaW46").innerHTML = "W45: " + pesosEntrada.w46;
    document.getElementById("pesoEntradaW56").innerHTML = "W56: " + pesosEntrada.w56;

    var bayes = {b4: -1, b5: -1, b6: -1, o4: -0.4, o5: 0.2, o6: 0.1};
    document.getElementById("bayes").innerHTML = "<h5>Bayes e Pesos sinápticos bayes</h5>";
    document.getElementById("pesoBayesO4").innerHTML = "<strong> Bayes4: </strong> " + bayes.b4 + "  |  <strong> O4: </strong>" + bayes.o4;
    document.getElementById("pesoBayesO5").innerHTML = "<strong> Bayes5: </strong> " + bayes.b5 + "  |  <strong> O5: </strong> " + bayes.o5;
    document.getElementById("pesoBayesO6").innerHTML = "<strong> Bayes6: </strong> " + bayes.b6 + "  |  <strong> O6: </strong> " + bayes.o6;

    document.getElementById("titulo2").innerHTML = "<h3>Passo 2: Ativação do Neurônio</h3>";
    //document.getElementById("buttonContinuar").innerHTML = "<button onClick='redesNeurais2()' class='button button-primary form-control'>Passo 2: Ativação do Neurônio -></button>";
    //for (var i = 0; i === 3; i++) {
        ativacaoNeuronio(entradas, pesosEntrada, bayes);
        alert(entradas.x1.length);
    //}
}

function ativacaoNeuronio(entradas, pesosEntrada, bayes) { //Calculando camada oculta
    var euler = 2.718281828;
    var f = (entradas.x1 * pesosEntrada.w14) + (entradas.x2 * pesosEntrada.w24) + (entradas.x3 * pesosEntrada.w34) - (bayes.b4 * bayes.o4);
    var y = (1 / (1 + Math.pow(euler, -(f))));
    document.getElementById("y3").innerHTML = "y3: " + y;
}
