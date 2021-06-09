export function map(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    const thing = arr[i];
    arr[i] = callback(thing);
  }
  return arr;
}

export function filter(arr, callback) {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      newArr[newArr.length] = arr[i];
    }
  }
  return newArr;
}

export function firstIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      return i;
    }
  }
  return -1;
}

// export function reduce(arr, callback) {
  
// };

export function every(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(!callback(arr[i])) {
      return false;
    }
    return true;
  }
}
