//Funciones

function mostar_punto1(){
     //Variables
     var Z = document.getElementById("valor2");
     var W = document.getElementById("valor2").value;
     var inputValue = Z.value;
     var elementos = inputValue.split(",");
     var A = elementos.map(function(elemento) {
       return parseFloat(elemento.trim());
     });
     Imprimir(W);
     var S = document.getElementById("valor3").value;
     var resultado2 = document.getElementById("resultado2");

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

    var R = new Array();
    var B = [];
    var indice1, indice2, indice3;

    // main 
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
    Imprimir(W + " => " + B);
    resultado2.innerHTML = "[" + W + "] => [" + B + "]";
    
}