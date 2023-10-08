//Deficiones
function Imprimir(texto){
    console.log(texto);
}

function Eliminate_S(r){
    if(r == 6){
        return 1;
    }
    else{
        return 0;
    }
}

//Variables
var A = [1, 20, 6, 4, 50, 66];
var S = 6;
var R = new Array();
var indice, indice2;
// main 

for (let i = 0; i < A.length; i++) {
    Imprimir("A = " + A[i]);
    if(A[i]*10 >= 100){
        //indice = 0; 
        //indice2 = 0;
        R = A[i];
        R = Array.from(String(R), Number);
        Imprimir("R =" + R);

        Imprimir("Si hay un S en indice = " + indice) + (Eliminate_S(R[0]) ? indice == 1 : indice == 0) ;
        Imprimir("Si hay un S en indice 2 = " + indice2) + (Eliminate_S(R[1]) ? indice2 == 1 : indice2 == 0); 

        if(indice == 1 && indice2 == 1){
            R.pop();
            R.shift();
        }
        (indice == 1 && indice2 == 0) ? R.shift() : null;
        (indice == 0 && indice2 == 1) ? R.pop() : null;

        Imprimir("R = " + R);

   }
    else{
        Imprimir("Un digito");
    }
    
}


