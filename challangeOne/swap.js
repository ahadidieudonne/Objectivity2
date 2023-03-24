function swapElements(arr, index1, index2) {
    const temp = arr[index1];
    
    arr[index1] = arr[index2];
    arr[index2] = temp;
        return arr;
  }
  const arr = [1, 2, 3, 4, 5];
  swapElements(arr, 1, 3); // Returns [1, 4, 3, 2, 5]