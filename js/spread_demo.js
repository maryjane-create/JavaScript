
let  cohort ={
  number:9,
  name:"tech",
  total:31,
  isNormal: "yes"
}

let  newCohort=cohort
newCohort.name="interesting stuff"
// console.log(newCohort.name)
// console.log(cohort.name)

//spread
let  cohortNew={...cohort}

cohortNew.name="cool stuff"


console.log(cohortNew.name)
console.log(cohort.name)
console.log(newCohort.name)

console.log()
//rest
function  doSomething(...parameter){
  // console.log(parameter)



  (function (){
    parameter.forEach((parameter) => console.log("hi " + parameter))
  })()
}

doSomething("ujay", "increase", "mj", "remi")
