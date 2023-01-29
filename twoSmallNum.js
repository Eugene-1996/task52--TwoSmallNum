function sumTwoSmallestNumbers(numbers) {  
    let abc = numbers.sort((a,b) => (a-b))
    abc= abc[0]+ abc[1]
    return abc 
  }

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))

