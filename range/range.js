function range(start, end) {
  if (start >= end) {
    return [];
  }
  var rangedArray = [];
  for (var i = start; i < end; i++) {
    rangedArray.push(i);
  }
  return rangedArray;
}

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []