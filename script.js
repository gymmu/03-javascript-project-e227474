export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement==="e"){
      result.push("")
    }
    else if(currentElement==="E") {
      result.push("")

    }
    else{
      result.push(currentElement)
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
    else if(currentElement==="-"){
      wordcount--
    }
  }
  return wordcount
}

export function aufgabe05 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentAscii = input[i].charCodeAt(0)
   
    if (65 <= currentAscii && currentAscii <=90) return true
    
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
  
  }
  return false
}
export function aufgabe08(args) {
  const input = args        
  const result = []                     

for (let i = 0; i < input.length; i++) {      
    const currentElement = input[i]        
    if (currentElement === "e") {   
      result.push(3)                                                           
    } else {                                                 
      result.push(currentElement)
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
  if (len === 6)  {
    return true
  }
  return false
  }
 
export function aufgabe10 (args) {
 const input = args

 if(input.length !== 7) return false
 if(input[0] !== "#") return false
 for (let i = 1; i < input.length; i++) {
   const currentElement = input[i]
   const ascii = currentElement.charCodeAt(0)
 
  if(48 <= ascii && ascii <=57) {
       
   } else if (65 <= ascii && ascii <= 70) {
        
   } else {
     return false
   }
 }
  
  return true
}

export function  aufgabe11 (args) {
const input = args

if(input.length !== 1) return null
  return input[0].charCodeAt(0)
}

export function aufgabe12 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement == "e"){
      return i
    }
  }
  return -1
}

export function aufgabe13 (args) {
  const input = args
  let posE = -1
  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
    if(currentElement === "e") {
      posE = i
    }
  }
  return posE
 }

 export function aufgabe14 (args) {
  const input = args
 let Count = 0
  let posE= -1 
  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]



  if(currentElement=== "e"){
   Count++
   if (Count === 3) {
    return i
   }
  }
}

  return posE 
}