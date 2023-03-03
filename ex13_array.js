var languages = [
    'Javascrip',
    'PHP',
    'Python',
    'C',
];
var languages2 = [
    "viet",
    "usa",
    "Uk",
];
console.log(Array.isArray())
console.log(languages.length)
console.log(languages[2])
// Conver array to string
console.log(languages.toString())
// Convert array to string and spearate item by a char  
console.log(languages.join(' - '))
// Delete last element and return the deleted element
console.log(languages.pop())

// Add elements in the last of the array and return the length of the array
console.log(languages.push("C++","HTML"))
// Delete first element and return the deleted element
console.log(languages.shift())
// Add elements in the first of the array and return the length of the array
console.log(languages.unshift("C++","HTML"))
console.log(languages)
console.log("---")
// Delete elemets by index and return deleted elemnts 
console.log(languages.splice(1,3))
console.log(languages)
// Add elemets by index and return deleted elemnts. If the second parameter is 0, splice will return nothing []. Use third parameter for add alement at the designated position in the first unit
console.log(languages.splice(1,0,"alo","aloalo"))
console.log(languages)
// Combine two arrays , the concat function don't change the root array
console.log(languages.concat(languages2))
console.log(languages)
// Get item by index 
console.log(languages.slice(-1))
console.log(languages)
