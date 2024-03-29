// merge sort

function mergeSort(arr) {
  // if the array is length one or zero, return the array
  if(arr.length < 2) {
    return arr;
  }

  // figure out the middle point
  var middle = parseInt(arr.length / 2);

  // create an array of the left half
  var left = arr.slice(0, middle);

  // create an array of right half
  var right = arr.slice(middle, arr.length);
  //var right = arr.slice(middle);
  // call merge on a recursively called left half and right half
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {

  //placeholder storage for answer
  var result = [];

  // while both arrays have elements in them, zip them together
  while(left.length && right.length) {
    // if the left array first element is less than the right array first element,
    if(left[0] <= right[0]) {
      //push to result
      result.push(left.shift());
      // else push the right array first element to result
    } else {
      result.push(right.shift());
    }
  }

  // if left is the only array with elements, push them all in
  while(left.length) {
    result.push(left.shift());
  }

  // if right is the only array with elmeents, push them all in
  while(right.length) {
    result.push(right.shift());
  }

  // return final result
  return result;
}
