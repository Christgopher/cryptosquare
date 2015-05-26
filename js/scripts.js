var cryptosquare = function(string) {
  var str = string.replace(/\s+/g, '');
  var array = []
  var string_length = str.length;
  var dimension = Math.sqrt(string_length);
  if (dimension % 1 === 0) {
    array.push(dimension, dimension);
  } else {
    var length = Math.ceil(dimension);
    if (((length * length) - string_length) > (length - 1)) {
      array.push(length - 1, length)
    } else {
      array.push(length, length);
    }
  }

  var msg_array = str.split("");
  var loop_counter = 0;
  var string_array = [];
  msg_array.forEach(function(entry) {
    if (loop_counter < array[1]) {
      string_array.push(entry);
      ++loop_counter;
    } else {
      string_array.push('\n');
      string_array.push(entry);
      loop_counter = 1;
    }
  });

  new_array = string_array.join().replace(/,+/g, '').split("\n");
  var encrypted_array = [];

  for(var i = 0; i < (new_array.length) + 1; i += 1) {
    for(var k = 0; k < array[0]; k += 1) {
      encrypted_array.push(new_array[k][i]);



    }
  }
  loop_counter = 0
  brand_new_array = []
  encrypted_array.forEach(function(entry) {
    if (loop_counter < 5) {
      brand_new_array.push(entry);
      ++loop_counter;
    } else {
      brand_new_array.push(" ");
      brand_new_array.push(entry);
      loop_counter = 1;
    }
  });
  return brand_new_array.join().replace(/,+/g, '')


};
