export const ShapeArray = (arr) => {
  for (var index in arr) {
    var name = arr[index].name;
   

    Object.assign(arr[index], { label: name }, {value : name});
  }
  return arr;
};
