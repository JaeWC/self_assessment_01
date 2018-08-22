function hammingDistance(strArr) {
  var firstStr = strArr[0];
  var secondStr = strArr[1];

  var hammingCount = 0;
  for (var i = 0; i < firstStr.length; i++) {
    if (firstStr[i] !== secondStr[i]) {
      hammingCount++;
    }
  }

  return hammingCount;
}

hammingDistance(["coder", "codec"]); // => 1
hammingDistance(["10011", "10100"]); // => 3
hammingDistance(["helloworld", "worldhello"]); // => 8
