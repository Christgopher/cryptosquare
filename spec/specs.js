describe('cryptosquare', function() {
  // it('takes in a string that is 9 characters long and determines the rectangle dimensions', function() {
  //   expect(cryptosquare('123456789')).to.eq([3, 3]);
  // });
  //
  // it('takes in a string that is 5 characters long and determines the rectangle dimensions', function() {
  //   expect(cryptosquare('12345')).to.eq([2, 3]);
  // });
  //
  // it('takes in a string that is 69 characters long and determines the rectangle dimensions', function() {
  //   expect(cryptosquare('dont compare yourself to others, compare yourself to the person you were yesterday')).to.eq([8, 9]);
  // });
  //
  // it('takes in a string that is 15 characters long and determines the rectangle dimensions', function() {
  //   expect(cryptosquare('123456789123451')).to.eq([4, 4]);
  // });
  //
  // it('takes in a string that is 12 characters long and determines the rectangle dimensions', function() {
  //   expect(cryptosquare('123456789123')).to.eq([3, 4]);
  // });
  //
  // it('takes in a string that is 13 characters long and determines the rectangle dimensions', function() {
  //   expect(cryptosquare('1234567891234')).to.eq([4, 4]);
  // });

  it('prints the string as a rectangle', function() {
    expect(cryptosquare('1234')).to.eq("12" + "\n" + "34");
  });
});
