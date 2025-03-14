<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Simples</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .calculadora {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        input, select, button {
            margin: 10px 0;
            padding: 10px;
            font-size: 16px;
            width: 100%;
        }
        #resultado {
            font-size: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="calculadora">
        <h2>Calculadora Simples</h2>
        <input type="number" id="valor1" placeholder="Digite o primeiro número">
        <input type="number" id="valor2" placeholder="Digite o segundo número">
        
        <select id="operacao">
            <option value="soma">Somar</option>
            <option value="subtracao">Subtrair</option>
            <option value="multiplicacao">Multiplicar</option>
            <option value="divisao">Dividir</option>
        </select>
        
        <button onclick="calcular()">Calcular</button>
        
        <div id="resultado"></div>
    </div>

    <script>
        function calcular() {
            // Obter os valores dos inputs
            let valor1 = parseFloat(document.getElementById("valor1").value);
            let valor2 = parseFloat(document.getElementById("valor2").value);
            let operacao = document.getElementById("operacao").value;
            let resultado = 0;

            // Verificar se os valores são válidos
            if (isNaN(valor1) || isNaN(valor2)) {
                document.getElementById("resultado").innerText = "Por favor, insira números válidos.";
                return;
            }

            // Realizar a operação de acordo com a escolha
            switch (operacao) {
                case "soma":
                    resultado = valor1 + valor2;
                    break;
                case "subtracao":
                    resultado = valor1 - valor2;
                    break;
                case "multiplicacao":
                    resultado = valor1 * valor2;
                    break;
                case "divisao":
                    if (valor2 === 0) {
                        document.getElementById("resultado").innerText = "Não é possível dividir por zero.";
                        return;
                    }
                    resultado = valor1 / valor2;
                    break;
                default:
                    document.getElementById("resultado").innerText = "Operação inválida.";
                    return;
            }

            // Mostrar o resultado na tela
            document.getElementById("resultado").innerText = "Resultado: " + resultado;
        }
    </script>
</body>
</html>
