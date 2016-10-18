//counter

var counter = function counter() {
  var count = 0;
  return {
    getCount: function getCount() {
      return count;
    },
    increment: function increment() {
      count += 1;
    }
  };
};

// big O practice

function mid(arr){
    var midIndex;      //O(1)
    if(arr.length % 2 === 0){  //o(1)
        midIndex = arr.length/2;
    }else {
        midIndex = (arr.length-1)/2;  //more math
    } //O(1)
    return arr[midIndex];        //lookup is O(1)
}

//O(1)
