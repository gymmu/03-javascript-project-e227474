export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement==="e"){
      result.push("_")
    }
    else if(currentElement==="E") {
      result.push("3")

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
  }
  return wordcount
}

export function aufgabe05 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement.isUppercase()){
    }
  }
  return result.join("")
}