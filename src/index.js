
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if (!matrix || matrix.length === 0) {
    return [];
  } else {
    const newArr = matrix.map(function(v,i) {

      if(i % 2 === 0) {
        return v;
      } else {
        return v.reverse();
      }
    });

    return [].concat.apply([], newArr);
  };
  
}
