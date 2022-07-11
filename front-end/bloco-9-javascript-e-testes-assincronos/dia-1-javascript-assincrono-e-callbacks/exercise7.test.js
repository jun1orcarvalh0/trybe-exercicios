const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('uppercase "test" to equal to "TEST"', (done) => {
  uppercase('test', (upperCase) => {
    try {
      expect(upperCase).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
});
