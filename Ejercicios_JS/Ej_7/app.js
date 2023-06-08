var nro = parseInt(prompt("ingrese un nro: "))

var espar = Boolean  

espar = nro%2 == 0

if (nro==0){
    alert(" el número ingresado es igual a cero !")
      
}else if(espar ){
    alert(" el numero ingresado es par !")

}else{
    alert(" el numero ingresado es impar !")
}
