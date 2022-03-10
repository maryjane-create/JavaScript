function callMe(phoneNumber, countryDial){
  if (phoneNumber !==" "){
    //countryDial(phoneNumber)
  }
  else {
    console.log("enter a normal number")
  }
}

const  dial =(phoneNUmber) =>console.log("calling   " +(phoneNUmber))
callMe("34 ",dial("080") )
