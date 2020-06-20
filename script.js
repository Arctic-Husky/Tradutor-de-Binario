
//Funcao converter para binario
function converterparabin(){

    const bin = null;

    //Pegar os valores da caixa de texto da esquerda
    const ling = document.getElementById('linguagem').value;
        if (ling === '') return alert('Coloque algum texto na caixa');

    //Transformar texto em binario e colocar os valores na caixa da direita
    const caixa2 = document.getElementById('binario');
        caixa2.value = "";
        for (var i = 0; i < ling.length; i++){
            caixa2.value +=  ling[i].charCodeAt(0).toString(2) + " ";
        }

    //Colocar resultado na caixa de texto da direita
    // const traduzido = document.getElementById('binario').innerHTML = ling.value;

}

//Funcao converter para linguagem natural
function converterparaling() {

    const ling = null;

    //Pegar os valores da caixa de texto da direita
    const bin = document.getElementById('binario').value;

    //Transformar binario em texto e colocar valores na caixa da esquerda
    if (bin === '') return alert('Coloque o codigo na caixa');
    const teste = document.getElementById('linguagem');

    let outputStr = String.fromCharCode(
        ...bin.split(' ')
            .map(bino => parseInt(bino, 2))
    )
    teste.value = outputStr;

    //Colocar resultado na caixa de texto da esquerda
    // const traduzido2 = document.getElementById('linguagem').innerHTML = outputStr;
}
