function reverseString(word) {
    return word.toLowerCase().split('').reverse().join('');
}

module.exports = reverseString;