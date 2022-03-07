

function  animation(defineCharacterMovement) {
  let character = {
    name: "ruth",
    isWig: true,
    gender: "female"
  }
  defineCharacterMovement(character)
}
function  movement(person){
  console.log("when " + person.name + " runs ")
  console.log(  person.isWig  ? "her wig falls "  : "breeze blows her hair")
}
// movement("ruth")

animation(movement)


