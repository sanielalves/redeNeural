<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <script type="text/javascript" src="redesNeurais.js"></script>
        <script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
        <script src="Perceptron Simples.js" type="text/javascript"></script>
        <title>Redes neurais</title>
        <script>
            var training_sets = [//entradas e suas respectivas saídas para o treinamento da rede
                {inputs: [10, 100], output: 0},
                {inputs: [17, 90], output: 0},
                {inputs: [17, 40], output: 0},
                {inputs: [22, 25], output: 1},
                {inputs: [24, 30], output: 1},
                {inputs: [50, 10], output: 1},
            ];

            var neuron = new Perceptron(); //instanciando a função Perceptron e inicializando com valor de taxa de aprendizado e interações
            neuron.init(0.15, 1000);
            neuron.train(training_sets);

            console.log(neuron.run([30, 32]));
        </script>
    </head>
    <body>
        <?php
        // put your code here
        ?>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <input class="form-control" id="x1" type="text" value="1" placeholder="Entrada x1. Se não informar o valor assumido será 1"/>
                    <input class="form-control" id="x2" type="text" value="1" placeholder="Entrada x2. Se não informar o valor assumido será 1"/>
                    <input class="form-control" id="y" type="text" value="0" placeholder="Valor esperado y. Se não informar o valor assumido será 0"/>            
                </div>
                <div class="col-md-12">
                    <img src="img-rede-neural.png" id="img">
                </div>
                <div class="col-md-12" id="botao">
                    <div class="col-md-12"><button type="button" onclick="inicializarNeuronio()" class="button button-primary form-control">Iniciar Neurônio</button></div>
                    <div class="col-md-12"><br><p id="titulo1"></p></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <p id="entradas"></p>
                    <p id="entradax1"></p>
                    <p id="entradax2"></p>             
                    <p id="saidaEsperada"></p>
                </div>
                <div class="col-md-3">
                    <p id="pesosEntradas"></p>
                    <p id="pesoEntradaW13"></p>
                    <p id="pesoEntradaW14"></p>             
                    <p id="pesoEntradaW23"></p>
                    <p id="pesoEntradaW24"></p>
                    <p id="pesoEntradaW35"></p>             
                    <p id="pesoEntradaW45"></p>   
                </div>
                <div class="col-md-3">
                    <p id="bayes"></p>
                    <p id="pesoBayesO3"></p>
                    <p id="pesoBayesO4"></p>
                    <p id="pesoBayesO5"></p>
                </div>
                <div class="col-md-3">
                    <p id="taxaAprendizado"></p>

                </div>
            </div>
            <div class="row">
                <div class="col-md-12"><p id="titulo2"></p></div>
                <div class="col-md-6">
                    <p id="camadasOcultas"></p>
                    <p id="y3"></p>
                    <p id="y4"></p>
                </div>
                <div class="col-md-6">
                    <p id="camadaSaida"></p>
                    <p id="y5"></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12"><p id="titulo3"></p></div>
                <div class="col-md-6">
                    <p id="camadaSaida2"></p>
                    <p id="erroSaida"></p>
                    <p id="correcaoPesoW35"></p>
                    <p id="correcaoPesoW45"></p>
                    <p id="correcaoPesoO5"></p>
                </div>
                <div class="col-md-3">
                    <p id="camadasOcultas2"></p>
                    <p id="erroPesoO3"></p>
                    <p id="erroPesoO4"></p>
                    <p id="correcaoPesoO3"></p>
                    <p id="correcaoPesoO4"></p>

                </div>
                <div class="col-md-3">
                    <br>
                    <p id="correcaoPesoW13"></p>
                    <p id="correcaoPesoW23"></p>
                    <p id="correcaoPesoW14"></p>
                    <p id="correcaoPesoW24"></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12"><p id="titulo4"></p></div>
                <div class="col-md-12"><div id="interacao"></div></div>
            </div>
        </div>
    </body>
</html>
