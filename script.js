export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement==="e"){
      result.push("")
      //replaces "e"'s with spaces
    }
    else if(currentElement==="E") {
      result.push("")
      //replaces "E"'s with spaces
    }
    else{
      result.push(currentElement)
      //doesn't replace anything
    }
  }
  return result.join("")
}

 export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement.toUpperCase())
    //converts all characters to uppercase
  }
 return result.join("")
}

export function aufgabe03(args) {
  const input = args
  const result = []
  var ecount = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement==="e"|currentElement==="E"){
      ecount ++
    }
    //counts the number of "e"'s
  }
  return ecount
}
export function aufgabe04 (args) {
  const input = args
  const result = []
  var wordcount = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement===" "){
      wordcount++
    }
    //counts the number of words
    else if(currentElement==="-"){
      wordcount--
    //removes the "-" from being counted
    }
  }
  return wordcount
}

export function aufgabe05 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentAscii = input[i].charCodeAt(0)
   
    if (65 <= currentAscii && currentAscii <=90) return true
    //check if character is uppercase
  }
  return false
}

export function aufgabe06(args) {
  const input = args

  if (input.length <= 0) return false
  
  for (let i = 0; i < input.length; i++) {
    const ascii = input[i].charCodeAt(0)

    if(0 <= ascii && ascii <=31) return true
    else if (33 <= ascii && ascii <= 47) return true
    else if (58 <= ascii && ascii <= 64) return true
    else if (91 <= ascii && ascii <= 96) return true
    else if (123 <= ascii && ascii <= 127) return true
  //check if character is special character
  }
  return false
}

function aufgabe07(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement==="u"){//checks if "u" is in input
      if(input[i+1]==="n"){//checks if the "u" is followed by "n"
        if(input[i+2]==="d"){//checks if the "un" is followed by "d"
            return true//if all apply, returns trues
        }
      }
    }
  }
  return false
}

export function aufgabe08(args) {
  const input = args        
  const result = []                     

for (let i = 0; i < input.length; i++) {      
    const currentElement = input[i]        
    if (currentElement === "e") {   
      result.push(3)   //replaces "e"'s with 3's                                                      
    } else {                                                 
      result.push(currentElement)//doesn't replace anything
    }
  }
  return result.join("")
}

export function  aufgabe09 (args) {
  const input = args
  const result = []
  let len = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    len++
  }
  if (len === 6)  {// checks if the lenght of the input is 6
    return true //if condition applies, returns true 
  }
  return false //if condition doesn't apply, returns false
  }
 
export function aufgabe10 (args) {
 const input = args

 if(input.length !== 7) return false //checks if input is 7 characters
 if(input[0] !== "#") return false  // checks if the first character is "#"
 for (let i = 1; i < input.length; i++) {
   const currentElement = input[i]
   const ascii = currentElement.charCodeAt(0)
 
  if(48 <= ascii && ascii <=57) {//checksif input consits of numbers
       
   } else if (65 <= ascii && ascii <= 70) {//checks if input consists of letters found in HEX RGB codes
        
   } else {
     return false
   }
 }
  
  return true //if one of the conditions applies to all characters in the input after "#", returns true
}

export function  aufgabe11 (args) {
const input = args

if(input.length !== 1) return null
  return input[0].charCodeAt(0) // returns the ASCII code of the first character in the Input
}

export function aufgabe12 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement == "e"){
      return i // returns position in the list of first "e"
    }
  }
  return -1 // if no "e" is found, returns -1
}

export function aufgabe13 (args) {
  const input = args
  let positE = -1
  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
    if(currentElement === "e") {
      positE = i //writes position in the list of last "e"
    }
  }
  return positE //returns position in the list of last "e"
 }

 export function aufgabe14 (args) {
  const input = args
 let Count = 0
  let positE= -1 
  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if(currentElement=== "e"){ //runs loop until an "e" is detected
   Count++
   if (Count === 3) { // if the count of "e"'s reaches 3, returns position of the last counted "e" (the third)
    return i
   }
  }
}

  return positE 
}