//Funciones
function Imprimir(texto){
    console.log(texto);
}

function Eliminate_S(r){
    if(r >= S){
        return 1;
    }
    else{
        return 0;
    }
}

function mostar_punto1(){
    
}

//Variables
var A = [6, 2, 1];
//var A = [1, 2, 3, 4, 5, 6];
//var A = [60, 6, 5, 4, 3, 2, 7, 7, 29, 1];
var S = 6;
var R = new Array();
var B = [];
var indice1, indice2, indice3;

// main 
Imprimir("A = " + A);
for (let i = 0; i < A.length; i++) {
    //Imprimir("A = " + A[i]);
    if(A[i]*10 >= 100){
        //indice = 0; 
        //indice2 = 0;
        R = A[i];
        R = Array.from(String(R), Number);
        
        indice1 = Eliminate_S(R[0]);
        indice2 = Eliminate_S(R[1]);


        if(indice1 == 1 && indice2 == 1){
            R = [];
            A.splice(i,1,"b");
        }
        if(indice1 == 1 && indice2 == 0){
            R.shift();
            A.splice(i,1,R);

        }        if(indice1 == 0 && indice2 == 1){
            R.pop();
            A.splice(i,1,R);
        }
   }
    else{
        indice3 = Eliminate_S(A[i]);
        if(indice3 == 1){
            A.splice(i,1,"b");
        }
    }
    
}

for (var i = A.length - 1; i >= 0 ; i--){
    if (A[i] === "b"){
        A.splice(i,1);
    }
}

for (var i = A.length - 1; i >= 0 ; i--){
    B.push(A[i]);
}
