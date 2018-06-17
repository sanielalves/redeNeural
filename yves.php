<?php
/**
 * Created by PhpStorm.
 * User: Yves ClÃªuder
 * Date: 11/06/2018
 * Time: 08:08
 */

// Atribuindo os valores

// Inputs
GLOBAL $I;
$I = [];
$I[1] = 1;
$I[2] = 1;

// Criando um array vazio para comeÃ§ar a atribuir os valores de W;
GLOBAL $W;
$W = [];
$W[1][3] = 3.1;
$W[1][4] = 2.0;
// Neuronio 2
$W[2][3] = 3.6;
$W[2][4] = 5.145;
// Neuronio 3
$W[3][5] = -9.1;
// Neuronio 4
$W[4][5] = 8.1;

// NÃ£o lembro o que Ã© o O, porÃ©m tenho que atribuir valores a eles.
GLOBAL $O;
$O = [];
$O[3] = 7.3061;
$O[4] = 2.8441;
$O[5] = 4.5589;

calculandoNeuronios();

function calculandoNeuronios() {
    GLOBAL $W;
    GLOBAL $I;
    GLOBAL $O;
    $i = 0;
    $FuncaoO5 = 1;
    while($FuncaoO5 > 0.1) {

        // Oi = F(W1i * I1 + W2i * I2 + W3i * I3 - Oi) ...... Oi = (Oi * -1)
        // F(x) = 1/(1+e-x)

        // Calculando neuronio 3
        $O3 = ($W[1][3] * $I[1]) + ($W[2][3] * $I[2]) - ($O[3]);
        $FuncaoO3 = 1/(1 + pow(2.7182, -($O3)));
        //echo "Neuronio 3: ".$FuncaoO3;
        //echo "<br />";

        // Calculando neuronio 4
        $O4 = ($W[1][4] * $I[1]) + ($W[2][4] * $I[2]) - ($O[4]);
        $FuncaoO4 = 1/(1 + pow(2.7182, -($O4)));
        //echo "Neuronio 4: ".$FuncaoO4;
        //echo "<br />";

        // Calculando neuronio 5
        $O5 = ($W[3][5] * $FuncaoO3) + ($W[4][5] * $FuncaoO4) - ($O[5]);
        $FuncaoO5 = 1/(1 + pow(2.7182, -($O5)));
        echo "Neuronio 5: ".$FuncaoO5;
        echo "<br />";

        // Calculando os valores do neuronios, agora vamos calcular os erros.
        // Ei = Deltai(1 - Deltai) * (Ti - Deltai)

        $E5 = $FuncaoO5 * (1 - $FuncaoO5) * (1 - $FuncaoO5); // Vamos chamar de Primeiro Erro (Erro1);
        //echo "Primeiro erro do neuronio 5: ".$E5;
        // echo "<br />";

        // Calculando os erros das camadas intermediÃ¡rias.
        // Ei = Oi(1 - Oi) * (Ei * Wi1 + E2 * Wi2 + E3 * Wi3)
        $E3 = $FuncaoO3 * (1 - $FuncaoO3) * ($E5 * $W[3][5]); // Vamos chamar de Segundo Erro (Erro2);
        $E4 = $FuncaoO4 * (1 - $FuncaoO4) * ($E5 * $W[4][5]); // Vamos chamar de Terceiro Erro (Erro3);
        // echo "Segundo erro do neuronio 3: ".$E3;
        // echo "<br />";
        // echo "Terceiro erro do neuronio 4: ".$E4;
        // echo "<br />";
        //  echo "Novos valores";
        // echo "<br />";
        // Recalculando os pesos
        // Novo - Wij = Velho - Wij * Ej * Oi;

        $W[3][5] = $W[3][5] - (0.1 * $E5 * $FuncaoO3);
        $W[4][5] = $W[4][5] - (0.1 * $E5 * $FuncaoO4);

        $W[1][3] = $W[1][3] - (0.1 * $E3 * $I[1]);
        $W[1][4] = $W[1][4] - (0.1 * $E4 * $I[1]);

        $W[2][3] = $W[2][3] - (0.1 * $E3 * $I[2]);
        $W[2][4] = $W[2][4] - (0.1 * $E4 * $I[2]);

        $O[3] = $O[3] - 0.1 * $E3;
        $O[4] = $O[4] - 0.1 * $E4;
        $O[5] = $O[5] - 0.1 * $E5;

        /* echo "W1,3: ".$W[1][3]."<br />";
         echo "W1,4: ".$W[1][4]."<br />";
         echo "W2,3: ".$W[2][3]."<br />";
         echo "W2,4: ".$W[2][4]."<br />";
         echo "W3,5: ".$W[3][5]."<br />";
         echo "W4,5: ".$W[4][5]."<br />";
         echo "O3: ".$O[3]."<br />";
         echo "O4: ".$O[4]."<br />";
         echo "O5: ".$O[5]."<br />";
         echo "<br />";
        */
        $i++;
        echo "Ciclo ".$i."<br />";
        echo "-----------------------------------------------------------------------------------------";
        echo "<br />";
    }

}