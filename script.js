// 01- Crie um array que receba 5 itens e exiba no console.

let array = ["banana", "maça", "abacate", "limão", "maracuja"]

// 02- Utilize um método para adicionar um nome ao inicio do array.

array.unshift("paçoca")

// 03- Utilize um método para remover o último nome do array.

array.pop()

// 04- Utilize um método para adicionar dois nomes ao fim do array.

array.push("rosas", "tulipas")

// 05- Utilize um método para remover o primeiro nome do array.

array.shift()

// 06 Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()

// 07 Crie um objeto que receba ao menos três propriedades sobre você.

const kauan = {
    nome: "Kauan",
    idade: 18,
    genero: "masculino"
}

// 08 Adicione uma nova propriedade sem alterar seu objeto inicial.

kauan.musica = "pop"

// 09 Remova uma propriedade desse objeto.

delete kauan.musica

// 10-Mostre no console todas as propriedades desse objeto.

console.log(kauan)

// 11-Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens.


let pessoa1 = {
    nome:"Caco",
    idade: 1,
    telefone: 111111111,
    amigos: ["Fernanda", "Bárbara", "Mirella", "Esther"]
}

let pessoa2 = {
    nome:"Quico",
    idade: 2,
    telefone: 222222222,
    amigos: ["Carolina", "Larissa ", "Marcos", "Fernanda"]
}

let pessoa3 = {
    nome:"Coco",
    idade: 3,
    telefone: 333333333,
    amigos: ["Giovanna", "Luiz", "Carlos", "Breno"]
}

let pessoa4 = {
    nome:"Niko",
    idade: 4,
    telefone: 444444444,
    amigos: ["Kevin", "Eduarda", "Miguel", "Davi"]
}

let pessoa5 = {
    nome:"Loco",
    idade: 5,
    telefone: 555555555,
    amigos: ["Enzo", "João", "Letícia", "Emilly"]
}

let cadastro = [pessoa1, pessoa2, pessoa3, pessoa4, pessoa5]

// 12- Mostre no console o nome de um amigo de cada lista.

cadastro.forEach(element => {
        console.log(`Amigo do ${element.nome}: ${element.amigos[0]}`)
});