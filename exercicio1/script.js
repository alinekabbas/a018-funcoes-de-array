const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//Crie duas funcões que recebem como parâmetro um objeto.
//1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.

function objetoCaixaAlta(objeto) {
    let novoObjeto = []
    for(let i in objeto){
        novoObjeto.push(i.toUpperCase()) 
    }
    return novoObjeto
}
console.log(objetoCaixaAlta(objeto))


//2. A segunda deve retornar os valores do objeto como texto corrido.
const textoCorrido = (meuobjeto) =>{
    let texto = null
    texto = meuobjeto.nome
    texto += meuobjeto.profissao
    texto += meuobjeto.username
    texto += meuobjeto.senha

    console.log(texto)
}

//3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

const join = (meuobjeto, funcaoCaixaAlta, funcaoTextoCorrido) => {
    funcaoCaixaAlta(meuobjeto)
    funcaoTextoCorrido(meuobjeto)
}
join(objeto,objetoCaixaAlta,textoCorrido)