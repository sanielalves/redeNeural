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
        <title></title>
    </head>
    <body>
        <?php
        // put your code here
        ?>
        <div class="container">
            <div class="row">
                <div class="col-md-12"><button type="button" onclick="redesNeurais1()" class="button button-primary form-control">Iniciar Neurônio</button></div>
                <div class="col-md-12"><p id="titulo1"></p></div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <p id="entradas"></p>
                    <p id="entradax1"></p>
                    <p id="entradax2"></p>             
                    <p id="entradax3"></p>
                </div>
                <div class="col-md-4">
                    <p id="pesosEntradas"></p>
                    <p id="pesoEntradaW14"></p>
                    <p id="pesoEntradaW15"></p>             
                    <p id="pesoEntradaW24"></p>
                    <p id="pesoEntradaW25"></p>
                    <p id="pesoEntradaW34"></p>             
                    <p id="pesoEntradaW35"></p>
                    <p id="pesoEntradaW46"></p>
                    <p id="pesoEntradaW56"></p>    
                </div>
                <div class="col-md-4">
                    <p id="pesosBayes"></p>
                    <p id="pesoBayesO4"></p>
                    <p id="pesoBayesO5"></p>
                    <p id="pesoBayesO6"></p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12"><p id="titulo2"></p></div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p id="buttonContinuar"></p>
                </div>
            </div>
        </div>
    </body>
</html>
