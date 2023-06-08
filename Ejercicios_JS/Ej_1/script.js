let nombre = prompt("Ingresa tu nombre: ") 
            
while( nombre == ""){
    let nombre = prompt("Ingresa tu nombre: ") 
    if ( nombre != ""){
        let apellido = prompt ("Ingresa tu apellido: ")
        while(apellido == ""){
            let apellido = prompt ("Ingresa tu apellido: ")

            if ( nombre != "" && apellido !=""  ){
                
                console.log("bienvenido:" + nombre + " "+apellido)
            
                alert("bienvenido!!! " + nombre + " "+apellido)

                break;

            }
        
        }
    }
}
