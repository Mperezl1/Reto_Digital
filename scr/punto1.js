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
var indice1, indice2;
//var z, z2;

// main 

for (let i = 0; i < A.length; i++) {
    Imprimir("A = " + A[i]);
    if(A[i]*10 >= 100){
        //indice = 0; 
        //indice2 = 0;
        R = A[i];
        R = Array.from(String(R), Number);
        
        indice1 = Eliminate_S(R[0]);
        indice2 = Eliminate_S(R[1]);

        if(indice1 == 1 && indice2 == 1){
            R.pop();
            R.shift();
        }
        (indice1 == 1 && indice2 == 0) ? R.shift() : null;
        (indice1 == 0 && indice2 == 1) ? R.pop() : null;
   }
    else{
        //Imprimir("Un digito");
    }
    
}
Imprimir("Nuevo A = " + A);


