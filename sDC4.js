// by andriely frança
// inicializa as variáveis

var N = Number.parseInt(window.prompt("qual o valor de N ?"));

let M = Number(window.prompt("qual o valor de M ?"))
let i;

var barra= window.prompt("qual os valores da barra? separe por espaços! ")

var teste = 0;
var entBarra = "" ; 

for (i = 0; i < barra.length ;i++){
        switch (barra[i]) {
        case ' ':
                //apenas para verificar se é um espaço, caso não seja ele "joga para o default"
                //document.write('sou um espaço');
        break;
        default :
                //concatena a variavel mov sem os espaços, 
                //apenas com os numeros
        entBarra += barra[i]     // document.write("sou um numero          "+barra[i])
        break;
        }
}


movimentos = window.prompt("quais  os Movimentos? separe por espaços!")

var teste = 0;
var entMovimentos = "" ; 
for ( i = 0; i < movimentos.length ;i++){
//    document.write("entrei no for ")
        switch (movimentos[i]) {
        case ' ':
            //apenas para verificar se é um espaço, caso não seja ele "joga para o default"
            //document.write('sou um espaço');
        break;
        default :
            //concatena a variavel mov sem os espaços, 
            //apenas com os numeros
            entMovimentos+= movimentos[i]     // document.write("sou um numero          "+barra[i])

        break;
        }
}






//for (i = 0  i <= M;i++) entrada movimentos[i];

let freq = [0,0,0,0,0,0,0,0,0,0];

for (i = 0; i <= M ; i++){
    let pI  
    pI= Number(entMovimentos[i]);;
    let pF = Number(entMovimentos[i-1]);;
    if(i > 1 && pF > pI) {pF++;
        console.log("este é "+pF) }
    if(i > 1 && pF < pI) {pF--;
        console.log("este  eh "+pF)
    }
    //imprime  a sequancia que abre o cofre
    /*console.log(pF)
    console.log("imprimiu pf e pi")
    */if(pF > pI) {
       

        for (let j = pI ; j <=pF; j++) {freq[Number(entBarra[j])] = freq[Number(entBarra[j])]+1;}
            }else if (pF < pI){
            for (let j = pI; j >=pF; j--) {freq[Number(entBarra[j])] =freq[Number(entBarra[j])] + 1;}				
            }
    
}
document.write("o codigo que abre o cofre é : ")
for ( i=0;i<=9;i++) {
        document.write(" "+freq[i]) //imprime  a sequancia que abre o cofre
}   
