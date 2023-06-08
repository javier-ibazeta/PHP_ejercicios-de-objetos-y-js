alert("este soft calcula e informa el perímetro y el área de un círculo")

let diámetro = prompt(" ingrese el diámetro del círculo: ")

let pi = 3.1416

while ( diámetro != 0) {

    let perímetro = pi*diámetro

    let área = (diámetro/2)**2 * pi

    alert("el perímetro del círculo es: "+ perímetro)

    alert ("el área del círculo es: " + área)
    
    break;

}



