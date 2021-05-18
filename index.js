// Code your solution here
const findMatching = (array , string) => array.filter(e=> e.toLowerCase() === string.toLowerCase() )
const fuzzyMatch = (array , string) => array.filter(e=> e[0].toLowerCase() === string[0].toLowerCase() )

const matchName = (arr , name) => arr.filter(e=> e.name === name)