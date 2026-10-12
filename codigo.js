// Funções da calculadora (disponíveis globalmente)
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) return 'Erro: divisão por zero';
    return a / b;
}

function exponencial(a, b) {
    return Math.pow(a, b);
}

// (Opcional) funções existentes que você já tinha — mantenha se precisar do gráfico
let valores = [];

const addValores = (x) => {
    if (typeof x === 'number' && !isNaN(x)) {
        valores.push(x);
    }
}

const media = () => {
    let soma = 0;
    if (valores.length === 0) return 0;
    for (let x of valores) {
        soma += x;
    }
    return (soma / valores.length).toFixed(2);
}

const drawBasic = () => {
    if (valores.length === 0) return;

    let data = new google.visualization.DataTable();
    data.addColumn('number', 'Pos');
    data.addColumn('number', 'X');
    const dadosFormatados = valores.map((valor, indice) => [indice + 1, valor]);
    data.addRows(dadosFormatados);

    let options = {
        hAxis: { title: 'Posicao' },
        vAxis: { title: 'Valor de X' }
    };

    let chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}
