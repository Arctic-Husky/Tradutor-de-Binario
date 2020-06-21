//Funcao converter para binario
function converterparabin(){

    const bin = null;

    //Pegar os valores da caixa de texto da esquerda
    const ling = document.getElementById('linguagem').value;
        if (ling === '') return alert('Coloque algum texto na caixa');

    //Transformar texto em binario e colocar na caixa da direita
    const caixa2 = document.getElementById('binario');
        caixa2.value = "";
        for (var i = 0; i < ling.length; i++){
            caixa2.value +=  ling[i].charCodeAt(0).toString(2) + " ";
        }

}

//Funcao converter para linguagem natural
function converterparaling() {

    const ling = null;

    //Pegar os valores da caixa de texto da direita
    const bin = document.getElementById('binario').value;

    //Transformar binario em texto
    if (bin === '') return alert('Coloque o codigo na caixa');
    const bintxt = document.getElementById('linguagem');

    let outputStr = String.fromCharCode(
        ...bin.split(' ')
            .map(bino => parseInt(bino, 2))
    )
    bintxt.value = outputStr;
}
