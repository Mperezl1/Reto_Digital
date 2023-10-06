
function mostrar(){
    var md5_hash = document.getElementById("valor1").value;
    var elemntoResultado = document.getElementById("resultado");

    var d = ['1','2','3','4','5','6','7','8','9'];
    r = [];
    

    for (let j = 0; j < md5_hash.length; j++) {
        for (let i = 0; i < d.length; i++) {
            if (d[i] == md5_hash[j]) {
                r.push(md5_hash[j]);          
            }            
        }        
    }

    if(r.length == 0){
        console.log(md5_hash,"=>",md5_hash);
        elemntoResultado.innerHTML = md5_hash + " => " + md5_hash;
    }
    else if("HASH" == md5_hash){
        console.log("HASH => Selected Number (n)");
        elemntoResultado.innerHTML = "HASH => Selected Number (n)";
    }
    else{
        console.log(md5_hash,"=>",r[0]);
        elemntoResultado.innerHTML = md5_hash + " => " + r[0];
        
    }
}