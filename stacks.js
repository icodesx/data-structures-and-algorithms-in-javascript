// Stacks

/* 
Functions
push: for placing data onto a stack
pop: for removing the last (or top) element from a stack
peek: to query the top element of a stack
length: for determining how many elements are on a stack
size: this is the same as length
*/

// Example: Array stack to find words that are palindromes

// This is our stack
var letters = [];

// This is our first words
var word = 'bob';

// This will be the reverse of the word we want to know if is a palindrome
var reverse_word = '';

// Put letters of the word into stack
for(var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// Pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    reverse_word += letters.pop();
}

// Here we check if the word and its reverse are equal
if(word === reverse_word) {
    console.log(word + ' is a palindrome');
}else {
    console.log(word + ' is NOT a palindrome');
}