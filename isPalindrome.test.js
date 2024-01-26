const isPalindrome = require('./isPalindrome');

test('Rotator returns true', () => {
    expect(isPalindrome('Rotator')).toBeTruthy();
});

test('Deified returns true', () => {
    expect(isPalindrome('Deified')).toBe(true);
});

// test('Madam Curie returns true', () => {
//    expect(isPalindrome('Madam Curie')).toBeTruthy();
// });
// returns false because it's obviously not a palindrome