/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
this.Perceptron = function () {
    var network = this; //variavel network referenciando ela mesma
    this.bias = 1; //bias
    this.weights = {}; //variavel dos pesos
    this.learnRate = 0.15; //taxa de aprendizado da rede
    this.interactions = 1000; //numero de interações

    this.sigmoid = function (x) { //função de ativação sigmoide
        return (1 / (1 - Math.exp(-1 * x)));
    };

    this.init = function (learnRate, interactions) { //inicialização da rede passando parametros de taxa de aprendizagem e quantidade de interações
        network.learnRate = learnRate;
        network.interactions = interactions;
    };

    this.initWeights = function (num) { //função para criar os pesos iniciais randomicamente baseados no número de inputs
        bias = parseInt(Math.random() * 10);

        for (var i = 0; i < num; i++) {
            network.weights[i] = parseInt(Math.random() * 10);
        }
    };

    this.train = function (data) { //função de treinamento propriamente do perceptron. Faz as chamadas para a função de inicializar os pesos
        network.initWeights(data[0].inputs.length);
        var interaction = 0;
        var error = true;

        while (error && interaction < network.interactions) { //enquanto a rede apresentar erro ou não atingir um número máximo de interações vai executar o algoritmo de ajuste dos pesos
            //error = false;
            var difference = 0;

            for (var i = 0; i < data.length; i++) {
                var result = network.run(data[i].inputs); //chamando função de ativação, trazendo o resultado
                if (result != data[i].output) { //se o resultado não for esperado vai sinalizar um erro
                    error = true;
                    difference = data[i].output - result;
                    network.recalcWeights(difference, data[i].inputs); //chamando função de recalcular os pesos
                } else {
                    //error = false;
                }
            }
            console.log("Interaction: " + interaction + " - Error: " + difference.toFixed(12)); //log será criado com o número da interação e o erro gerado
            interaction++;
        }
    }

    //Função de recalcular os pesos
    this.recalcWeights = function (val, inputs) { //função de recalcular os pesos
        for (var j = 0; j < network.weights.length; j++) {
            network.weights[j] = network.weights[j] + network.learnRate * val * inputs[j];
        }
    }

    this.run = function (inputs) {
        var sum = 0;

        for (var j = 0; j < inputs.length; j++) {
            sum += inputs[j] * network.weights[j];
        }
        sum += network.bias;
        return network.sigmoid(sum);
    }
}


