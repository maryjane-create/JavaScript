let  anArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
anArray.forEach(value => value%2==0 && process.stdout.write(value +" "))

let pseudo = {
  anArray:[1, 2, 3, 4, 5, 6, 7],
  pseudoForEach:function (iterator){
    for (let i=0; i<this.anArray.length; i++){
      iterator(this.anArray[i])
    }
  }

}
console.log()

pseudo.pseudoForEach(value => value%2==0 && process.stdout.write(value + " "))
