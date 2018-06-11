/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
this.Perceptron = function (){
    var network = this;
    this.bias = 1;
    this.weights = {};
    this.learnRate = 0.15;
    this.interactions = 1000;
    
    this.sigmoid = function (x){
        return (1/(1-Math.exp(-1*x)));
    };
    
    this.init = function (learnRate, interactions){
        network.learnRate = learnRate;
        network.interaction = interactions;
    };
    
    this.initWeights = function (num){
      bias = parseInt(Math.random()*10);
      
      for(var i=0; i< num; i++){
          network.weigths[i] = parseInt(Math.random()*10);
      }
    };
    
    this.train = function (){
        network.initWeights(data[0].input.length);
        var interactions = 0;
        var error = true;
        
        while(var i=0; i<data.length; i++){
            
        }
    }
};


