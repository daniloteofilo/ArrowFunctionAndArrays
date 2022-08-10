
// let numero = 5;

// let tabuada = 10;


// for (let i = 1 ; i <= tabuada ; i++) {
//     // const calcular = tabuada[i];
//     const resultado = i * numero;
    
//     console.log(resultado);
// }

// // let j = 1;
// // while(j <= 10) {
// //     console.log(numero * j);
// //   j = j+1 
// // }




// let notas = [5, 9, 10];
// let media = 0;
// for (let i = 0; i < notas.length; i++) {
    
//     media += notas[i]/3;
    
// }
// console.log(media);






// let array = [1, 2, 3, 4, 5, "danilo", 7, 8, "olá"]
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === "number")
//         console.log (array[i])
//         } 
    





// let lista = [[1,9], [2,6], [3,4], [6,7, 3,4,5]]

// for (let i = 0; i < lista.length; i++) {
//     const item = lista[i];
    
//     for (let j = 0; j < lista[i].length; j++) {
//         const item2 = lista[i][j];
//         console.log (item2)
//     }
// }






// let array = [[ "danilo" , 30, true], ["josé", 35, false], ["Marta", 45, false]]

// let nome = 0;

// let idade = 0;

// let aprovado = 0;

//     for (let i = 0; i < array.length; i++) {
//         const item1 = array[i];
//             if (array[i][1] >= 18 && array[i][2]){
//                 console.log("Os aprovados são: " + item1[0])  
//                 // console.log("Idade: " + item1[1])  
//                 // console.log("Aprovado: " + item1[2])
//             }  
//     }   

    




// let imc = (peso, altura) => peso / (altura**2);
// console.log((imc(90, 1.8)).toFixed(2));






// let media = (nota1, nota2, nota3) => (nota1 + nota2 + nota3) /(media.length);
// console.log((media(7,5,8)).toFixed(2))






// let cadastro = (nome, idade, altura) => ("nome: " + nome + ", sua idade é " + idade + " anos e sua altura é " + altura);
// console.log(cadastro("danilo", 30, 1.96))


// let pessoas = [
//     {nome: "Carlos" , 
//     dataDeNascimento: "1990-06-29" , 
//     aprovado: true , 
//     categorias: ["A"]},


//     {nome: "Ricardo" , 
//     dataDeNascimento: "1976-04-23" , 
//     aprovado: true , 
//     categorias: ["A" , "B" , "C"] },

  
//     {nome: "Rafael" , 
//     dataDeNascimento: "1995-05-01" , 
//     aprovado: true, 
//     categorias: ["A" , "B"]},
  
  
  
//     {nome: "Larissa" , 
//     dataDeNascimento: "2000-03-04" , 
//     aprovado: true , 
//     categorias: ["A"]}
// ]

// let data = new Date();
// let dia = String(data.getDate()).padStart(2, "0");
// let mes = String(data.getMonth() + 1).padStart(2, "0");
// let ano = data.getFullYear() - 18;
// let dataAtual = (ano + "-" + mes + "-" + dia);

// function listarAprovadosECategoria() {
//     for (let i = 0; i < pessoas.length; i++){
//         const categorias = pessoas[i].categorias;
//         const eMaiorDeIdade = pessoas[i].dataDeNascimento <= dataAtual
//         const eAprovado = pessoas[i].aprovado
    
//         if(eAprovado && eMaiorDeIdade && categorias.includes("B")){
//             console.log(pessoas[i].nome)
//         }

        // for (let j = 0; j < pessoas[i].categorias.length; j++) {
            
        //     const categorias = pessoas[i].categorias[j];
        //     const eMaiorDeIdade = pessoas[i].dataDeNascimento <= dataAtual
        //     const eAprovado = pessoas[i].aprovado
        
        //     if(eAprovado && eMaiorDeIdade && categorias == "B"){
        //         console.log(pessoas[i].nome)
        //     }
     
        // }
//     }
// }
    
    // listarAprovadosECategoria()