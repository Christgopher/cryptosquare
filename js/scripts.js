var cryptosquare = function(string) {
  var str = string.replace(/\s+/g, '');
  var array = []
  var string_length = str.length;
  var dimension = Math.sqrt(string_length);
  var length = Math.round(dimension);
  array.push(length);
  array.push(length + 1);

  return array;
};
