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

export function aufgabe07(args) {
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
    } 
    else {                                                 
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
       
   } 
  else if (65 <= ascii && ascii <= 70) {//checks if input consists of letters found in HEX RGB codes
        
   } 
  else {
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

export function aufgabe15 (args) {
  const input = args
  const result = []

  if (input.lastIndexOf(' ') == input.length - 1) {
      for (let i = 0; i < input.length - 1; i++) {
        const currentElement = input[i]
        result.push(currentElement)
      }
  }
  else {
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  
      if (currentElement !== " ") {
        result.push(currentElement)
      }
      else {
        return result.join("")
      }
    }
  }
  return result.join("")
}

export function aufgabe16 (args) {
  const input = args
  const res1 = []
  const res2 = []
  let sortedtext = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement == "$" && sortedtext == true) {
      sortedtext = false
    } 
    else {
      if (sortedtext == true) {
        res1.push(currentElement)
      }
      else if(sortedtext == false) {
        res2.push(currentElement)
      }
    }
  }
  if (res2.join("") !== "") {
  return res1.join("") + "," + res2.join("")
  } 
  else {
    return res1.join("")
  }
}

export function aufgabe18 (args) {
  const input = args
  const Name = []
  const age = []
  let sortedtext = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement == " " && sortedtext == true) {
      sortedtext = false
    } 
    else {
      if (sortedtext == true) {
        Name.push(currentElement)
      }
      else if (sortedtext == false) {
        age.push(currentElement)
      }
    }
  }
  if (Name.join("") !== "" && age.join("") !== "") return "Sie heissen " + Name.join("") + " und sind " + age.join("") + " Jahre alt"
  if (Name.join("") == "" && age.join("") !== "") return "Sie heissen" + Name.join("") + " und sind " + age.join("") + " Jahre alt"
  if (Name.join("") !== "" && age.join("") == "") return "Sie heissen " + Name.join("") + " und sind " + age.join("") + "Jahre alt"
  if (Name.join("") == "" && age.join("") == "") return "Sie heissen" + Name.join("") + " und sind " + age.join("") + "Jahre alt"
}

export function aufgabe19 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement) //sends every character twice
  }
  return result.join("")
}

export function aufgabe20 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement == "." && input[i+1] !== " "){ //if dot isn't followed by a space, retrns false
      return false
    }
    else if(currentElement == "."){ 
      if(input[i+1] == " "){  // if dot is followed by a space, returns true
        return true
      }
    }
  }
  return result.join("")
}

export function aufgabe21 (args) {
  const input = args  // defines the string input
  const result = [] // defines the array used to return the reslut
  const reversed = input.split("").reverse().join("") // splits  the string into an array and reverses it
  result.push(reversed)
return result.join("")
}

export function aufgabe22 (args) {
  const input = args
  const result = []
  var kdetect = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if(kdetect == true){
      result.push(currentElement)
    }
    else if(input[i] !== "k" && input[i+1] !== "k"){
      result.push("_")  //if charcter is not "K", returns "_"
    }
    else if(input[i] == "k" && input[i+1] !== "k"){
      result.push(currentElement)
      kdetect = true
    }
    }
  return result.join("")
}

export function aufgabe24 (args) {
  const input = args
  const result = []

  if (input.length === 1 ){return input} //if input is only 1 character, returns the character

  const first = input[0] //first character
  const last = input[input.length - 1] // last character

  result.push(last) // first returns the last character
  for (let  i = 1; i < input.length - 1; i++) {
    const currentElement = input[i]
    result.push(currentElement) //return everything else inbetween
  }
  result.push(first) //returns the first character as last
  return result.join("")
}

export function aufgabe25 (args) {
  const input = args
  const result = []
  
  if (input.length < 3) {
    return ("") //returns nothing if no inbetween characters exist
  }
  if (input.length > 2) { //if inbetween characters exist, returns the first and last character
    result.push(input[0]) // returns first character
    result.push(input[input.length - 1]) // retrns last character
  }
  return result.join("")
}

export function bubblesort (args){
const input = args
const list = input.split("") //turns string inou into array, so it can be sorted
for (let i = 0; i < list.length - 1; i++) {
  const current = list[i]
  const next = list[i + 1]
  if (current.charCodeAt(0) > next.charCodeAt(0)) { //if the order isn't correct, reorders
    const tmp = list[i + 1]
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1//starts  from beginng
  }
}
const result = list.join("")
return result
}

