export function map(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    const thing = arr[i];
    arr[i] = callback(thing);
  }
  return arr;
}
