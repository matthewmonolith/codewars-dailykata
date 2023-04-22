//7kyu mumbling Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


// This code defines a function called "accum" that takes a single argument "s".

// The function first calls the "split" method on the input string "s", which separates the string into an array of individual characters.

// Then, the "map" method is called on the resulting array of characters. For each character "c" in the array, a new string is constructed using a combination of uppercase and lowercase letters. Specifically, the uppercase version of the character is concatenated with a lowercase version of the character repeated "i" times, where "i" is the index of the current character in the array.

// Finally, the resulting array of modified strings is joined together using the "-" character and returned as the final output of the function.

// Overall, this function takes a string and returns a modified version of that string where each character is duplicated and formatted in a specific way with uppercase and lowercase letters, with each subsequent character being repeated an additional number of times. The resulting modified string is then joined together with "-" characters to separate each character's formatted output.
