function Imprimir(texto){
    console.log(texto);
}


var A = [1, 5, 1, 1, 1, 10, 15, 20, 100];
var B = [];
var mincoin = 1;

// Verfiicar su la cadena es positiva
for (let i = 0; i < A.length; i++) 
{
    if(A[i] < 0)
    {
        Imprimir("Tiene un dato negativo");
    }
    else
    {
        B.push(A[i]);
    }
}
//Imprimir(B);

// Ordenar el vector para manera mas fácil
for (let i = 0; i < B.length; i++) 
{
    for (let j = i+1 ; j < A.length; j++) 
    {
        if(B[i] > B[j])
        {
            aux = B[i];
            B[i] = B[j];
            B[j] = aux;
         }
    }
}

//Imprimir("B -> " + B);


for (let i = 0; i < B.length; i++) 
{
    if(B[i] <= mincoin)
    {
        mincoin += B[i];
    }
    else
    {
        break;
    }
}
//Imprimir(mincoin);
