function billTotal(subtotal) {
  
  var total = (subtotal + (subtotal * 0.15) + (subtotal * 0.095));

  return total;
}

billTotal(10.00); // => 12.45