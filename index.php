<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.

    Created on : 11/06/2018, 00:56:52
    Author     : Saniel Barros Alves
-->
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <script type="text/javascript" src="redesNeurais.js"></script>
        <!--<script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>-->
        <!--<script src="Perceptron Simples.js" type="text/javascript"></script>-->
        <title>Redes neurais</title>
    </head>
    <body>
        <?php
        // put your code here
        ?>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <input id="x1" type="text" value="1" placeholder="x1"/>
                    <input id="x2" type="text" value="1" placeholder="x2"/>
                    <input id="y" type="text" value="0" placeholder="y"/> 
                    <input id="Q3" type="text" value="-1" placeholder="Q3"/>   
                    <input id="Q4" type="text" value="-1" placeholder="Q4"/>   
                    <input id="Q5" type="text" value="-1" placeholder="Q5"/>   
                </div>
                <div class="col-md-12">
                    <br>
                    <img id='img' src="img-rede-neural.png" id="img">
                </div>
                <div class="col-md-12" id="botao">
                    <div class="col-md-12"><h6>Taxa de aprendizagem</h6><input class="form-control inputs" id="aprendizado" type="text" value="0.1" placeholder="Taxa de aprendizado"/></div><br>
                    <div class="col-md-12"><h6>Quantidade máxima de épocas</h6><input class="form-control inputs" id="quantEpocas" type="text" value="300" placeholder="Quantidade de épocas"/></div>
                    <br>
                    <a href="#pesosIniciais"><button type="button" onclick="inicializarNeuronio()" class="button button-primary form-control">Iniciar Neurônio</button></a>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-md-12"><h6 id="pesosIniciais" class="alinhar"></h6></div>
                <div class="col-md-12"><br><p id="titulo1"></p></div>
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
                    <p id="correcaoPesoO5"></p>
                    <p id="correcaoPesoW35"></p>
                    <p id="correcaoPesoW45"></p>
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
                <p class="col-md-12" id="titulo4"></p>
                <div class="col-md-12" id="interacao"></div>
                <br/><br/>
                <div class="col-md-12 alinhar" id="log"></div>
                <div class="col-md-12 alinhar"><strong><a href="index.php" id="limpar"></strong></a></div>
            </div>
        </div>
    </body>
</html>
