describe('cryptosquare', function() {
  // it('takes in a string that is 9 characters long and determines the rectangle dimensions', function() {
  //   expect(cryptosquare('123456789')).to.eq([3, 3]);
  // });

  it('takes in a string that is 5 characters long and determines the rectangle dimensions', function() {
    expect(cryptosquare('12345')).to.eq([2, 3]);
  });

  it('takes in a string that is 5 characters long and determines the rectangle dimensions', function() {
    expect(cryptosquare('dont compare yourself to others, compare yourself to the person you were yesterday')).to.eq([8, 9]);
  });
});
