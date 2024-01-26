const reverseString = require('./reverseString');

test('Reverse any given string', () => {
    expect(reverseString('Hello')).toBe('olleH');
});