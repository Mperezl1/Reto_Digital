

function mostar_punto2()
{
    function Imprimir(texto){
        console.log(texto);
    }

    var Z = document.getElementById("valor4");
    var W = document.getElementById("valor4").value;
    var inputValue = Z.value;
    var elementos = inputValue.split(",");
    var A = elementos.map(function(elemento) {
    return parseFloat(elemento.trim());
    });

    var S = document.getElementById("valor5").value;

    var resultado3 = document.getElementById("resultado3");

    Imprimir("A = " + A );
    Imprimir("S = " + S );

    
    //S = 6;
    //A = [-6, -5, 0, 5, 6];
    S = S*11;
    Imprimir("S = " + S );
    //Imprimir(A);
    
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i]*A[i];
    }
    for (let i = 0; i < A.length; i++) {
        if(A[i] > S)
        {
            A.splice(i,1,"b");
        }
    }
    for (var i = A.length - 1; i >= 0 ; i--){
        if (A[i] === "b"){
            A.splice(i,1);
        }
    }
    //Imprimir("A = " + A);
    var aux ;
    
    for (let i = 0; i < A.length; i++) 
    {
        for (let j = i+1 ; j < A.length; j++) 
        {
            if(A[i] > A[j])
            {
                aux = A[i];
                A[i] = A[j];
                A[j] = aux;
             }
        }
    }
    
    Imprimir(A + " => " + A);
    resultado3.innerHTML = "[" + W + "] => [" + A + "]";
    
}
