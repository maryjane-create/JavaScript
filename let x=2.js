let myName="lotachi"


function changeName(){
    myName="rotachi"
    return myName
}

console.log(changeName())





const multiplier =(number) => {
    for(let i =0; i<12 ; i++){
        console.log(number + " * " + i + " = " + (number*i))
    }
}

function multiplication(aFunction){
let x=2
aFunction(x)
}

multiplication(multiplier)

const addition =(number) => {
    for(let y=0; y<12; y++){
        console.log(number + " + "+ y + " = " + (number + y))
    }
}

function doArithmetic(aFunction){
    let x =2
    aFunction(x)
}

// doArithmetic(multiplication)
// // doArithmetic(addition)

