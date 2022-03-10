

function  animation(defineCharacterMovement) {
  let character = {
    name: "ruth",
    isWig: true,
    gender: "female"
  }

  for (key in character){
    console.log(Object.keys(character))
  }

  console.log()
  console.log()

  defineCharacterMovement(character)
}
function  movement(person){
  console.log("when " + person.name + " runs ")
  console.log(  person.isWig  ? "her wig falls "  : "breeze blows her hair")
}
// movement("ruth")

animation(movement)


let  persons= ["ruth", "mary jane"]
persons.map((person)=>console.log(person))
// document.write("good afternoon")

