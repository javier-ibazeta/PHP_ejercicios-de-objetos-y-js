var nro = parseInt(prompt("ingrese un nro:"))

var mul_tres = Boolean

mul_tres = nro%3 == 0

if(mul_tres){
    alert(`el nro: ${nro} es multiplo de tres`)
    
}else{
    alert(`el nro: ${nro} NO es multiplo de tres`)
}