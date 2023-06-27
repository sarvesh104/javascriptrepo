
function findVowels(inputString) {
    // Convert the input string to lowercase for case-insensitive comparison
    var lowercaseString = inputString.toLowerCase();
  
    // Define an array of vowels
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Initialize an empty array to store the found vowels
    var foundVowels = [];
  
    // Iterate through each character in the input string
    for (var i = 0; i < lowercaseString.length; i++) {
      var currentChar = lowercaseString[i];
  
      // Check if the current character is a vowel
      if (vowels.indexOf(currentChar) !== -1) {
        // If it is a vowel, add it to the foundVowels array
        foundVowels.push(currentChar);
      }
    }
  
    // Return the array of found vowels
    return foundVowels;
  }