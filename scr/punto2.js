function Imprimir(texto){
    console.log(texto);
}

S = 6;
A = [-6, -5, 0, 5, 6];
S = S*11;
Imprimir(A);

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
Imprimir("A = " + A);
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

Imprimir("A² ordenado = "+ A);

