function offLineMinimum(strArr) {
  var resultArr = [];

  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'E') {
      var smallArr = strArr.slice(0, i).map(function(elem) {return Number(elem) })
                                  .filter(function(elem) {return Boolean(elem) === true});
      var minNum = Math.min.apply(null, smallArr);
      strArr.splice(strArr.indexOf(String(minNum)), 1, "E");
      resultArr.push(minNum);
    }
  }
  return resultArr.join();
}

offLineMinimum(["1","2","E","E","3"]); // => '1,2'
offLineMinimum(["4","E","1","E","2","E","3","E"]); // => '4,1,2,3'
